import type { System } from "./system";
import { TransformComponent } from "../components/transformComponent";
import type { InputManager } from "../control/inputManager";
import type { FreeCamComponent } from "../components/freeCamComponent";
import type { CameraComponent } from "../components/cameraComponent";
import { vec3, mat4 } from "gl-matrix";


export class FreeCamSystem implements System {

    private inputManager: InputManager;

    constructor(inputManager: InputManager) {
        this.inputManager = inputManager;
    }

    update(
        freecam: Map<number, FreeCamComponent>,
        cameraComponents: Map<number, CameraComponent>,
        transforms: Map<number, TransformComponent>,
        deltaTime: number,
    ) {

        const worldUp = vec3.fromValues(0, 1, 0);

        for (let [k, v] of freecam.entries()) {
            let transform = transforms.get(k)!;
            const cameraComponent = cameraComponents.get(k)!;
            const cameraTransform = transforms.get(k);
            const movement = this.inputManager.consumeMouseDelta();

            let forwardsAmount = 0;
            let rightAmount = 0;
            let upAmount = 0;

            if (!cameraComponent || !cameraTransform || !transform)
                continue;

            // update camera
            cameraTransform.eulers[0] -= movement.y * v.mouseSpeed * deltaTime;
            cameraTransform.eulers[1] -= movement.x * v.mouseSpeed * deltaTime;

            const maxPitch = 89 * (Math.PI / 180);
            cameraTransform.eulers[0] = Math.max(-maxPitch, Math.min(maxPitch, cameraTransform.eulers[0]));

            const rotationMatrix = mat4.create();
            mat4.rotateY(rotationMatrix, rotationMatrix, cameraTransform.eulers[1]);
            mat4.rotateX(rotationMatrix, rotationMatrix, cameraTransform.eulers[0]);


            vec3.set(cameraComponent.right, rotationMatrix[0], rotationMatrix[1], rotationMatrix[2]);
            vec3.set(cameraComponent.forwards, rotationMatrix[8], rotationMatrix[9], rotationMatrix[10]);
            vec3.negate(cameraComponent.forwards, cameraComponent.forwards);

            // movement
            if (this.inputManager.w) {
                forwardsAmount += v.speed;
            }

            if (this.inputManager.s) {
                forwardsAmount -= v.speed;
            }

            if (this.inputManager.a) {
                rightAmount -= v.speed;
            }

            if (this.inputManager.d) {
                rightAmount += v.speed;
            }

            if (this.inputManager.q) {
                upAmount -= v.speed / 2;
            }

            if (this.inputManager.e) {
                upAmount += v.speed / 2;
            }


            vec3.scaleAndAdd(
                transform.position, transform.position,
                cameraComponent.forwards, forwardsAmount
            );

            vec3.scaleAndAdd(
                transform.position, transform.position,
                cameraComponent.right, rightAmount
            );

            vec3.scaleAndAdd(
                transform.position, transform.position,
                worldUp, upAmount
            );
        }
    }
}
