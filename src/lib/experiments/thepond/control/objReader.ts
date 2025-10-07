import { vec2, vec3 } from "gl-matrix"

export interface ObjData {
    v: vec3[]
    vt: vec2[]
    vn: vec3[]
    vertices: Float32Array
    vertexCount: number
}

export class ObjReader {
    //    buffer!: GPUBuffer
    //bufferLayout!: GPUVertexBufferLayout
    //objData: ObjData

    public static createEmptyObjData(): ObjData {
        let objData = {
            v: [],
            vt: [],
            vn: [],
            vertexCount: 0,
            vertices: new Float32Array(),
        }

        return objData;
    }

    // obj parse
    private static async readFile(url: string, objData: ObjData) {
        let result: number[] = [];

        const response: Response = await fetch(url);
        const blob: Blob = await response.blob();
        const fileContents: string = (await blob.text());
        const lines = fileContents.split("\n");

        lines.forEach(
            line => {

                // vertex
                if (line[0] == "v" && line[1] == " ") {
                    const [, x, y, z] = line.split(' ').map(Number);
                    const vec: vec3 = [x, y, z]
                    objData.v.push(vec);
                }
                // texture
                else if (line[0] == "v" && line[1] == "t") {
                    const [, u, v] = line.split(' ').map(Number);
                    const vec: vec2 = [u, v];
                    objData.vt.push(vec);
                }
                // normals
                else if (line[0] == "v" && line[1] == "n") {
                    const [, nx, ny, nz] = line.split(' ').map(Number);
                    const vec: vec3 = [nx, ny, nz]
                    objData.vn.push(vec);
                }
                // faces
                else if (line[0] == "f") {
                    // fix last line of file sometimes beeing special
                    line = line.replace("\n", "");

                    const vertexDescription = line.split(" ");
                    const triangle_count = vertexDescription.length - 3;

                    for (let i = 0; i < triangle_count; i++) {
                        ObjReader.readVec(vertexDescription[1], result, objData);
                        ObjReader.readVec(vertexDescription[2 + i], result, objData);
                        ObjReader.readVec(vertexDescription[3 + i], result, objData);
                    }
                }
            });

        objData.vertices = new Float32Array(result);
    }


    private static readVec(vertexDescription: string, result: number[], objData: ObjData) {
        const [vIndex, vtIndex,] = vertexDescription.split("/").map(Number);
        const v = objData.v[(vIndex) - 1]
        const vt = objData.vt[(vtIndex) - 1]

        result.push(v[0]);
        result.push(v[1]);
        result.push(v[2]);
        result.push(vt[0]);
        result.push(vt[1]);
    }

    static async createMesh(device: GPUDevice, url: string, label: string = "Obj-Mesh"): Promise<{ buffer: GPUBuffer, count: number }> {
        let objData = ObjReader.createEmptyObjData();
        await ObjReader.readFile(url, objData);

        objData.vertexCount = objData.vertices.length / 5;

        // bufferLayout = {
        //     arrayStride: 20,
        //     attributes: [
        //         {
        //             shaderLocation: 0,
        //             format: "float32x3",
        //             offset: 0,
        //         },
        //         {
        //             shaderLocation: 1,
        //             format: "float32x2",
        //             offset: 12 /**2 4 byte numbers**/,
        //         }
        //
        //     ]
        // };

        //// chatGPUT #######

        // Vereinfachtes Mesh (6 Vertices für 2 Dreiecke)

        const buffer = device.createBuffer({
            size: objData.vertices.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
            mappedAtCreation: true,
            label: label
        });

        new Float32Array(buffer.getMappedRange()).set(objData.vertices);
        buffer.unmap();

        console.log(`OBJ-File read: \t vertexCount: ${objData.vertexCount} \t vertices.length: ${objData.vertices.length}`)

        // 3 vertex 2 texture (todo: 3 normal)
        return { buffer, count: objData.vertexCount };
    }


}
