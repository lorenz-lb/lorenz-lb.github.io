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
    PADDING1: f32,
    PADDING2: f32,
    PADDING3: f32
};

struct Uniforms {
    viewProjectionMatrix: mat4x4<f32>,
    cameraPosition: vec4f,
    time: f32,
    PADDING1: f32,
    PADDING2: f32,
    PADDING3: f32
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
    @location(2) worldPos: vec3f,
    @location(3) @interpolate(flat) worldNormal: vec3f,
    @location(4) @interpolate(flat) yposFlat: f32,
    @location(5)  ypos: f32,
};

@vertex
fn vs_main(@builtin(vertex_index) vertex_idx: u32, input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
    let modelMatrix = mat4x4<f32>(
        input.modelMatrix_0,
        input.modelMatrix_1,
        input.modelMatrix_2,
        input.modelMatrix_3
    );

    // ####### waves #########
    var px = input.position.x;
    var pz = input.position.z;
    let worldPos = (modelMatrix * input.position).xyz;
    let baseNormal = input.normal.xyz;

    //
    px = worldPos.x;
    pz = worldPos.z;

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

    let animatedWorldPos = worldPos + vec3f(0, total_offset_y, 0);


    let worldNormal = normalize((modelMatrix * vec4f(1, 0, 1, 0)).xyz);

    output.position = uniforms.viewProjectionMatrix * vec4(animatedWorldPos, 1.0);
    output.worldPos = animatedWorldPos;
    output.worldNormal = worldNormal;
    output.uv = vec2f(input.uv.x, 1.0 - input.uv.y);
    output.ypos = total_offset_y;
    output.yposFlat = total_offset_y;

    return output;
} 

     @fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4f {

    let N: vec3f = normalize(input.worldNormal);
    let L: vec3f = normalize(-vec3f(0.5, input.yposFlat, 0.5));
    var diffuseIntensity = max(dot(N, L), 0.0) ;
    var ambient: f32 = 0.8;

    var totalIntensity = ambient + diffuseIntensity * 0.2;
    totalIntensity = ambient;

    if (input.yposFlat) < 0 {
        totalIntensity = ambient;
        totalIntensity = (totalIntensity) + (totalIntensity * input.yposFlat * 0.5);
    }

    if (input.yposFlat) > 0 {
        totalIntensity = ambient;
        totalIntensity = (totalIntensity) + (totalIntensity * input.yposFlat);
    }

    if (input.yposFlat) > 0.25 {
        totalIntensity = ambient * 1.2;
        totalIntensity = (totalIntensity) + (totalIntensity * input.ypos);
    }


    var finalColor = materialUniforms.kdColor * totalIntensity ;
    //finalColor = vec4(input.worldNormal.xyz, 1.0);

    return vec4f(finalColor.xyz, 1.0);
}
