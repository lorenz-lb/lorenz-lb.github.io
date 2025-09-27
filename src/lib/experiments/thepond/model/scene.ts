
import { Triangle } from './triangle'
import { Camera } from './camera'
import { vec3, mat4 } from "gl-matrix"

export class Scene {

    trianlges!: Triangle[];
    player!: Camera;
    objectData!: Float32Array;
    triangleCount: number;

    constructor() {
        this.objectData = new Float32Array(16 * 1024);
        this.triangleCount = 0;
        this.trianlges = [];


        let i = 0;

        for (let y = -5; y < 5; y++) {
            this.trianlges.push(new Triangle([2, y, 0], 0));
            let blank_matrix = mat4.create();
            for (let j = 0; j < 16; j++) {
                this.objectData[16 * i + j] = <number>blank_matrix[j];
            }
            i++;
            this.triangleCount++;
        }

        this.player = new Camera([-3, 0, 0.5], 0, 0);
    }

    update() {
        let i = 0;

        this.trianlges.forEach((triangle) => {
            triangle.update();
            let model = triangle.get_model();
            for (let j = 0; j < 16; j++) {
                this.objectData[16 * i + j] = <number>model[j];
            }
            i++;
        });

        this.player.update();
    }

    get_player(): Camera {
        return this.player;
    }
    get_triagles(): Float32Array {
        return this.objectData;
    }

    spin_player(dX: number, dY: number) {
        this.player.eulers[2] -= dX;
        this.player.eulers[2] %= 360;

        this.player.eulers[1] = Math.min(
            89, Math.max(-89, this.player.eulers[1] + dY)
        );
    }

    move_player(forwards_amount: number, right_amount: number) {
        vec3.scaleAndAdd(
            this.player.position, this.player.position,
            this.player.forwards, forwards_amount
        );

        vec3.scaleAndAdd(
            this.player.position, this.player.position,
            this.player.right, right_amount
        );
    }
}
