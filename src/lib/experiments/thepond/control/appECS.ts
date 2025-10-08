import { vec3, mat4 } from "gl-matrix";
import { EntityManager } from "./entityManager";
import type { System } from "../systems/system";
import { MatrixUpdateSystem } from "../systems/matrixUpdateSystem";
import { RenderSystem } from "../systems/renderSystem";
import { TransformComponent } from "../components/transformComponent";
import { RenderComponent } from "../components/renderComponent";

import testshader from "../shaders/testShader.wgsl?raw"
import { OBJParser, MTLParser } from "./objParser";
import { MaterialManager } from "../view/materialManager";


// ###### ASSETS #######
import statueObj from "../assets/statue.obj?url"
import blaster from "../assets/blaster/blaster-f.obj?url"
import { CameraComponent } from "../components/cameraComponent";
import { Deg2Rad } from "../model/math_stuff";
import { cameraPosition, label } from "three/tsl";
import { PipelineTypes } from "../model/definitions";
import { Material } from "../view/material";
// material
import mat_blaster from "../assets/blaster/blaster-f.mtl?url"


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
    private materialTextureLayout!: GPUBindGroupLayout;
    private materialConstantLayout!: GPUBindGroupLayout;

    // depthStencil
    private depthStencilState!: GPUDepthStencilState;
    private depthStencilBuffer!: GPUTexture;
    private depthStencilView!: GPUTextureView;
    private depthStencilAttachment!: GPURenderPassDepthStencilAttachment;

    // assets
    materialManager!: MaterialManager;

    // ECS Core
    private entityManager: EntityManager;
    // Systeme
    private matrixUpdateSystem!: MatrixUpdateSystem;
    private renderSystem!: RenderSystem;
    // Entity 
    private statue!: number;
    private camera!: number;
    private blaster!: number;

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

        this.materialManager = new MaterialManager(this.device, this.materialTextureLayout, this.materialConstantLayout);
        this.materialManager.loadMaterial(mat_blaster);



        const uniformBufferSize = 16 * 4; // mat4 Größe
        this.globalUniformBuffer = this.device.createBuffer({
            size: uniformBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            label: 'Global Uniform Buffer'
        });
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
        // Group 0: Frame / Global Uniforms
        // eg. viewProjectionMatrix
        this.frameGroupLayouts = this.device.createBindGroupLayout({
            entries: [{
                binding: 0,
                visibility: GPUShaderStage.VERTEX,
                buffer: { type: "uniform" }
            },
            ],
            label: "FrameGroupLayout",
        });

        // Group 1: Material / Texture
        this.materialTextureLayout = this.device.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: {}
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {}
                },
            ],
            label: "MaterialTextureLayout",
        });

        this.materialConstantLayout = this.device.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.FRAGMENT,
                    buffer: { type: "uniform" }
                },
            ],
            label: "MaterialConstantLayout",
        });
    }

    /**
     * Creates the actual bindgroups to dispatch to the GPU.
     * This function does NOT handle Material bind groups.
     * Those are created in the Material class
     * */
    async makeBindGroups() {
        this.globalBindGroup = this.device.createBindGroup({
            layout: this.frameGroupLayouts,
            entries: [{
                binding: 0,
                resource: { buffer: this.globalUniformBuffer },
            },
            ],
            label: 'GlobalUniforms',
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
            arrayStride: 32,
            attributes: [
                {
                    shaderLocation: 0,
                    format: "float32x3",
                    offset: 0,
                },

                {
                    shaderLocation: 1,
                    format: "float32x3",
                    offset: 12,
                },
                {
                    shaderLocation: 2,
                    format: "float32x2",
                    offset: 24 /**2 4 byte numbers**/,
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
                this.materialTextureLayout
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

            depthStencil: this.depthStencilState,
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

        let statueMesh = await OBJParser.createMesh(this.device, statueObj, "statue-mesh")
        this.statue = this.entityManager.createEntity();
        this.entityManager.addComponent(this.statue, new TransformComponent(vec3.fromValues(0, 0, 0), vec3.fromValues(-90, 0, 0)));

        let blasterMesh = await OBJParser.createMesh(this.device, blaster, "blastermesh")
        this.blaster = this.entityManager.createEntity();
        this.entityManager.addComponent(this.blaster, new TransformComponent(vec3.fromValues(0, 1, 0), vec3.create()));
        this.entityManager.addComponent(this.blaster, new RenderComponent(
            this.pipelines,
            blasterMesh.buffer,
            blasterMesh.count,
            this.materialManager.getMaterial("colormap")!.textureBindGroup
        ));

        console.log(this.materialManager.getMaterial("colormap")?.textureBindGroup.label)

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
        const blasterTransform = transforms.get(this.blaster);


        // Beispiel: Rotation anpassen

        if (cameraComponent && cameraTransform && blasterTransform) {

            blasterTransform.eulers[1] += 1;

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
