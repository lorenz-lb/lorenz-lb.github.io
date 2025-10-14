import shaderCode from './shaders/shaders.wgsl?raw'
import skyShaderCode from './shaders/sky.wgsl?raw'
import { TriangleMesh } from './triangleMesh';
import { QuadMesh } from './quadMesh';
import { mat4 } from 'gl-matrix';
import { Material } from "./material"
import { CubeMapMaterial } from "./cubeMaterial"
import { ObjectTypes, type RenderData } from '../model/definitions';
import { ObjMesh } from './objMesh';
import { PipelineTypes } from '../model/definitions';
import { Camera } from '../model/camera';

// assets 
import asset_ground from "../assets/statue.obj?url"
// cubemap
import cube_top from "../assets/cube/up.png"
import cube_bottom from "../assets/cube/down.png"
import cube_back from "../assets/cube/back.png"
import cube_front from "../assets/cube/front.png"
import cube_left from "../assets/cube/left.png"
import cube_right from "../assets/cube/right.png"


export class Renderer {

    canvas: HTMLCanvasElement;

    // device / context
    adapter!: GPUAdapter;
    device!: GPUDevice;
    context!: GPUCanvasContext;
    format!: GPUTextureFormat;

    // pipeline
    uniformBuffer!: GPUBuffer;
    pipelines: { [pipeline in PipelineTypes]: GPURenderPipeline | null };
    frameGroupLayouts!: { [pipeline in PipelineTypes]: GPUBindGroupLayout | null };
    materialGroupLayout!: GPUBindGroupLayout;
    frameBindGroups!: { [pipeline in PipelineTypes]: GPUBindGroup | null };

    // Depth Stencil
    depthStencilState!: GPUDepthStencilState;
    depthStencilBuffer!: GPUTexture;
    depthStencilView!: GPUTextureView;
    depthStencilAttachment!: GPURenderPassDepthStencilAttachment;


    // assests
    triangleMesh!: TriangleMesh;
    quadMesh!: QuadMesh;
    statueMesh!: ObjMesh;
    triangleMaterial!: Material;
    quadMaterial!: Material;
    objectBuffer!: GPUBuffer;
    parameterBuffer!: GPUBuffer;
    skyMaterial!: CubeMapMaterial;


    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;

