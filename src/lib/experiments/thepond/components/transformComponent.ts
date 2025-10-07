import { vec3 } from "gl-matrix"

export class TransformComponent {
    position: vec3;
    eulers: vec3;

    constructor(position: vec3 = vec3.create(), eulers: vec3 = vec3.create()) {
        this.position = position;
        this.eulers = eulers;
    }
}
