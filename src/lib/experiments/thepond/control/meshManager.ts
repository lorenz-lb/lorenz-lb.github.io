import { OBJParser } from "./objParser";

interface MeshData {
    id: string;
    vertexBuffer: GPUBuffer;
    // todo was ist das 
    indexBuffer?: GPUBuffer;
    drawGroups: Array<{ materialName: string, count: number, startIndex: number }>
    vertexCount: number

    localVertices: Float32Array;
    //localIndices?: Uint16Array | Uint32Array;
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
            id: id,
            vertexBuffer: mesh.buffer,
            vertexCount: mesh.count,
            drawGroups: mesh.groups,
            localVertices: mesh.vertices
        } as MeshData)
    }


    public createQuad(label: string = "quad") {

        const vertices = new Float32Array([
            -0.5, 0.0, -0.5, 0.0, 1.0, 0.0, 0.0, 1.0,
            -0.5, 0.0, 0.5, 0.0, 1.0, 0.0, 0.0, 0.0,
            0.5, 0.0, -0.5, 0.0, 1.0, 0.0, 1.0, 1.0,

            -0.5, 0.0, 0.5, 0.0, 1.0, 0.0, 0.0, 0.0,
            0.5, 0.0, 0.5, 0.0, 1.0, 0.0, 1.0, 0.0,
            0.5, 0.0, -0.5, 0.0, 1.0, 0.0, 1.0, 1.0,
        ]);

        const vertexCount = vertices.length / 8;

        const buffer = this.device.createBuffer({
            size: vertices.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
            mappedAtCreation: true,
            label: label
        });

        new Float32Array(buffer.getMappedRange()).set(vertices);
        buffer.unmap();

        const groups = [
            {
                materialName: "PLACEHOLDER",
                startIndex: 0,
                count: vertexCount
            }
        ];

        this.meshStore.set("quad", {
            id: "quad",
            vertexBuffer: buffer,
            vertexCount: vertexCount,
            drawGroups: groups,
            localVertices: vertices
        } as MeshData)
    }

    public getLocalVertices(id: string): Float32Array | undefined {
        return this.meshStore.get(id)?.localVertices;
    }
}


