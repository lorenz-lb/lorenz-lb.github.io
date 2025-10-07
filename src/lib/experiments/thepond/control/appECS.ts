import { vec3, mat4 } from "gl-matrix";
import { EntityManager } from "./entityManager";
import type { System } from "../systems/system";
import { MatrixUpdateSystem } from "../systems/matrixUpdateSystem";
import { RenderSystem } from "../systems/renderSystem";
import { TransformComponent } from "../components/transformComponent";
import { RenderComponent } from "../components/renderComponent";

import testshader from "../shaders/testShader.wgsl?raw"
import { ObjReader } from "./objReader";


// assets
import statueObj from "../assets/statue.obj?url"
import { CameraComponent } from "../components/cameraComponent";
import { Deg2Rad } from "../model/math_stuff";
import { cameraPosition } from "three/tsl";
import { PipelineTypes } from "../model/definitions";
import { Material } from "../view/material";
import texture_fish_01 from "../assets/fish_m01.png"

export class ECSApp {
    private canvas: HTMLCanvasElement;

    // device / context
    private device!: GPUDevice;
    private context!: GPUCanvasContext;
    private format!: GPUTextureFormat;

    // pipeline
    private globalUniformBuffer!: GPUBuffer;
    private pipelines!: GPURenderPipeline;
    private frameGroupLayouts!: GPUBindGroupLayout;
    private globalBindGroup!: GPUBindGroup;
    private frameBindGroups!: GPUBindGroup;
    private materialGroupLayout!: GPUBindGroupLayout;

    // depthStencil
    private depthStencilState!: GPUDepthStencilState;
    private depthStencilBuffer!: GPUTexture;
    private depthStencilView!: GPUTextureView;
    private depthStencilAttachment!: GPURenderPassDepthStencilAttachment;

    // assets
    triangleMaterial!: Material

    // ECS Core
    private entityManager: EntityManager;
    // Systeme
    private matrixUpdateSystem!: MatrixUpdateSystem;
    private renderSystem!: RenderSystem;
    // Entity 
    private statue!: number;
    private camera!: number;

