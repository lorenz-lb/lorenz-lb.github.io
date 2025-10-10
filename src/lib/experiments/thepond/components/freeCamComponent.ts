import { vec3 } from "gl-matrix";

export class FreeCamComponent {
    position: vec3;
    speed: number;
    mouseSpeed: number;

    constructor(position: vec3 = vec3.create(), speed: number = 1.0, mouseSpeed: number = 0.2) {
        this.position = position;
        this.speed = speed;
        this.mouseSpeed = mouseSpeed;
    }
}
