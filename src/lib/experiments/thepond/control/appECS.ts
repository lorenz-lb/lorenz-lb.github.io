import { vec2, vec3, mat4 } from "gl-matrix";
import { EntityManager } from "./entityManager";
import { GameState } from "./gameState";
import { MatrixUpdateSystem } from "../systems/matrixUpdateSystem";
import { RenderSystem } from "../systems/renderSystem";
import { TransformComponent } from "../components/transformComponent";
import { MeshRenderComponent } from "../components/meshRenderComponent";

import { MaterialManager, ShaderVariant } from "../view/materialManager";

// ############# Shader #############
import textureShader from "../shaders/textureShader.wgsl?raw"
import scrollShader from "../shaders/scrollShader.wgsl?raw"
import solidShader from "../shaders/solidShader.wgsl?raw"
import textShader from "../shaders/textShader.wgsl?raw"

// ############# ASSETS #############
import { CameraComponent } from "../components/cameraComponent";
// blaster 
import obj_blaster from "../assets/blaster/blaster-f.obj?url"
import mat_blaster from "../assets/blaster/blaster-f.mtl?url"

// grass0
import mat_gras0 from "../assets/gras0/gras0.mtl?url"

// stuatue
import obj_statue from "../assets/statue.obj?url"

// images 
import img_player from "../assets/player/player1.png?url"
import bg_water from "../assets/background/1.png?url"
import bg_stars from "../assets/background/2.png?url"
import bg_clouds_1 from "../assets/background/3.png?url"
import bg_clouds_2 from "../assets/background/4.png?url"

import { FreeCamSystem } from "../systems/freeCamSystem";
import { InputManager } from "./inputManager";
import { FreeCamComponent } from "../components/freeCamComponent";
import { CameraSystem } from "../systems/cameraSystem";
import { TextComponent } from "../components/textComponent";
import { TextMeshGeneratorSystem } from "../systems/textMeshGeneratorSystem";
import { ToggleFreeCamSystem } from "../systems/toggleFreeCamSystem";
import { MeshManager } from "./meshManager";
import { AssetReferenceComponent } from "../components/assetReferenceComponent";
import { PositionManipulationSystemDEBUG } from "../systems/positionManipulationSystemDEBUG";
import type { MaterialProperies } from "../view/material";
import { vec4 } from "three/tsl";
import { PlayerSystem } from "../systems/playerSystem";
import { PlayerComponent } from "../components/playerComponent";

export class ECSApp {
    private canvas: HTMLCanvasElement;

    // device / context
    private device!: GPUDevice;
    private context!: GPUCanvasContext;
    private format!: GPUTextureFormat;

    // pipeline
    // Contains (mutliple of 16): 
    // 4x4 View Projection Matrix
    // vec3 Camera Position
    // f32 Time
    // 3 f32 padding
    readonly GLOBAL_UNIFORM_ARRAY_SIZE = 16 + 3 + 1 + 4;
    readonly GLOBAL_UNIFORM_BUFFER_SIZE = (16 * 4) + (3 * 4) + (1 * 4) + (4 * 4);
    private globalUniformBuffer!: GPUBuffer;
    private frameGroupLayout!: GPUBindGroupLayout;
    private globalBindGroup!: GPUBindGroup;

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
    private playerSystem!: PlayerSystem;

    // debug Systems
    private freeCamSystem!: FreeCamSystem;
    private toggleFreeCamSystem!: ToggleFreeCamSystem;
    private positionManipulationSystem!: PositionManipulationSystemDEBUG;

    // Entity 
    private camera!: number;
    private debugCam!: number;

    // Kamera Matrizen (vereinfacht)
    private projectionMatrix!: mat4;
    private viewMatrix!: mat4;

    // hud
    private textTL!: number;

    // constants 
    readonly waterColor = vec3.fromValues(0.325, 0.396, 0.5840);

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
        this.meshManager.createQuad();
        await this.meshManager.loadMesh("blaster", obj_blaster);
        await this.meshManager.loadMesh("statue", obj_statue);
        //await this.meshManager.loadMesh("quad", obj_quad);

        // material
        this.materialManager = new MaterialManager(this.device, this.frameGroupLayout);

