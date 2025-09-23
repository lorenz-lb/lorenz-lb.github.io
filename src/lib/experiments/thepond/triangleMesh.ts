export class TriangleMesh {

    buffer: GPUBuffer
    bufferLayout: GPUVertexBufferLayout

    constructor(device: GPUDevice) {
        const verticies: Float32Array = new Float32Array(
            [
                0.0, 0.0, 0.6, 1.0, 1.0, 1.0,
                0.0, -0.5, -0.5, 0.0, 1.0, 0.0,
                0.0, 0.5, -0.5, 0.0, 0.0, 1.0,
            ]);

        const usage: GPUBufferUsageFlags = GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST;
        const descriptor: GPUBufferDescriptor = {
            size: verticies.byteLength,
            usage: usage,
            mappedAtCreation: true
        };

        this.buffer = device.createBuffer(descriptor);

        new Float32Array(this.buffer.getMappedRange()).set(verticies);
        this.buffer.unmap();

        this.bufferLayout = {
            arrayStride: 24, /* 6 32 bit numbers x,y,r,g,b*/
            attributes: [
                {
                    shaderLocation: 0,
                    format: "float32x3",
                    offset: 0,
                },
                {
                    shaderLocation: 1,
                    format: "float32x3",
                    offset: 12 /**2 4 byte numbers**/,
                }

            ]
        };
    }

}
