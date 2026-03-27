import type { RenderBatch } from "../types/renderBatch";
import type { System } from "./system";


export class OpaqueRenderSystem implements System {

    private globalBindGroup: GPUBindGroup;

    constructor(globalBindGroup: GPUBindGroup) {
        this.globalBindGroup = globalBindGroup;
    }

    update(commandEncoder: GPUCommandEncoder,
        instanceBuffer: GPUBuffer,
        opaqueBatches: RenderBatch[],
        currentTextureView: GPUTextureView,
        dsAttachment: GPURenderPassDepthStencilAttachment): void {

        // renderpass
        const renderPassDescriptor: GPURenderPassDescriptor = {
            colorAttachments: [{
                view: currentTextureView,
                loadOp: 'clear',
                storeOp: 'store',
                clearValue: { r: 0.1, g: 0.2, b: 0.3, a: 1.0 },
            }],

            depthStencilAttachment: {
                view: dsAttachment.view,
                stencilLoadOp: 'clear',
                stencilStoreOp: 'store',
                depthLoadOp: 'clear',
                depthStoreOp: 'store',
                depthClearValue: 1.0,
            },
        };

        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

        passEncoder.setBindGroup(0, this.globalBindGroup);

        // all batches
        for (const batch of opaqueBatches) {
            passEncoder.setPipeline(batch.pipeline);
            passEncoder.setBindGroup(1, batch.constantsBindGroup);

            if (batch.textureBindGroup) {
                passEncoder.setBindGroup(2, batch.textureBindGroup);
            }

            passEncoder.setVertexBuffer(0, batch.meshBuffer);
            passEncoder.setVertexBuffer(1, instanceBuffer);

            // draw call
            passEncoder.draw(batch.vertexCount, batch.instanceCount, 0, batch.instanceOffset);
        }

        passEncoder.end();
    }
}
