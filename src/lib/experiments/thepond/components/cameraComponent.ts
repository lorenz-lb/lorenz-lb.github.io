import { vec3 } from "gl-matrix"

export interface CameraOptions {
    fov?: number,
    near?: number,
    far?: number,
    aspect?: number,
}

export class CameraComponent {
    right: vec3;
    up: vec3;
    forwards: vec3;
    fov: number;
    near: number;
    far: number;
    aspect: number;

    constructor(right: vec3 = vec3.create(),
        up: vec3 = vec3.create(),
        forwards: vec3 = vec3.create(),
        options: CameraOptions = {}
    ) {
        this.right = right;
        this.up = up;
        this.forwards = forwards;
        this.fov = options.fov ?? Math.PI / 4;
        this.near = options.near ?? 0.1;
        this.far = options.far ?? 100;
        this.aspect = options.aspect ?? 16 / 9;
    }
}