    // Kamera Matrizen (vereinfacht)
    private projectionMatrix!: mat4;
    private viewMatrix!: mat4;


    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.entityManager = new EntityManager();
    }

    async initialize() {
        await this.setupDevice();
        await this.makeBindGroupLayouts();
        await this.createAssets();
        await this.makeDepthBufferResources();
        await this.makePipelines();
        await this.makeBindGroups();


        await this.initECS();

        return true;
    }


    async setupDevice() {
        if (!navigator.gpu) {
            console.error("WebGPU wird in diesem Browser nicht unterstützt.");
            return;
        }

        const adapter = await navigator.gpu.requestAdapter();
        this.device = await adapter?.requestDevice()!;

        this.context = this.canvas.getContext('webgpu')!;
        this.format = navigator.gpu.getPreferredCanvasFormat();
        this.context.configure({ device: this.device, format: this.format, alphaMode: "opaque" });
    }

    async createAssets() {

        this.triangleMaterial = new Material();


        const uniformBufferSize = 16 * 4; // mat4 Größe
        this.globalUniformBuffer = this.device.createBuffer({
            size: uniformBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            label: 'Global Uniform Buffer'
        });


        await this.triangleMaterial.init(this.device, texture_fish_01, this.materialGroupLayout);
    }

    async makeDepthBufferResources() {


        this.depthStencilState = {
            format: "depth24plus-stencil8",
            depthWriteEnabled: true,
            depthCompare: "less-equal",
        };

        const size: GPUExtent3D = {
            width: this.canvas.width,
            height: this.canvas.height,
            depthOrArrayLayers: 1,
        };

        const depthBufferDescriptor: GPUTextureDescriptor = {
            size: size,
            format: "depth24plus-stencil8",
            usage: GPUTextureUsage.RENDER_ATTACHMENT,
        };

        this.depthStencilBuffer = this.device.createTexture(depthBufferDescriptor);

        // not needed 
        const viewDescriptor: GPUTextureViewDescriptor = {
            format: "depth24plus-stencil8",
            dimension: "2d",
            aspect: "all",
        };

        this.depthStencilView = this.depthStencilBuffer.createView(viewDescriptor);

        this.depthStencilAttachment = {
            view: this.depthStencilView,
            depthClearValue: 1.0,
            depthLoadOp: "clear",
            depthStoreOp: "store",
            stencilLoadOp: "clear",
            stencilStoreOp: "store",
        };
    }

    async makeBindGroupLayouts() {
        this.frameGroupLayouts = this.device.createBindGroupLayout({
            entries: [{
                binding: 0,
                visibility: GPUShaderStage.VERTEX,
                buffer: { type: "uniform" }
            },
            ]
        });

        // material 
        this.materialGroupLayout = this.device.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {}
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: {}
                },
            ]
        });
    }

    async makeBindGroups() {
        this.globalBindGroup = this.device.createBindGroup({
            layout: this.frameGroupLayouts,
            entries: [{
                binding: 0,
                resource: { buffer: this.globalUniformBuffer },
            },
            ],
            label: 'Global Uniforms (ViewProjection)',
        });

        this.frameBindGroups = this.device.createBindGroup({
            layout: this.materialGroupLayout,
            entries: [
                { binding: 0, resource: this.triangleMaterial.sampler },
                { binding: 1, resource: this.triangleMaterial.view },
            ],
            label: 'Fish 2'
        });
    }

    async initECS() {
        // d) ECS System Initialisierung
        this.matrixUpdateSystem = new MatrixUpdateSystem(this.device);
        this.renderSystem = new RenderSystem(this.device, this.context, this.globalBindGroup);

        // e) Entitäten erstellen
        this.createEntities();
    }

    private async makePipelines() {
        const shaderModule = this.device.createShaderModule({ code: testshader, label: 'Default Shader' });

        const vertexLayout = {
            arrayStride: 20,
            attributes: [
                {
                    shaderLocation: 0,
                    format: "float32x3",
                    offset: 0,
                },
                {
                    shaderLocation: 1,
                    format: "float32x2",
                    offset: 12 /**2 4 byte numbers**/,
                }

            ],
        }

        const instanceLayout = {
            arrayStride: 16 * 4, // 64 Bytes für mat4
            stepMode: 'instance',
            attributes: [
                { shaderLocation: 4, offset: 0, format: 'float32x4' },
                { shaderLocation: 5, offset: 16, format: 'float32x4' },
                { shaderLocation: 6, offset: 32, format: 'float32x4' },
                { shaderLocation: 7, offset: 48, format: 'float32x4' },
            ],
        };

        const pipelineLayout = this.device.createPipelineLayout({
            bindGroupLayouts: [
                this.frameGroupLayouts,
                this.materialGroupLayout
            ]
        });

        this.pipelines = this.device.createRenderPipeline({
            label: 'ECS Instancing Pipeline',
            layout: pipelineLayout,
            vertex: {
                module: shaderModule,
                entryPoint: 'vs_main',
                buffers: [
                    // Buffer 0: Vertex-Daten
                    vertexLayout,
                    // Buffer 1: Instanz-Daten (Matrix)
                    instanceLayout,
                ],
            },
            fragment: {
                module: shaderModule,
                entryPoint: 'fs_main',
                targets: [{ format: this.format }],
            },
            primitive: {
                topology: 'triangle-list',
                cullMode: 'none',
            },

            //depthStencil: this.depthStencilState,
        });
    }
    // --- 2. INITIALISIERUNG ---


    private async createEntities() {

        const aspectRatio: number = this.canvas.width / this.canvas.height;

        this.camera = this.entityManager.createEntity();
        this.entityManager.addComponent(this.camera,
            new CameraComponent(vec3.create(), vec3.create(), vec3.create(), { aspect: aspectRatio }));
        this.entityManager.addComponent(this.camera,
            new TransformComponent(vec3.fromValues(0, 1, -3)));

        let statueMesh = await ObjReader.createMesh(this.device, statueObj, "statue-mesh")
        this.statue = this.entityManager.createEntity();
        this.entityManager.addComponent(this.statue, new TransformComponent(vec3.fromValues(0, 0, 0), vec3.fromValues(-90, 0, 0)));
        this.entityManager.addComponent(this.statue, new RenderComponent(
            this.pipelines,
            statueMesh.buffer,
            statueMesh.count,
            this.frameBindGroups,
        ));
    }

    // --- 3. GAME LOOP ---

    run = (time: number) => {
        const timeInSeconds = time / 1000;
        // 1. Logik-Update: Holt Komponenten und führt Logik aus (z.B. Rotation)
        const transforms = this.entityManager.getComponents(TransformComponent);
        const renderData = this.entityManager.getComponents(RenderComponent);
        const cameraData = this.entityManager.getComponents(CameraComponent);



        const cameraComponent = cameraData.get(this.camera);
        const cameraTransform = transforms.get(this.camera);
        const statueTransform = transforms.get(this.statue);

        // Beispiel: Rotation anpassen
        if (statueTransform) {
            statueTransform.eulers[2] = timeInSeconds * 10;
        }

        if (cameraComponent && cameraTransform && statueTransform) {
            // update camera
            this.projectionMatrix = mat4.create();
            mat4.perspective(this.projectionMatrix, cameraComponent.fov, cameraComponent.aspect, cameraComponent.near, cameraComponent.far);


            const target = vec3.create();
            vec3.copy(target, cameraTransform.position);
            target[2] += 1.0;

            this.viewMatrix = mat4.create();
            mat4.lookAt(this.viewMatrix, cameraTransform.position, target, vec3.fromValues(0, 1, 0));

            // ViewProjection Matrix initialisieren und hochladen
            const viewProjectionMatrix = mat4.create();
            mat4.multiply(viewProjectionMatrix, this.projectionMatrix, this.viewMatrix);
            this.device.queue.writeBuffer(
                this.globalUniformBuffer,
                0,
                viewProjectionMatrix as Float32Array
            );
        }



        // render 1. create all matrx 2. render
        const { buffer, batches } = this.matrixUpdateSystem.update(transforms, renderData);
        this.renderSystem.update(buffer, batches, this.depthStencilAttachment);

        requestAnimationFrame(this.run);
    }
}
