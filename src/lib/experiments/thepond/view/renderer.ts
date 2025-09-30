import shaderCode from './shaders/shaders.wgsl?raw'
import { TriangleMesh } from './triangleMesh';
import { QuadMesh } from './quadMesh';
import { mat4 } from 'gl-matrix';
import { Material } from "./material"

import { ObjectTypes, type RenderData } from '../model/definitions';

// assets 
import asset_fish_1 from "../assets/fish_m00.png"
import asset_fish_2 from "../assets/fish_m02.png"

export class Renderer {

    canvas: HTMLCanvasElement;

    // device / context
    adapter!: GPUAdapter;
    device!: GPUDevice;
    context!: GPUCanvasContext;
    format!: GPUTextureFormat;

    // pipeline
    uniformBuffer!: GPUBuffer;
    pipeline!: GPURenderPipeline;
    frameGroupLayout!: GPUBindGroupLayout;
    materialGroupLayout!: GPUBindGroupLayout;
    frameBindGroup!: GPUBindGroup;

    // Depth Stencil
    depthStencilState!: GPUDepthStencilState;
    depthStencilBuffer!: GPUTexture;
    depthStencilView!: GPUTextureView;
    depthStencilAttachment!: GPURenderPassDepthStencilAttachment;


    // assests
    triangleMesh!: TriangleMesh;
    quadMesh!: QuadMesh;
    triangleMaterial!: Material;
    quadMaterial!: Material;
    objectBuffer!: GPUBuffer;


    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

    async Initialize() {
        await this.setupDevice();
        await this.makeBindGroupLayouts();
        await this.createAssets();
        await this.makeDepthBufferResources();
        await this.makePipeline();
        await this.makeBindGroup();
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

        // frame 

        this.frameGroupLayout = this.device.createBindGroupLayout({
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

    async makePipeline() {


        const pipelineLayout = this.device.createPipelineLayout({
            bindGroupLayouts: [this.frameGroupLayout, this.materialGroupLayout],
        });

        const shaderModule = this.device.createShaderModule({ code: shaderCode });
        const pipelineDescriptor: GPURenderPipelineDescriptor = {
            layout: pipelineLayout,
            vertex: {
                module: shaderModule,
                entryPoint: "vs_main",
                buffers: [this.triangleMesh.bufferLayout],
            },
            fragment: {
                module: shaderModule,
                entryPoint: "fs_main",
                targets: [
                    {
                        format: this.format,
                    },
                ],
            },
            primitive: {
                topology: "triangle-list",
            },
            depthStencil: this.depthStencilState,
        };

        this.pipeline = this.device.createRenderPipeline(pipelineDescriptor);
    }


    async createAssets() {
        this.triangleMesh = new TriangleMesh(this.device);
        this.quadMesh = new QuadMesh(this.device);
        this.triangleMaterial = new Material();
        this.quadMaterial = new Material();

        this.uniformBuffer = this.device.createBuffer({ size: 64 * 2, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });

        // 1024 4x4 matrix
        const modelBufferDescriptor: GPUBufferDescriptor = {
            size: 64 * 1024,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        };
        this.objectBuffer = this.device.createBuffer(modelBufferDescriptor);

        await this.triangleMaterial.init(this.device, asset_fish_1, this.materialGroupLayout);
        await this.quadMaterial.init(this.device, asset_fish_2, this.materialGroupLayout);
    }

    async makeBindGroup() {
        this.frameBindGroup = this.device.createBindGroup({
            layout: this.frameGroupLayout,
            entries: [
                { binding: 0, resource: { buffer: this.uniformBuffer } },
                { binding: 1, resource: { buffer: this.objectBuffer } },
            ]
        });

    }

    async render(renderables: RenderData) {

        // if (!this.device || !this.pipeline) {
        //     return;
        // }

        // crate mat4
        const projection = mat4.create();
        mat4.perspective(projection, Math.PI / 4, 800 / 600, 0.1, 100);

        const view = renderables.viewTransform;

        this.device.queue.writeBuffer(this.objectBuffer, 0, renderables.modelTransforms, 0, renderables.modelTransforms.length);
        this.device.queue.writeBuffer(this.uniformBuffer, 0, <ArrayBuffer><unknown>view);
        this.device.queue.writeBuffer(this.uniformBuffer, 64, <ArrayBuffer><unknown>projection);

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

        renderpass.setPipeline(this.pipeline);
        renderpass.setBindGroup(0, this.frameBindGroup);

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

        renderpass.end();

        this.device.queue.submit([commandEncoder.finish()]);
    }
}
