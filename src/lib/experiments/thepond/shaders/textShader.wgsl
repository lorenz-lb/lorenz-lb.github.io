@group(0) @binding(0) var<uniform> projectionMatrix: mat4x4<f32>;

// Group 1: Font Atlas (Nur Fragment Shader)
@group(1) @binding(0) var atlasSampler: sampler;    // Definiert die Sampling-Methode (z.B. linear)
@group(1) @binding(1) var atlasTexture: texture_2d<f32>; // Die Textur mit allen Zeichen

// Group 2: Textfarbe (Nur Fragment Shader)
@group(2) @binding(0) var<uniform> textColor: vec4<f32>; // Die gewünschte RGBA-Farbe des Textes


// === 📝 DATENSTRUKTUREN ===

// Struktur der Daten, die der Vertex-Shader von den Buffern erhält
struct VertexInput {
    @location(0) position: vec2<f32>, // X/Y Position der Quad-Ecke
    @location(1) uv: vec2<f32>,       // U/V Koordinaten im Atlas
};

// Struktur der Daten, die vom Vertex- an den Fragment-Shader interpoliert werden
struct FragmentOutput {
    // Die finale Position im Clip-Space (erforderlich)
    @builtin(position) clip_position: vec4<f32>,
    // UV-Koordinaten werden zum Fragment-Shader weitergeleitet
    @location(0) @interpolate(perspective, center) frag_uv: vec2<f32>,
};


// === VERTEX SHADER ===
// Verantwortlich für die Positionierung des Text-Quads
@vertex
fn vs_main(input: VertexInput) -> FragmentOutput {
    var output: FragmentOutput;
    
    // 1. Transformation: Wende die 2D Ortho-Matrix auf die 2D-Position an.
    // Die Z-Komponente ist 0, W ist 1 (für die homogene Koordinate).
    output.clip_position = projectionMatrix * vec4<f32>(input.position.x, input.position.y, 0.0, 1.0);
    
    // 2. UV-Weiterleitung: Die UVs unverändert an den Fragment Shader geben.
    output.frag_uv = input.uv;

    return output;
}


// === FRAGMENT SHADER ===
// Verantwortlich für die Farbgebung des Pixels
@fragment
fn fs_main(input: FragmentOutput) -> @location(0) vec4<f32> {
    
    // 1. Textur-Sampling: Hole das Texel (Pixel) an den interpolierten UVs.
    // Da der Font Atlas oft nur Graustufen im Alpha-Kanal enthält (z.B. Alpha-Maske),
    // interessiert uns hauptsächlich der Alpha-Wert (texel.a).
    let texel = textureSample(atlasTexture, atlasSampler, input.frag_uv);
    
    // 2. Alpha-Test: Verwerfe Pixel, die fast vollständig transparent sind (Lücken zwischen Buchstaben).
    if texel.a < 0.01 {
        discard;
    }
    
    // 3. Finale Farbe: Verwende die Uniform-Farbe und setze ihren Alpha-Wert
    // auf den Alpha-Wert, den wir aus der Textur bekommen haben (Maskierung).
    // Die RGB-Kanäle bleiben die übergebene Farbe.
    return vec4<f32>(textColor.rgb, textColor.a * texel.a);
}