        // create all pipelines for each shader
        await this.materialManager.createPipeline(ShaderVariant.Textured, textureShader);
        await this.materialManager.createPipeline(ShaderVariant.TexturedAlpha, textureShader, true);
        await this.materialManager.createPipeline(ShaderVariant.Textured, textureShader);
        await this.materialManager.createPipeline(ShaderVariant.Untextured, solidShader);
        await this.materialManager.createPipeline(ShaderVariant.ScrollingTexture, scrollShader, true);

        await this.materialManager.createPipeline(ShaderVariant.Debug, solidShader);


        // create materials from MTL files
        await this.materialManager.loadMaterial(mat_blaster, ShaderVariant.Textured);
        await this.materialManager.loadMaterial(mat_gras0);
        await this.materialManager.createMaterial("uiText", { name: "uiText", kd: vec3.fromValues(1.0, 1.0, 1.0) } as MaterialProperies,
            ShaderVariant.Untextured);
        await this.materialManager.createMaterial("solid_red", { name: "solid_red", kd: vec3.fromValues(1.0, 0.0, 0.0) } as MaterialProperies,
            ShaderVariant.Untextured);
        await this.materialManager.createMaterial("floor", { name: "floor", kd: this.waterColor } as MaterialProperies,
            ShaderVariant.Untextured);
        await this.materialManager.createMaterial("player", { name: "player", kd: vec3.create(), map_kd: img_player } as MaterialProperies,
            ShaderVariant.TexturedAlpha);


        // backgrounds
        await this.materialManager.createMaterial("bg_water", { name: "bg_water", kd: vec3.create(), map_kd: bg_water, scrollSpeed: 10.0, parallaxFactor: 0.1 } as MaterialProperies,
            ShaderVariant.ScrollingTexture);
        await this.materialManager.createMaterial("bg_stars", { name: "bg_stars", kd: vec3.create(), map_kd: bg_stars, scrollSpeed: 10.0, parallaxFactor: 0.01 } as MaterialProperies,
            ShaderVariant.ScrollingTexture);
        await this.materialManager.createMaterial("bg_clouds_1", { name: "bg_clouds_1", kd: vec3.create(), map_kd: bg_clouds_1, scrollSpeed: 10.0, parallaxFactor: 0.1 } as MaterialProperies,
            ShaderVariant.ScrollingTexture);
        await this.materialManager.createMaterial("bg_clouds_2", { name: "bg_clouds_2", kd: vec3.create(), map_kd: bg_clouds_2, scrollSpeed: 10.0, parallaxFactor: 0.15 } as MaterialProperies,
            ShaderVariant.ScrollingTexture);


