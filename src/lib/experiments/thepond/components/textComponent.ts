import { vec2, vec4 } from "gl-matrix";
import type { Material } from "../view/material";

export class TextComponent {
    text: string;
    position: vec2;
    fontAtlasID: string;
    material: Material;
    fontSize: number;
    changed: boolean;

    // GPU 
    vertexBuffer?: GPUBuffer;
    vertexCount: number = 0;
    bufferByteSize: number = 0;

    constructor(text: string, position: vec2, fontAtlasID: string, material: Material, fontSize: number = 20, changed: boolean = true) {
        this.text = text;
        this.position = position;
        this.fontAtlasID = fontAtlasID;
        this.material = material;
        this.fontSize = fontSize;
        this.changed = changed;
    }
}
