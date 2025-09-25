import shaderCode from './shaders/shaders.wgsl?raw'
import { TriangleMesh } from './triangleMesh';
import { mat4 } from 'gl-matrix';
import { Material } from "./material"

// assets 
import asset_fish_1 from "./assets/fish_m00.png"

export class Renderer {

    canvas: HTMLCanvasElement;

    // device / context
    adapter!: GPUAdapter;
    device!: GPUDevice;
    context!: GPUCanvasContext;
    format!: GPUTextureFormat;

    // pipeline
    uniformBuffer!: GPUBuffer;
    bindGroup!: GPUBindGroup;
    pipeline!: GPURenderPipeline;

    // assests
    triangleMesh!: TriangleMesh;
    material!: Material;
    t: number;


    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.t = 0.0;
    }

    async Initialize() {
        await this.setupDevice();
        // determine layout => create before pipeline!
        await this.createAssets();
        await this.makePipeline();
        this.render();
    }

    async setupDevice() {
        this.adapter = <GPUAdapter>await navigator.gpu?.requestAdapter();
        this.device = <GPUDevice>await this.adapter?.requestDevice();

        this.context = <GPUCanvasContext>this.canvas.getContext("webgpu");
        this.format = "bgra8unorm";

        this.context.configure({ device: this.device, format: this.format, alphaMode: "opaque" });

    }

    async makePipeline() {

        this.uniformBuffer = this.device.createBuffer({ size: 64 * 3, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });

        const bindGroupLayout = this.device.createBindGroupLayout({
            entries: [{
                binding: 0,
                visibility: GPUShaderStage.VERTEX,
                buffer: { type: "uniform" }
            },
            {
                binding: 1,
                visibility: GPUShaderStage.FRAGMENT,
                texture: {}
            },
            {
                binding: 2,
                visibility: GPUShaderStage.FRAGMENT,
                sampler: {}
            }]
        });

        this.bindGroup = this.device.createBindGroup({
            layout: bindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.uniformBuffer
                    }
                },
                {
                    binding: 1,
                    resource: this.material.view
                },
                {
                    binding: 2,
                    resource: this.material.sampler
                },

            ],
        });


        const pipelineLayout = this.device.createPipelineLayout({
            bindGroupLayouts: [bindGroupLayout],
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
        };

        this.pipeline = this.device.createRenderPipeline(pipelineDescriptor);



    }

    async createAssets() {
        this.triangleMesh = new TriangleMesh(this.device);
        this.material = new Material();
        await this.material.init(this.device, asset_fish_1);
    }

    render() {

        this.t += 0.01;

        if (this.t > 2.0 * Math.PI) {
            this.t -= 2.0 * Math.PI;
        }

        // crate mat4
        const projection = mat4.create();
        mat4.perspective(projection, Math.PI / 4, 800 / 600, 0.1, 10);

        const view = mat4.create();
        mat4.lookAt(view, [-2, 0, 2], [0, 0, 0], [0, 0, 1]);

        const model = mat4.create();
        mat4.rotate(model, model, this.t, [0, 0, 1]);

        this.device.queue.writeBuffer(this.uniformBuffer, 0, <ArrayBuffer><unknown>model);
        this.device.queue.writeBuffer(this.uniformBuffer, 64, <ArrayBuffer><unknown>view);
        this.device.queue.writeBuffer(this.uniformBuffer, 128, <ArrayBuffer><unknown>projection);

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
        });

        renderpass.setPipeline(this.pipeline);
        renderpass.setBindGroup(0, this.bindGroup);
        renderpass.setVertexBuffer(0, this.triangleMesh.buffer);
        renderpass.draw(3, 1, 0, 0);
        renderpass.end();

        this.device.queue.submit([commandEncoder.finish()]);

        requestAnimationFrame(this.render.bind(this));
    }
}