        this.pipelines = {
            [PipelineTypes.SKY]: null,
            [PipelineTypes.STANDARD]: null,
        }
    }

    async Initialize() {
        await this.setupDevice();
        await this.makeBindGroupLayouts();
        await this.createAssets();
        await this.makeDepthBufferResources();
        await this.makePipelines();
        await this.makeBindGroups();
    }

    async setupDevice() {
        this.adapter = <GPUAdapter>await navigator.gpu?.requestAdapter();
        this.device = <GPUDevice>await this.adapter?.requestDevice();

        this.context = <GPUCanvasContext>this.canvas.getContext("webgpu");
        this.format = "bgra8unorm";

        this.context.configure({ device: this.device, format: this.format, alphaMode: "opaque" });

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

        this.frameGroupLayouts = {
            [PipelineTypes.SKY]: null,
            [PipelineTypes.STANDARD]: null,
        }

        this.frameGroupLayouts[PipelineTypes.SKY] = this.device.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.VERTEX,
                    buffer: {
                        type: "uniform",
                    }
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.FRAGMENT,
                    texture: {
                        viewDimension: "cube",
                    }
                },
                {
                    binding: 2,
                    visibility: GPUShaderStage.FRAGMENT,
                    sampler: {
                    }
                },
            ]

        });

        this.frameGroupLayouts[PipelineTypes.STANDARD] = this.device.createBindGroupLayout({
            entries: [{
                binding: 0,
                visibility: GPUShaderStage.VERTEX,
                buffer: { type: "uniform" }
            },
            {
                binding: 1,
                visibility: GPUShaderStage.VERTEX,
                buffer: {
                    type: "read-only-storage",
                    hasDynamicOffset: false
                }
            },
            ]
        });

        // material 
        this.materialGroupLayout = this.device.createBindGroupLayout({
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
            ]
        });


    }

    async makePipelines() {


        let pipelineLayout = this.device.createPipelineLayout({
            bindGroupLayouts: [
                this.frameGroupLayouts[PipelineTypes.STANDARD] as GPUBindGroupLayout,
                this.materialGroupLayout
            ]
        });

        this.pipelines[PipelineTypes.STANDARD] = this.device.createRenderPipeline({
            vertex: {
                module: this.device.createShaderModule({
                    code: shaderCode
                }),
                entryPoint: "vs_main",
                buffers: [this.triangleMesh.bufferLayout,]
            },

            fragment: {
                module: this.device.createShaderModule({
                    code: shaderCode
                }),
                entryPoint: "fs_main",
                targets: [{
                    format: this.format
                }]
            },

            primitive: {
                topology: "triangle-list"
            },

            layout: pipelineLayout,
            depthStencil: this.depthStencilState,
        });

        // sky pipeline
        pipelineLayout = this.device.createPipelineLayout({
            bindGroupLayouts: [
                this.frameGroupLayouts[PipelineTypes.SKY] as GPUBindGroupLayout,
            ]
        });

        this.pipelines[PipelineTypes.SKY] = this.device.createRenderPipeline({
            vertex: {
                module: this.device.createShaderModule({
                    code: skyShaderCode
                }),
                entryPoint: "sky_vert_main"
            },

            fragment: {
                module: this.device.createShaderModule({
                    code: skyShaderCode
                }),
                entryPoint: "sky_frag_main",
                targets: [{
                    format: this.format
                }]
            },

            primitive: {
                topology: "triangle-list"
            },

            layout: pipelineLayout,
            depthStencil: this.depthStencilState,
        });




    }


    async createAssets() {
        this.triangleMesh = new TriangleMesh(this.device);
        this.quadMesh = new QuadMesh(this.device);
        this.statueMesh = new ObjMesh();
        await this.statueMesh.initialize(this.device, asset_ground);

        this.triangleMaterial = new Material();
        this.quadMaterial = new Material();

        this.uniformBuffer = this.device.createBuffer({ size: 64 * 2, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });

        // 1024 4x4 matrix
        const modelBufferDescriptor: GPUBufferDescriptor = {
            size: 64 * 1024,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        };
        this.objectBuffer = this.device.createBuffer(modelBufferDescriptor);

        const parameterBufferDescriptor: GPUBufferDescriptor = {
            size: 48,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        };
        this.parameterBuffer = this.device.createBuffer(parameterBufferDescriptor);

        await this.triangleMaterial.init(this.device, asset_fish_1, this.materialGroupLayout);
        await this.quadMaterial.init(this.device, asset_fish_2, this.materialGroupLayout);

        // cubemap
        const urls = [
            cube_back,
            cube_front,
            cube_left,
            cube_right,
            cube_top,
            cube_bottom
        ];

        this.skyMaterial = new CubeMapMaterial();
        await this.skyMaterial.initialize(this.device, urls);

    }

    async makeBindGroups() {
        this.frameBindGroups = {
            [PipelineTypes.SKY]: null,
            [PipelineTypes.STANDARD]: null,
        }
        this.frameBindGroups[PipelineTypes.STANDARD] = this.device.createBindGroup({
            layout: this.frameGroupLayouts[PipelineTypes.STANDARD] as GPUBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.uniformBuffer
                    }
                },
                {
                    binding: 1,
                    resource: {
                        buffer: this.objectBuffer,
                    }
                }
            ]
        });

        this.frameBindGroups[PipelineTypes.SKY] = this.device.createBindGroup({
            layout: this.frameGroupLayouts[PipelineTypes.SKY] as GPUBindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.parameterBuffer,
                    }
                },
                {
                    binding: 1,
                    resource: this.skyMaterial.view
                },
                {
                    binding: 2,
                    resource: this.skyMaterial.sampler
                }
            ]
        });

    }
    prepareScene(renderables: RenderData, camera: Camera) {

        const fovY = Math.PI / 4;

        //make transforms
        const projection = mat4.create();
        mat4.perspective(projection, fovY, this.canvas.width / this.canvas.height, 0.1, 100);

        const view = renderables.viewTransform;

        this.device.queue.writeBuffer(
            this.objectBuffer, 0,
            renderables.modelTransforms, 0,
            renderables.modelTransforms.length
        );
        this.device.queue.writeBuffer(this.uniformBuffer, 0, <ArrayBuffer><unknown>view);
        this.device.queue.writeBuffer(this.uniformBuffer, 64, <ArrayBuffer><unknown>projection);

        let dy = Math.tan(fovY / 2.0);
        let dx = dy * this.canvas.width / this.canvas.height;

        this.device.queue.writeBuffer(
            this.parameterBuffer, 0,
            new Float32Array(
                [
                    camera.forwards[0],
                    camera.forwards[1],
                    camera.forwards[2],
                    0.0,
                    dx * camera.right[0],
                    dx * camera.right[1],
                    dx * camera.right[2],
                    0.0,
                    dy * camera.up[0],
                    dy * camera.up[1],
                    dy * camera.up[2],
                    0.0
                ]
            ), 0, 12
        )
    }

    async render(renderables: RenderData, camera: Camera) {

        // if (!this.device || !this.pipeline) {
        //     return;
        // }
        //
        this.prepareScene(renderables, camera);


        const commandEncoder: GPUCommandEncoder = this.device.createCommandEncoder();
        const textureView: GPUTextureView = this.context
            .getCurrentTexture()
            .createView();
        const renderpass: GPURenderPassEncoder = commandEncoder.beginRenderPass({
            colorAttachments: [
                {
                    view: textureView,
                    clearValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },
                    loadOp: "clear",
                    storeOp: "store",
                },
            ],
            depthStencilAttachment: this.depthStencilAttachment,
        });

        // #### cubemap
        renderpass.setPipeline(this.pipelines[PipelineTypes.SKY] as GPURenderPipeline);
        renderpass.setBindGroup(0, this.frameBindGroups[PipelineTypes.SKY]);

        renderpass.setBindGroup(1, this.quadMaterial.bindGroup);
        renderpass.draw(6, 1, 0, 0);

        // ##### standard 
        renderpass.setPipeline(this.pipelines[PipelineTypes.STANDARD] as GPURenderPipeline);
        renderpass.setBindGroup(0, this.frameBindGroups[PipelineTypes.STANDARD]);

        let objectsDrawn: number = 0;
        // tris
        renderpass.setVertexBuffer(0, this.triangleMesh.buffer);
        renderpass.setBindGroup(1, this.triangleMaterial.bindGroup);
        renderpass.draw(3, renderables.objectsCount[ObjectTypes.TRIANGLE], 0, objectsDrawn);
        objectsDrawn += renderables.objectsCount[ObjectTypes.TRIANGLE];

        // quads
        renderpass.setVertexBuffer(0, this.quadMesh.buffer);
        renderpass.setBindGroup(1, this.quadMaterial.bindGroup);
        renderpass.draw(6, renderables.objectsCount[ObjectTypes.QUAD], 0, objectsDrawn);
        objectsDrawn += renderables.objectsCount[ObjectTypes.QUAD];

        // statue
        renderpass.setVertexBuffer(0, this.statueMesh.buffer);
        renderpass.setBindGroup(1, this.triangleMaterial.bindGroup);
        renderpass.draw(this.statueMesh.vertexCount, 1, 0, objectsDrawn);
        objectsDrawn += 1;


        renderpass.end();

        this.device.queue.submit([commandEncoder.finish()]);
    }
}
