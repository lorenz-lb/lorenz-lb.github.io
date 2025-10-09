export interface RenderBatch {
    pipeline: GPURenderPipeline;
    meshBuffer: GPUBuffer;
    textureBindGroup: GPUBindGroup;
    constantsBindGroup: GPUBindGroup;
    /* Number of Entities in Batch */
    vertexCount: number;
    instanceCount: number;
    instanceOffset: number;
}