        this.globalUniformBuffer = this.device.createBuffer({
            size: this.GLOBAL_UNIFORM_BUFFER_SIZE,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            label: 'Global Uniform Buffer'
        });
    }

    async makeBindGroupLayouts() {
        // Group 0: Frame / Global Uniforms
        // eg. viewProjectionMatrix
        this.frameGroupLayout = this.device.createBindGroupLayout({
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
            layout: this.frameGroupLayout,
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
        this.renderSystem = new RenderSystem(this.device, this.globalBindGroup, this.context);
        await this.renderSystem.init();

        this.freeCamSystem = new FreeCamSystem(this.inputManager);
        this.toggleFreeCamSystem = new ToggleFreeCamSystem(this.inputManager);
        this.positionManipulationSystem = new PositionManipulationSystemDEBUG(this.inputManager, this.meshManager);

        this.cameraSystem = new CameraSystem();
        this.playerSystem = new PlayerSystem(this.inputManager);

        this.textMeshGeneratorSystem = new TextMeshGeneratorSystem(this.device);

        // e) Entitäten erstellen
        await this.createEntities();
    }

    private async createEntities() {

        const aspectRatio: number = this.canvas.width / this.canvas.height;

        this.camera = this.entityManager.createEntity();
        this.entityManager.addComponent(this.camera,
            new CameraComponent({ aspect: aspectRatio }));
        this.entityManager.addComponent(this.camera,
            new TransformComponent(vec3.fromValues(0, 1, 0)));
        // temp
        this.entityManager.addComponent(this.camera, new PlayerComponent(5));

        this.debugCam = this.entityManager.createEntity();
        this.entityManager.addComponent(this.debugCam,
            new CameraComponent({ aspect: aspectRatio }));
        this.entityManager.addComponent(this.debugCam,
            new TransformComponent(vec3.fromValues(0, 1, 0)));
        this.entityManager.addComponent(this.debugCam,
            new FreeCamComponent(5.0));


        // ############ Floor ############
        const floorY = -3;
        let floor = this.entityManager.createEntity();
        let floorQuad = this.meshManager.getMesh("quad")!;
        this.entityManager.addComponent(floor, new TransformComponent(
            vec3.fromValues(0, floorY, -8),
            vec3.fromValues(0, 0, 0),
            vec3.fromValues(50, 1, 50)));
        this.entityManager.addComponent(floor, new AssetReferenceComponent(floorQuad.id));
        this.entityManager.addComponent(floor, new MeshRenderComponent(
            this.materialManager.getMaterial("floor")!,
            floorQuad.vertexBuffer,
            floorQuad.vertexCount
        ));

        //############ player ############
        let player = this.entityManager.createEntity();
        let playerQuad = this.meshManager.getMesh("quad")!;
        let playerMaterial = this.materialManager.getMaterial("player")!;
        this.entityManager.addComponent(player, new PlayerComponent(5));
        this.entityManager.addComponent(player, new TransformComponent(
            vec3.fromValues(0, floorY + 0.5, -15),
            vec3.fromValues(90, 0, 0),
            vec3.fromValues(playerMaterial.texture.width / playerMaterial.texture.height, 1, 1)));
        this.entityManager.addComponent(player, new AssetReferenceComponent(playerQuad.id));
        this.entityManager.addComponent(player, new MeshRenderComponent(
            playerMaterial,
            playerQuad.vertexBuffer,
            playerQuad.vertexCount
        ));

        // ############ Background ############
        let bgWaterMaterial = this.materialManager.getMaterial("bg_water")!;
        let bgClouds1Material = this.materialManager.getMaterial("bg_clouds_1")!;
        let bgClouds2Material = this.materialManager.getMaterial("bg_clouds_2")!;
        let bgStarsMaterial = this.materialManager.getMaterial("bg_stars")!;

        let bgScaling = vec3.fromValues(bgWaterMaterial.texture.width / bgWaterMaterial.texture.height, 1, 1);
        vec3.scale(bgScaling, bgScaling, 18);

        const bgXY: [number, number] = [0, 5];

        let quad = this.meshManager.getMesh("quad")!;

        let bg_water = this.entityManager.createEntity();
        let bg_clouds_1 = this.entityManager.createEntity();
        let bg_clouds_2 = this.entityManager.createEntity();
        let bg_stars = this.entityManager.createEntity();

        // water 
        this.entityManager.addComponent(bg_water, new TransformComponent(
            vec3.fromValues(...bgXY, -20),
            vec3.fromValues(90, 0, 0),
            bgScaling));
        this.entityManager.addComponent(bg_water, new AssetReferenceComponent(quad.id));
        this.entityManager.addComponent(bg_water, new MeshRenderComponent(
            bgWaterMaterial,
            quad.vertexBuffer,
            quad.vertexCount
        ));

        // stars  
        this.entityManager.addComponent(bg_stars, new TransformComponent(
            vec3.fromValues(...bgXY, -19.9),
            vec3.fromValues(90, 0, 0),
            bgScaling));
        this.entityManager.addComponent(bg_stars, new AssetReferenceComponent(quad.id));
        this.entityManager.addComponent(bg_stars, new MeshRenderComponent(
            bgStarsMaterial,
            quad.vertexBuffer,
            quad.vertexCount
        ));

        // clouds 1
        this.entityManager.addComponent(bg_clouds_1, new TransformComponent(
            vec3.fromValues(...bgXY, -19.8),
            vec3.fromValues(90, 0, 0),
            bgScaling));
        this.entityManager.addComponent(bg_clouds_1, new AssetReferenceComponent(quad.id));
        this.entityManager.addComponent(bg_clouds_1, new MeshRenderComponent(
            bgClouds1Material,
            quad.vertexBuffer,
            quad.vertexCount
        ));

        // clouds 2
        this.entityManager.addComponent(bg_clouds_2, new TransformComponent(
            vec3.fromValues(...bgXY, -19.7),
            vec3.fromValues(90, 0, 0),
            bgScaling));
        this.entityManager.addComponent(bg_clouds_2, new AssetReferenceComponent(quad.id));
        this.entityManager.addComponent(bg_clouds_2, new MeshRenderComponent(
            bgClouds2Material,
            quad.vertexBuffer,
            quad.vertexCount
        ));

        this.entityManager.addComponent(bg_water, new PlayerComponent(5));
        this.entityManager.addComponent(bg_stars, new PlayerComponent(5));
        this.entityManager.addComponent(bg_clouds_1, new PlayerComponent(5));
        this.entityManager.addComponent(bg_clouds_2, new PlayerComponent(5));


        // TEXT
        this.textTL = this.entityManager.createEntity();
        this.entityManager.addComponent(this.textTL, new TextComponent("Hello World", vec2.fromValues(0.0, 0.0), "myatas"));

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
        const playerComponents = this.entityManager.getComponents(PlayerComponent);


        const cameraTransform = transformComponents.get(this.camera)!;


        this.positionManipulationSystem.update(this.gameState, transformComponents, cameraComponents, assetRefComponents);

        // ############### Movement
        this.toggleFreeCamSystem.update(this.debugCam, this.camera, this.gameState);
        this.freeCamSystem.update(freeCamComponents, cameraComponents, transformComponents, this.gameState, dt);
        this.cameraSystem.update(cameraComponents, transformComponents)
        this.playerSystem.update(playerComponents, transformComponents, this.gameState, dt);

        const selectedCamera = cameraComponents.get(this.gameState.activeCameraEntityID)!;
        const selectedCameraTransform = transformComponents.get(this.gameState.activeCameraEntityID)!;

        // ############### Text
        const textComponent = textComponents.get(this.textTL)!;
        textComponent.text = "x/z/y=" + Math.round(selectedCameraTransform.position[0] * 10) / 10 + " " + Math.round(selectedCameraTransform.position[1] * 10) / 10 + " " + Math.round(selectedCameraTransform.position[2] * 10) / 10;
        textComponent.changed = true;

        this.textMeshGeneratorSystem.update(textComponents);


        const width = 16 / 9;
        // ############### Global Uniforms 
        this.projectionMatrix = mat4.create();
        mat4.perspective(this.projectionMatrix, selectedCamera.fov, selectedCamera.aspect, selectedCamera.near, selectedCamera.far);
        //mat4.frustum(this.projectionMatrix, -1 - width / 2, 1 + width / 2, -1, 1, 2, 50);

        const target = vec3.create();
        vec3.add(target, selectedCameraTransform.position, selectedCamera.forwards);
        this.viewMatrix = mat4.create();
        mat4.lookAt(this.viewMatrix, selectedCameraTransform.position, target, vec3.fromValues(0, 1, 0));

        // ViewProjection Matrix initialisieren und hochladen
        const viewProjectionMatrix = mat4.create();
        mat4.multiply(viewProjectionMatrix, this.projectionMatrix, this.viewMatrix);

        const globalUniformArray = new Float32Array(this.GLOBAL_UNIFORM_ARRAY_SIZE);
        globalUniformArray.set(viewProjectionMatrix, 0);
        globalUniformArray[16] = cameraTransform.position[0];
        globalUniformArray[17] = cameraTransform.position[1];
        globalUniformArray[18] = cameraTransform.position[2];
        globalUniformArray[19] = 0.0; // padding
        globalUniformArray[20] = timeInSeconds;

        this.device.queue.writeBuffer(
            this.globalUniformBuffer,
            0,
            globalUniformArray
        );


        // ############### Render Passes 
        const { buffer, opaqueBatches, transparentBatches } = this.matrixUpdateSystem.update(transformComponents, renderComponents, selectedCameraTransform.position);

        this.renderSystem.update(buffer, opaqueBatches, transparentBatches, textComponents);


        this.inputManager.updateInputs();
        requestAnimationFrame(this.run);
    }
}
