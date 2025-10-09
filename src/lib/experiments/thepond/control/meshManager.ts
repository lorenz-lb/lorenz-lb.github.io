import { OBJParser } from "./objParser";

interface MeshData {
    vertexBuffer: GPUBuffer;
    // todo was ist das 
    indexBuffer?: GPUBuffer;
    drawGroups: Array<{ materialName: string, count: number, startIndex: number }>
    vertexCount: number
}

export class MeshManager {
    private meshStore: Map<string, MeshData>;
    private device: GPUDevice;

    constructor(device: GPUDevice) {
        this.meshStore = new Map<string, MeshData>();
        this.device = device;
    }

    public getMesh(id: string): MeshData | undefined {
        return this.meshStore.get(id);
    }

    public async loadMesh(id: string, url: string) {
        const mesh = await OBJParser.createMesh(this.device, url, id);

        this.meshStore.set(id, {
            vertexBuffer: mesh.buffer,
            vertexCount: mesh.count,
            drawGroups: mesh.groups
        } as MeshData)
    }


}


