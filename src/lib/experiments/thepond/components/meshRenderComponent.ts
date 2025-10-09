import type { Material } from "../view/material";

export class MeshRenderComponent {
    material: Material;

    // mesh data
    meshVAO: GPUBuffer;
    vertexCount: number;

    constructor(material: Material, meshVAO: GPUBuffer, vertexCount: number) {
        this.material = material;
        this.meshVAO = meshVAO;
        this.vertexCount = vertexCount;
    }
}
