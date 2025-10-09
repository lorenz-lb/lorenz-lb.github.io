import { vec3, mat4 } from "gl-matrix";
import { EntityManager } from "./entityManager";
import type { System } from "../systems/system";
import { MatrixUpdateSystem } from "../systems/matrixUpdateSystem";
import { RenderSystem } from "../systems/renderSystem";
import { TransformComponent } from "../components/transformComponent";
import { MeshRenderComponent } from "../components/meshRenderComponent";

import { OBJParser, MTLParser } from "./objParser";
import { MaterialManager } from "../view/materialManager";

// ############# Shader #############
import defaultShader from "../shaders/defaultShader.wgsl?raw"
import debugShader from "../shaders/debugShader.wgsl?raw"

// ############# ASSETS #############
import { CameraComponent } from "../components/cameraComponent";
// blaster 
import obj_blaster from "../assets/blaster/blaster-f.obj?url"
import mat_blaster from "../assets/blaster/blaster-f.mtl?url"

// grass0
import mat_gras0 from "../assets/gras0/gras0.mtl?url"
import obj_gras0 from "../assets/gras0/gras0.obj?url"


export class ECSApp {
    private canvas: HTMLCanvasElement;

    // device / context
    private device!: GPUDevice;
    private context!: GPUCanvasContext;
    private format!: GPUTextureFormat;

    // pipeline
    private globalUniformBuffer!: GPUBuffer;
    private frameGroupLayouts!: GPUBindGroupLayout;
    private globalBindGroup!: GPUBindGroup;

    // depthStencil
    //private depthStencilState!: GPUDepthStencilState;
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
    private camera!: number;
    private blaster!: number;


    private gras0!: number;

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

        this.materialManager = new MaterialManager(this.device, this.frameGroupLayouts);

        // create all pipelines for each shader
        this.materialManager.createPipeline("default", defaultShader, true);
        this.materialManager.createPipeline("debug", debugShader, true);

        // create materials from MTL files
        await this.materialManager.loadMaterial(mat_blaster, "default");
        await this.materialManager.loadMaterial(mat_gras0);


        const uniformBufferSize = 16 * 4; // mat4 Größe
        this.globalUniformBuffer = this.device.createBuffer({
            size: uniformBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            label: 'Global Uniform Buffer'
        });
    }

    async makeDepthBufferResources() {


        // this.depthStencilState = {
        //     format: "depth24plus-stencil8",
        //     depthWriteEnabled: true,
        //     depthCompare: "less-equal",
        // };

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
                visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
                buffer: { type: "uniform" }
            },
            ],
            label: "FrameGroupLayout",
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

    private async createEntities() {

        const aspectRatio: number = this.canvas.width / this.canvas.height;

        this.camera = this.entityManager.createEntity();
        this.entityManager.addComponent(this.camera,
            new CameraComponent(vec3.create(), vec3.create(), vec3.create(), { aspect: aspectRatio }));
        this.entityManager.addComponent(this.camera,
            new TransformComponent(vec3.fromValues(0, 1, -3)));

        // gras0
        //     let gras0Mesh = await OBJParser.createMesh(this.device, obj_gras0, "gras0Mesh");
        //     this.gras0 = this.entityManager.createEntity();
        //     this.entityManager.addComponent(this.gras0, new TransformComponent(vec3.fromValues(0, 1, -1.5), vec3.fromValues(0, 0, 0)));
        //     console.log(this.materialManager.getMaterial("matGras0"));
        //     this.entityManager.addComponent(this.gras0, new MeshRenderComponent(
        //         this.materialManager.getMaterial("matGras0")!,
        //         gras0Mesh.buffer,
        //         gras0Mesh.count,
        //     ))
        //
        this.blaster = this.entityManager.createEntity();
        let blasterMesh = await OBJParser.createMesh(this.device, obj_blaster, "colormap");
        this.entityManager.addComponent(this.blaster, new TransformComponent(vec3.fromValues(0, 1, -1), vec3.fromValues(0, 90, 0)));
        this.entityManager.addComponent(this.blaster, new MeshRenderComponent(
            this.materialManager.getMaterial("colormap")!,
            blasterMesh.buffer,
            blasterMesh.count
        ));
    }


    // --- 3. GAME LOOP ---
    run = (time: number) => {
        const timeInSeconds = time / 1000;
        const transformComponents = this.entityManager.getComponents(TransformComponent);
        const renderComponents = this.entityManager.getComponents(MeshRenderComponent);
        const cameraData = this.entityManager.getComponents(CameraComponent);



        const cameraComponent = cameraData.get(this.camera);
        const cameraTransform = transformComponents.get(this.camera);
        //const blasterTransform = transforms.get(this.blaster);


        // Beispiel: Rotation anpassen


        //blasterTransform.eulers[1] += 0.3;

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



        // render 1. create all matrx 2. render
        const { buffer, batches } = this.matrixUpdateSystem.update(transformComponents, renderComponents);
        this.renderSystem.update(buffer, batches, this.depthStencilAttachment);

        requestAnimationFrame(this.run);
    }
}
