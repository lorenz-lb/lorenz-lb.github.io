export interface RenderBatch {
    pipeline: GPURenderPipeline;
    meshBuffer: GPUBuffer;
    textureBindGroup: GPUBindGroup;
    /* Number of Entities in Batch */
    vertexCount: number;
    instanceCount: number;
    instanceOffset: number;
}
