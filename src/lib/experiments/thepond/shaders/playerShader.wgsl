
// WGSL Shader Code
struct MaterialConstants {
    kdColor: vec4f,
    ksColor: vec4f,
    kaColor: vec4f,
    nsValue: f32,
    dValue: f32,
    illumModel: f32,
    scrollSpeed: f32,
    parallaxFactor: f32,
    numSpritesX: f32,
    numSpritesY: f32,
    PADDING1: f32,
    uvOffset: vec2f,
    PADDING2: f32,
    PADDING3: f32,
};

struct Uniforms {
    viewProjectionMatrix: mat4x4<f32>,
    cameraPosition: vec4f,
    time: f32,
    boatX: f32,
    boatY: f32,
    boatZ: f32,
};

@group(0) @binding(0) var<uniform> uniforms : Uniforms;
@group(1) @binding(0) var<uniform> materialUniforms : MaterialConstants; 
@group(2) @binding(0) var textureData: texture_2d<f32>; 
@group(2) @binding(1) var textureSampler: sampler;



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

    // ####### waves #########
    var px = uniforms.boatX;
    var pz = uniforms.boatZ;
    let worldPos = (modelMatrix * input.position).xyz;
    let baseNormal = input.normal.xyz;

    let boatWorld = (modelMatrix * vec4(uniforms.boatX, uniforms.boatY, uniforms.boatZ, 1.0)).xyz;

    // px = boatWorld.x;
    // pz = boatWorld.z;

    // ####### wave 1 #########
    let amplitude1 = 0.3f;
    let f1 = 0.5f;
    let speed1 = -1.0f ;

    let time_term1 = f1 * (px - speed1 * uniforms.time);
    var offset_y1 = amplitude1 * sin(time_term1);

    // ####### wave 2 #########
    let amplitude2 = 0.1f;
    let f2 = 1f;
    let speed2 = 0.3f ;

    let time_term2 = (f2 * (pz - speed2 * uniforms.time));
    let offset_y2 = amplitude2 * (sin(time_term2));

    // ####### wave 3 #########
    let amplitude3 = 0.1f;
    let f3 = 2f;
    let speed3 = -0.5f ;

    let time_term3 = f3 * (pz + px - speed3 * uniforms.time);
    let offset_y3 = amplitude3 * (sin(time_term3));

    // ### combine waves ###
    var total_offset_y = offset_y1 + offset_y2 + offset_y3;
    //total_offset_y = offset_y3;


    let slopeX = (amplitude1 * f1 * cos(time_term1));

    // ######### pitch ###########


    var rotation = atan(slopeX * -0.5);

    let rotationY = mat4x4<f32>(
        vec4f(cos(rotation), 0.0, sin(rotation), 0.0),
        vec4f(0.0, 1.0, 0.0, 0.0),
        vec4f(-sin(rotation), 0.0, cos(rotation), 0.0),
        vec4f(0.0, 0.0, 0.0, 1.0)
    );


    var rotatedLocalPos = (rotationY * input.position).xyz;
    let finalWorldPos = (modelMatrix * vec4f(rotatedLocalPos, 1.0)).xyz;
    let animatedWorldPos = finalWorldPos + vec3f(0.0, total_offset_y, 0.0);


    // ### combine waves ###
    output.position = uniforms.viewProjectionMatrix * vec4(animatedWorldPos, 1.0);
    output.uv = vec2f(input.uv.x / materialUniforms.numSpritesX, ((1 - input.uv.y) / materialUniforms.numSpritesY));

    return output;
} 




     @fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4f {
    var texcolor = textureSample(textureData, textureSampler, materialUniforms.uvOffset + input.uv);
    return texcolor;
}
