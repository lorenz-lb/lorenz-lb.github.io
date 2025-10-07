export class RenderComponent {
    pipeline: GPURenderPipeline;
    meshVAO: GPUBuffer;
    vertexCount: number;
    textureBindGroup: GPUBindGroup;

    constructor(pipeline: GPURenderPipeline, meshVAO: GPUBuffer, vertexCount: number, textureBindGroup: GPUBindGroup) {
        this.pipeline = pipeline;
        this.meshVAO = meshVAO;
        this.vertexCount = vertexCount;
        this.textureBindGroup = textureBindGroup;
    }
}
