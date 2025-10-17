
struct MaterialConstants {
    kdColor: vec4f,
    ksColor: vec4f,
    kaColor: vec4f,
    nsValue: f32,
    dValue: f32,
    illumModel: f32,
    scrollSpeed: f32,
    parallaxFactor: f32,
    PADDING1: f32,
    PADDING2: f32,
    PADDING3: f32
};

struct Uniforms {
    viewProjectionMatrix: mat4x4<f32>,
    cameraPosition: vec4f,
    time: f32,
    PADDING: f32,
    PADDING1: f32,
    PADDING2: f32,
};

@group(0) @binding(0) var<uniform> uniforms : Uniforms;
@group(1) @binding(0) var atlasSampler: sampler;
@group(1) @binding(1) var atlasTexture: texture_2d<f32>;
@group(2) @binding(0) var<uniform> material: MaterialConstants;

struct VertexInput {
    @location(0) position: vec2<f32>,
    @location(1) uv: vec2<f32>,
};

struct FragmentOutput {
    @builtin(position) clip_position: vec4<f32>,
    @location(0) @interpolate(perspective, center) frag_uv: vec2<f32>,
};


@vertex
fn vs_main(input: VertexInput) -> FragmentOutput {
    var output: FragmentOutput;
    output.clip_position = uniforms.viewProjectionMatrix * vec4<f32>(input.position.x, input.position.y, 0.0, 1.0);
    output.frag_uv = input.uv;
    return output;
}


@fragment
fn fs_main(input: FragmentOutput) -> @location(0) vec4<f32> {
    let texel = textureSample(atlasTexture, atlasSampler, input.frag_uv);

    if texel.a < 0.01 {
        discard;
    }

    return vec4<f32>(material.kdColor.rgb, material.kdColor.a * texel.a);
}
