import { vec2, vec3, mat4 } from "gl-matrix";
import { EntityManager } from "./entityManager";
import { GameState } from "./gameState";
import { MatrixUpdateSystem } from "../systems/matrixUpdateSystem";
import { RenderSystem } from "../systems/renderSystem";
import { TransformComponent } from "../components/transformComponent";
import { MeshRenderComponent } from "../components/meshRenderComponent";


import { OBJParser, MTLParser } from "./objParser";
import { MaterialManager, ShaderVariant } from "../view/materialManager";

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

// stuatue
import obj_statue from "../assets/statue.obj?url"

// quad
import obj_quad from "../assets/background/bg.obj?url"
import mat_bg from "../assets/background/bg.mtl?url"



import { FreeCamSystem } from "../systems/freeCamSystem";
import { InputManager } from "./inputManager";
import { FreeCamComponent } from "../components/freeCamComponent";
import { CameraSystem } from "../systems/cameraSystem";
import { TextComponent } from "../components/textComponent";
import { TextMeshGeneratorSystem } from "../systems/textMeshGeneratorSystem";
import { HUDRenderSystem } from "../systems/uiRenderSystem";
import { ToggleFreeCamSystem } from "../systems/toggleFreeCamSystem";
import { MeshManager } from "./meshManager";
import { AssetReferenceComponent } from "../components/assetReferenceComponent";
import { PositionManipulationSystemDEBUG } from "../systems/positionManipulationSystemDEBUG";
import type { MaterialProperies } from "../view/material";

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
    meshManager!: MeshManager;

    // ECS Core
    private entityManager: EntityManager;
    private inputManager: InputManager;
    private gameState: GameState;
    private lastTime: number = 0;
    // Systeme
    private matrixUpdateSystem!: MatrixUpdateSystem;
    private renderSystem!: RenderSystem;
    private cameraSystem!: CameraSystem;
    private textMeshGeneratorSystem!: TextMeshGeneratorSystem;
    private hudRendersystem!: HUDRenderSystem;

    // debug Systems
    private freeCamSystem!: FreeCamSystem;
    private toggleFreeCamSystem!: ToggleFreeCamSystem;
    private positionManipulationSystem!: PositionManipulationSystemDEBUG;

    // Entity 
    private camera!: number;
    private debugCam!: number;
    private blaster!: number;
    private statue!: number;

    // Kamera Matrizen (vereinfacht)
    private projectionMatrix!: mat4;
    private viewMatrix!: mat4;

    // hud
    private textTL!: number;


    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.entityManager = new EntityManager();
        this.inputManager = new InputManager(this.canvas);
        this.gameState = new GameState();
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

        // mesh
        this.meshManager = new MeshManager(this.device);
        await this.meshManager.loadMesh("blaster", obj_blaster);
        await this.meshManager.loadMesh("statue", obj_statue);
        await this.meshManager.loadMesh("quad", obj_quad);


        // material
        this.materialManager = new MaterialManager(this.device, this.frameGroupLayouts);

        // create all pipelines for each shader
        await this.materialManager.createPipeline(ShaderVariant.Textured, defaultShader);
        await this.materialManager.createPipeline(ShaderVariant.Untextured, debugShader);

        // create materials from MTL files
        await this.materialManager.loadMaterial(mat_blaster, ShaderVariant.Textured);
        await this.materialManager.loadMaterial(mat_gras0);
        await this.materialManager.loadMaterial(mat_bg);
        await this.materialManager.createMaterial("debug", { name: "debug", kd: vec3.fromValues(1.0, 1.0, 0.0) } as MaterialProperies, ShaderVariant.Untextured)

        const uniformBufferSize = 16 * 4;
        this.globalUniformBuffer = this.device.createBuffer({
            size: uniformBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            label: 'Global Uniform Buffer'
        });
    }

    async makeDepthBufferResources() {
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
        this.renderSystem = new RenderSystem(this.device, this.globalBindGroup);

        this.freeCamSystem = new FreeCamSystem(this.inputManager);
        this.toggleFreeCamSystem = new ToggleFreeCamSystem(this.inputManager);
        this.positionManipulationSystem = new PositionManipulationSystemDEBUG(this.inputManager, this.meshManager);

        this.cameraSystem = new CameraSystem();
        this.hudRendersystem = new HUDRenderSystem(this.device, this.canvas);
        await this.hudRendersystem.init();
        this.textMeshGeneratorSystem = new TextMeshGeneratorSystem(this.device);

        // e) Entitäten erstellen
        await this.createEntities();
    }

    private async createEntities() {

        const aspectRatio: number = this.canvas.width / this.canvas.height;

        this.camera = this.entityManager.createEntity();
        this.entityManager.addComponent(this.camera,
            new CameraComponent(vec3.create(), vec3.create(), vec3.create(), { aspect: aspectRatio }));
        this.entityManager.addComponent(this.camera,
            new TransformComponent(vec3.fromValues(0, 1, 2)));

        this.debugCam = this.entityManager.createEntity();
        this.entityManager.addComponent(this.debugCam,
            new CameraComponent(vec3.create(), vec3.create(), vec3.create(), { aspect: aspectRatio }));
        this.entityManager.addComponent(this.debugCam,
            new TransformComponent(vec3.fromValues(0, 1, 2)));
        this.entityManager.addComponent(this.debugCam,
            new FreeCamComponent(5.0));

        this.blaster = this.entityManager.createEntity();
        // todo
        let blasterMesh = this.meshManager.getMesh("blaster")!;
        this.entityManager.addComponent(this.blaster, new TransformComponent(vec3.fromValues(0, 1, -1), vec3.fromValues(0, 90, 0)));
        this.entityManager.addComponent(this.blaster, new AssetReferenceComponent(blasterMesh.id));
        this.entityManager.addComponent(this.blaster, new MeshRenderComponent(
            this.materialManager.getMaterial("colormap")!,
            blasterMesh.vertexBuffer,
            blasterMesh.vertexCount
        ));

        this.statue = this.entityManager.createEntity();
        //todo
        let statueMesh = this.meshManager.getMesh("statue")!;
        this.entityManager.addComponent(this.statue, new TransformComponent(vec3.fromValues(0, 1, -1), vec3.fromValues(-90, 0, 0)));
        this.entityManager.addComponent(this.statue, new AssetReferenceComponent(statueMesh.id));
        this.entityManager.addComponent(this.statue, new MeshRenderComponent(
            this.materialManager.getMaterial("colormap")!,
            statueMesh.vertexBuffer,
            statueMesh.vertexCount
        ));

        this.textTL = this.entityManager.createEntity();
        this.entityManager.addComponent(this.textTL, new TextComponent("Hello World", vec2.fromValues(0.0, 0.0), "myatas"));


        // ############ Background ############
        let bg = this.entityManager.createEntity();
        let quad = this.meshManager.getMesh("quad")!;
        this.entityManager.addComponent(bg, new TransformComponent(vec3.fromValues(0, 1, -30),
            vec3.fromValues(90, 0, 0), vec3.fromValues(19.20, 1, 10.80)));
        this.entityManager.addComponent(bg, new AssetReferenceComponent(quad.id));
        this.entityManager.addComponent(bg, new MeshRenderComponent(
            this.materialManager.getMaterial("background")!,
            quad.vertexBuffer,
            quad.vertexCount
        ));

        // ############ Floor ############
        // let floor = this.entityManager.createEntity();
        // let floorQuad = this.meshManager.getMesh("quad")!;
        // this.entityManager.addComponent(floor, new TransformComponent(vec3.fromValues(0, 1, -30),
        //     vec3.fromValues(90, 0, 0), vec3.fromValues(19.20, 1, 10.80)));
        // this.entityManager.addComponent(floor, new AssetReferenceComponent(floorQuad.id));
        // this.entityManager.addComponent(floor, new MeshRenderComponent(
        //     this.materialManager.getMaterial("background")!,
        //     floorQuad.vertexBuffer,
        //     floorQuad.vertexCount
        // ));
        //


        this.gameState.activeCameraEntityID = this.camera;

    }


    // --- 3. GAME LOOP ---
    run = (time: number) => {
        const timeInSeconds = time / 1000;
        const dt = timeInSeconds - this.lastTime;
        this.lastTime = timeInSeconds;

        const transformComponents = this.entityManager.getComponents(TransformComponent);
        const renderComponents = this.entityManager.getComponents(MeshRenderComponent);
        const cameraComponents = this.entityManager.getComponents(CameraComponent);
        const freeCamComponents = this.entityManager.getComponents(FreeCamComponent);
        const textComponents = this.entityManager.getComponents(TextComponent);
        const assetRefComponents = this.entityManager.getComponents(AssetReferenceComponent);

        const cameraTransform = transformComponents.get(this.camera)!;

        // ############### Text
        const textComponent = textComponents.get(this.textTL)!;
        textComponent.text = "x/z/y=" + Math.round(cameraTransform.position[0] * 10) / 10 + " " + Math.round(cameraTransform.position[1] * 10) / 10 + " " + Math.round(cameraTransform.position[2] * 10) / 10;
        textComponent.changed = true;

        this.positionManipulationSystem.update(this.gameState, transformComponents, cameraComponents, assetRefComponents);

        // ############### Movement
        this.toggleFreeCamSystem.update(this.debugCam, this.camera, this.gameState);
        this.freeCamSystem.update(freeCamComponents, cameraComponents, transformComponents, this.gameState, dt);
        this.cameraSystem.update(cameraComponents, transformComponents)

        const selectedCamera = cameraComponents.get(this.gameState.activeCameraEntityID)!;
        const selectedCameraTransform = transformComponents.get(this.gameState.activeCameraEntityID)!;

        // ############### TextMesh Creation
        this.textMeshGeneratorSystem.update(textComponents);


        // ############### Global Uniforms 
        this.projectionMatrix = mat4.create();
        mat4.perspective(this.projectionMatrix, selectedCamera.fov, selectedCamera.aspect, selectedCamera.near, selectedCamera.far);


        const target = vec3.create();
        vec3.add(target, selectedCameraTransform.position, selectedCamera.forwards);
        this.viewMatrix = mat4.create();
        mat4.lookAt(this.viewMatrix, selectedCameraTransform.position, target, vec3.fromValues(0, 1, 0));

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
        const currentTextureView = this.context.getCurrentTexture().createView();

        this.renderSystem.update(buffer, batches, this.depthStencilAttachment, currentTextureView);
        this.hudRendersystem.update(textComponents, this.depthStencilAttachment, currentTextureView)

        this.inputManager.updateInputs();
        requestAnimationFrame(this.run);
    }
}
