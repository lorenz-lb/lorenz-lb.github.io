import type { TextComponent } from "../components/textComponent";
import type { System } from "./system";
import { mat4 } from "gl-matrix";
import shaderCode from "../shaders/textShader.wgsl?raw";
import { createFontAtlasBindings } from "../assets/fontAtlas/fontAtlas";

export class HUDRenderSystem implements System {
    // GPU
    private device: GPUDevice;
    private vertexBufferLayout!: GPUVertexBufferLayout;
    private textPipeline!: GPURenderPipeline;
    private orthoBuffer!: GPUBuffer;
    private colorUniformBuffer!: GPUBuffer;
    private colorBindGroup!: GPUBindGroup;
    private orthoBindGroup!: GPUBindGroup;
    private atlasBindGroup!: GPUBindGroup;
    private canvasWidth: number;
    private canvasHeight: number;
    private shaderModule!: GPUShaderModule;


    // ----- TEMP Crosshair ------
    //
    private crosshairBuffer!: GPUBuffer;
    private crosshairVertexCount!: number;
    //
    // ----- -------------- ------



    constructor(
        device: GPUDevice,
        width: number,
        height: number
    ) {
        this.device = device;
        this.canvasWidth = width;
        this.canvasHeight = height;
    }

    async init() {
        let atlasData = await createFontAtlasBindings(this.device);
        this.atlasBindGroup = atlasData.atlasBindGroup;

        this.shaderModule = this.device.createShaderModule({
            code: shaderCode
        });

        const orthoBindGroupLayout = this.device.createBindGroupLayout({
            label: 'Ortho (Group 0) Layout',
            entries: [{ binding: 0, visibility: GPUShaderStage.VERTEX, buffer: { type: 'uniform' } }],
        });

        // HINWEIS: atlasBindGroupLayout (Group 1) wird angenommen, dass es außerhalb erstellt wird.
        // Falls Sie es hier erstellen wollen, benötigen Sie die Textur und den Sampler.
        const atlasBindGroupLayout = atlasData.atlasBindGroupLayout;

        const colorBindGroupLayout = this.device.createBindGroupLayout({
            label: 'Color (Group 2) Layout',
            entries: [{ binding: 0, visibility: GPUShaderStage.FRAGMENT, buffer: { type: 'uniform' } }],
        });

        // 3. GLOBALE BUFFER UND BIND GROUPS
        this.orthoBuffer = this.device.createBuffer({
            size: 16 * 4,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            label: "HUD Ortho Matrix Buffer"
        });
        this.orthoBindGroup = this.device.createBindGroup({
            layout: orthoBindGroupLayout,
            entries: [{ binding: 0, resource: { buffer: this.orthoBuffer } }],
        });

        this.colorUniformBuffer = this.device.createBuffer({
            size: 4 * 4,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            label: "HUD Color Uniform Buffer"
        });
        this.colorBindGroup = this.device.createBindGroup({
            layout: colorBindGroupLayout,
            entries: [{ binding: 0, resource: { buffer: this.colorUniformBuffer } }],
        });

        // 4. VERTEX LAYOUT
        this.vertexBufferLayout = {
            arrayStride: 4 * 4,
            stepMode: 'vertex',
            attributes: [
                { shaderLocation: 0, offset: 0, format: 'float32x2' },
                { shaderLocation: 1, offset: 8, format: 'float32x2' },
            ],
        };

        // 5. PIPELINE ERSTELLUNG
        this.textPipeline = this.device.createRenderPipeline({
            layout: this.device.createPipelineLayout({
                bindGroupLayouts: [
                    orthoBindGroupLayout,
                    atlasBindGroupLayout,
                    colorBindGroupLayout,
                ],
            }),
            vertex: {
                module: this.shaderModule,
                entryPoint: 'vs_main',
                buffers: [this.vertexBufferLayout],
            },
            primitive: { topology: 'triangle-list' },

            depthStencil: {
                //depthWriteEnabled: false,
                //depthCompare: 'always',
                format: 'depth24plus-stencil8',
            },
            fragment: {
                module: this.shaderModule,
                entryPoint: 'fs_main',
                targets: [{
                    format: navigator.gpu.getPreferredCanvasFormat(),
                    blend: {
                        color: { srcFactor: 'src-alpha', dstFactor: 'one-minus-src-alpha' },
                        alpha: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha' },
                    },
                }],
            },
        });

        // ------ TEMP Crosshair ----- 
        const crosshairSize = 5.0;
        const halfWidth = this.canvasWidth / 2;
        const halfHeight = this.canvasHeight / 2;
        const uv = 2.0;

        const crosshairVertices = new Float32Array([
            halfWidth - crosshairSize, halfHeight - crosshairSize, uv, uv,
            halfWidth + crosshairSize, halfHeight + crosshairSize, uv, uv,
            halfWidth + crosshairSize, halfHeight - crosshairSize, uv, uv,

            halfWidth - crosshairSize, halfHeight - crosshairSize, uv, uv,
            halfWidth - crosshairSize, halfHeight + crosshairSize, uv, uv,
            halfWidth + crosshairSize, halfHeight + crosshairSize, uv, uv,
        ]);

        this.crosshairBuffer = this.device.createBuffer({
            size: crosshairVertices.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
            label: "HUD Crosshair Vertex Buffer"
        });

        this.device.queue.writeBuffer(this.crosshairBuffer, 0, crosshairVertices);
        this.crosshairVertexCount = 6;
        // -------------------------------------------------------------

    }

    private updateOrthoMatrix() {
        const orthoMatrix = mat4.create();

        mat4.ortho(
            orthoMatrix,
            0,
            this.canvasWidth,
            this.canvasHeight,
            0,
            -1, 1
        );

        this.device.queue.writeBuffer(this.orthoBuffer, 0, new Float32Array(orthoMatrix));
    }

    update(commandEncoder: GPUCommandEncoder,
        textComponents: Map<number, TextComponent>,

        currentCanvasView: GPUTextureView,
        depthStencilAttachment: GPURenderPassDepthStencilAttachment) {

        if (textComponents.size == 0)
            return;

        this.updateOrthoMatrix();

        // Saubere Zuweisung der aktuellen Canvas View
        const renderPassDescriptor: GPURenderPassDescriptor = {
            label: "HUD Render Pass",
            colorAttachments: [{
                view: currentCanvasView,
                loadOp: 'load',
                storeOp: 'store',
            }],
            depthStencilAttachment: {
                view: depthStencilAttachment.view,
                depthLoadOp: 'load',
                depthStoreOp: 'store',
                stencilLoadOp: 'load',
                stencilStoreOp: 'store',
            },
        };

        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);


        passEncoder.setPipeline(this.textPipeline);

        // Globale Bindings setzen (einmal pro Pass)
        passEncoder.setBindGroup(0, this.orthoBindGroup);
        passEncoder.setBindGroup(1, this.atlasBindGroup);

        for (const [id, data] of textComponents.entries()) {
            const material = data.material;

            if (!data.vertexBuffer) continue;

            passEncoder.setPipeline(material.pipeline);
            passEncoder.setBindGroup(2, material.constantsBindGroup);
            passEncoder.setVertexBuffer(0, data.vertexBuffer);

            passEncoder.draw(data.vertexCount);
        }

        passEncoder.end();
    }
}
