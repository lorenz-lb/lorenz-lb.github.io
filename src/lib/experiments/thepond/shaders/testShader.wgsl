
struct Uniforms {
    viewProjectionMatrix: mat4x4<f32>,
};
        @binding(0) @group(0) var<uniform> uniforms : Uniforms;
        @group(1) @binding(0) var textureSampler: sampler;
        @group(1) @binding(1) var textureData: texture_2d<f32>; 
        
struct VertexInput {
    @location(0) position: vec4f,
    @location(1) uv: vec2f,
    @location(4) modelMatrix_0: vec4f,
    @location(5) modelMatrix_1: vec4f,
    @location(6) modelMatrix_2: vec4f,
    @location(7) modelMatrix_3: vec4f,
};

struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) uv: vec2f,
};

        @vertex
fn vs_main(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
    let modelMatrix = mat4x4<f32>(
        input.modelMatrix_0,
        input.modelMatrix_1,
        input.modelMatrix_2,
        input.modelMatrix_3
    );
    output.position = uniforms.viewProjectionMatrix * modelMatrix * input.position;
    output.uv = input.uv;
    return output;
}

     @fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4f {
    var texcolor = textureSample(textureData, textureSampler, input.uv);

    return texcolor;
}
