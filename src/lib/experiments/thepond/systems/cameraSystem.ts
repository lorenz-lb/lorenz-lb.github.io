import { vec3, mat4 } from "gl-matrix"
import type { System } from "./system";
import type { InputManager } from "../control/inputManager";
import type { CameraComponent } from "../components/cameraComponent";
import type { TransformComponent } from "../components/transformComponent";


export class CameraSystem implements System {
    private inputManager: InputManager;
    private rotationSpeed = 0.005;

    constructor(inputManager: InputManager) {
        this.inputManager = inputManager;
    }

    update(
        cameraComponents: Map<number, CameraComponent>,
        transforms: Map<number, TransformComponent>,
    ) {
    }
}
