import type { RenderBatch } from "../types/renderBatch";
import type { System } from "./system";


export class RenderSystem implements System {

    private device: GPUDevice;
    private globalBindGroup: GPUBindGroup;

    constructor(device: GPUDevice, globalBindGroup: GPUBindGroup) {
        this.device = device;
        this.globalBindGroup = globalBindGroup;
    }

    update(instanceBuffer: GPUBuffer, batches: Map<string, RenderBatch>, depthStencilAttachment: GPURenderPassDepthStencilAttachment,
        textureView: GPUTextureView

    ): void {

        const commandEncoder = this.device.createCommandEncoder();

        // renderpass
        const renderPassDescriptor: GPURenderPassDescriptor = {
            colorAttachments: [{
                view: textureView,
                loadOp: 'clear',
                storeOp: 'store',
                clearValue: { r: 0.1, g: 0.2, b: 0.3, a: 1.0 },
            }],

            depthStencilAttachment: depthStencilAttachment,
        };

        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        // not all materials use textures


        // all batches
        for (const batch of batches.values()) {
            passEncoder.setPipeline(batch.pipeline);
            passEncoder.setBindGroup(0, this.globalBindGroup);
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
        this.device.queue.submit([commandEncoder.finish()]);
    }

}
