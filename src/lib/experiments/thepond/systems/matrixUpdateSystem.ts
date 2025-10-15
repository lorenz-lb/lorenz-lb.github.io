import { type TransformComponent } from '../components/transformComponent';
import { type MeshRenderComponent } from '../components/meshRenderComponent';
import { mat4 } from 'gl-matrix';
import { Deg2Rad } from '../model/math_stuff';
import type { System } from './system';
import type { RenderBatch } from '../types/renderBatch';

export class MatrixUpdateSystem implements System {
    private device: GPUDevice;
    private instanceBuffer: GPUBuffer;
    private MAX_ENTITIES = 1000;
    private instanceMatrixArray: Float32Array;

    constructor(device: GPUDevice) {
        this.device = device;

        this.instanceBuffer = this.device.createBuffer({
            size: 16 * 4 * this.MAX_ENTITIES,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
            mappedAtCreation: false,
            label: 'Instance Matrix Buffer'
        });

        this.instanceMatrixArray = new Float32Array(16 * this.MAX_ENTITIES);
    }

    public update(
        transforms: Map<number, TransformComponent>,
        renderData: Map<number, MeshRenderComponent>
    ): { buffer: GPUBuffer, batches: Map<string, RenderBatch> } {

        // batching and sorting
        const entityList: { id: number, key: string, transform: TransformComponent, render: MeshRenderComponent }[] = [];
        for (const [entityId, render] of renderData.entries()) {
            const transform = transforms.get(entityId);
            if (!transform) continue; // Entität muss Transform und RenderData haben

            let textureBindgroupLable = render.material.hasTexture ? render.material.textureBindGroup.label : "NOTEXTURE";

            const batchKey = `${render.material.pipeline.label}_${render.meshVAO.label}_${textureBindgroupLable}`;

            entityList.push({ id: entityId, key: batchKey, transform, render });
        }
        entityList.sort((a, b) => a.key.localeCompare(b.key));


        // calculate actual matrix
        const currentBatches = new Map<string, RenderBatch>();
        let matrixOffsetIndex = 0; // Aktueller Index im instanceMatrixArray (Offset * 16)
        let lastBatchKey: string | null = null;

        for (const entity of entityList) {
            // ##### change batch
            if (entity.key !== lastBatchKey) {
                const renderBatch =
                    {
                        pipeline: entity.render.material.pipeline,
                        //textureBindGroup: entity.render.material.textureBindGroup,
                        constantsBindGroup: entity.render.material.constantsBindGroup,

                        meshBuffer: entity.render.meshVAO,
                        vertexCount: entity.render.vertexCount,

                        instanceCount: 0,
                        instanceOffset: matrixOffsetIndex
                    } as RenderBatch;


                if (entity.render.material.hasTexture) {
                    renderBatch.textureBindGroup = entity.render.material.textureBindGroup;
                }

                currentBatches.set(entity.key, renderBatch);
                lastBatchKey = entity.key;
            }

            // ##### Matrix calculation  
            const modelMatrix = mat4.create();
            mat4.translate(modelMatrix, modelMatrix, entity.transform.position);
            mat4.rotateX(modelMatrix, modelMatrix, Deg2Rad(entity.transform.eulers[0]));
            mat4.rotateY(modelMatrix, modelMatrix, Deg2Rad(entity.transform.eulers[1]));
            mat4.rotateZ(modelMatrix, modelMatrix, Deg2Rad(entity.transform.eulers[2]));

            // todo Scale
            mat4.scale(modelMatrix, modelMatrix, entity.transform.scale);

            this.instanceMatrixArray.set(modelMatrix, matrixOffsetIndex * 16);

            currentBatches.get(entity.key)!.instanceCount++;
            matrixOffsetIndex++;
        }

        if (matrixOffsetIndex > 0) {
            this.device.queue.writeBuffer(
                this.instanceBuffer,
                0,
                this.instanceMatrixArray,
                0,
                matrixOffsetIndex * 16
            );
        }

        return { buffer: this.instanceBuffer, batches: currentBatches };
    }
}
