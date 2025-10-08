
struct Uniforms {
    viewProjectionMatrix: mat4x4<f32>,
};
        @binding(0) @group(0) var<uniform> uniforms : Uniforms;
        @group(1) @binding(0) var textureData: texture_2d<f32>; 
        @group(1) @binding(1) var textureSampler: sampler;
        
struct VertexInput {
    @location(0) position: vec4f,
    @location(1) normal: vec4f,
    @location(2) uv: vec2f,
    @location(4) modelMatrix_0: vec4f,
    @location(5) modelMatrix_1: vec4f,
    @location(6) modelMatrix_2: vec4f,
    @location(7) modelMatrix_3: vec4f,
};

struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) uv: vec2f,
    @location(1) lighting_intensity: f32,
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

    let lightDirection: vec3f = normalize(vec3f(0.5, -0.5, -1.0));
    output.position = uniforms.viewProjectionMatrix * modelMatrix * input.position;
    output.uv = input.uv;
    let worldNormal = normalize((modelMatrix * input.normal).xyz);
    let L: vec3f = -lightDirection;
    let diffuseIntensity = max(dot(worldNormal, L), 0.0);

    output.lighting_intensity = diffuseIntensity;

    return output;
}

     @fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4f {
    var texcolor = textureSample(textureData, textureSampler, input.uv);

    var result = vec4<f32>(1.0, 1.0, 1.0, 1.0);
    //result = vec4<f32>(input.normal, 1.0);

    // flat shading
    let ambientColor: vec3f = vec3f(0.1, 0.1, 0.1); // Dunkleres Basislicht
    let diffuseColor: vec3f = vec3f(0.9, 0.9, 0.9); // Farbe des Lichts

    let lighting = ambientColor + diffuseColor * input.lighting_intensity;


    return vec4f(texcolor.rgb * lighting, texcolor.a);
}
