import { OBJParser } from "./objParser";

interface MeshData {
    id: string;
    vertexBuffer: GPUBuffer;
    indexBuffer?: GPUBuffer;
    indexCount?: number;
    drawGroups: Array<{ materialName: string, count: number, startIndex: number }>;
    vertexCount: number;
    localVertices: Float32Array;
    indexed?: boolean;
}

/**
 * Manages mesh data to not save the same data multiple times and enableing GPU instancing
 */
export class MeshManager {
    private meshStore: Map<string, MeshData>;
    private device: GPUDevice;

    constructor(device: GPUDevice) {
        this.meshStore = new Map<string, MeshData>();
        this.device = device;
    }

    /**
     *  Returns a mesh identified by its id
    */
    public getMesh(id: string): MeshData | undefined {
        return this.meshStore.get(id);
    }

    /**
     * Creates a square quad and caches it
    */
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

        this.meshStore.set(label, {
            id: label,
            vertexBuffer: buffer,
            vertexCount: vertexCount,
            drawGroups: groups,
            localVertices: vertices
        } as MeshData)
    }

    /**
     * Creates and saves the GPU ressources for a custom mesh.
     *
     * If indicies not null the mesh will be rendered using indexed rendering.
     */
    public createCustom(label: string, vertices: Float32Array, indicies: Uint32Array | null = null) {
        const vertexCount = vertices.length / 8;
        const vertexBuffer = this.device.createBuffer({
            size: vertices.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
            mappedAtCreation: true,
            label: label
        });

        new Float32Array(vertexBuffer.getMappedRange()).set(vertices);
        vertexBuffer.unmap();

        const groups = [
            {
                materialName: "PLACEHOLDER",
                startIndex: 0,
                count: vertexCount
            }
        ];

        let meshData = {
            id: label,
            vertexBuffer: vertexBuffer,
            vertexCount: vertexCount,
            drawGroups: groups,
            localVertices: vertices
        } as MeshData;

        if (indicies) {
            const indexBuffer = this.device.createBuffer({
                size: indicies.byteLength,
                usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDEX | GPUBufferUsage.COPY_SRC,
                mappedAtCreation: true,
                label: `${label} index`
            });

            new Uint32Array(indexBuffer.getMappedRange()).set(indicies);
            indexBuffer.unmap();

            meshData.indexed = true;
            meshData.indexCount = indicies.length;
            meshData.indexBuffer = indexBuffer;
        }

        this.meshStore.set(label, meshData);
    }

    public getLocalVertices(id: string): Float32Array | undefined {
        return this.meshStore.get(id)?.localVertices;
    }
}


