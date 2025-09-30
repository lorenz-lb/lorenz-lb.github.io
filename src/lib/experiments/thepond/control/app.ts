import { Renderer } from "../view/renderer"
import { Scene } from "../model/scene"

export class App {
    canvas: HTMLCanvasElement;
    renderer: Renderer;
    scene: Scene;

    keyLable: HTMLElement;
    mouseX: HTMLElement;
    mouseY: HTMLElement;

    forwards_amount!: number;
    right_amount!: number;


    constructor(canvas: HTMLCanvasElement, lables: HTMLElement[]) {
        this.canvas = canvas;
        this.renderer = new Renderer(canvas);
        this.scene = new Scene();

        [this.keyLable, this.mouseX, this.mouseY] = lables;

        canvas.addEventListener("keydown", (event) => { this.handle_keydown(event) })
        canvas.addEventListener("keyup", (event) => { this.handle_keyup(event) })
        canvas.addEventListener("mousemove", (event) => { this.handle_mouseMove(event) })

        this.canvas.onclick = () => {
            this.canvas.requestPointerLock();
        };

        this.forwards_amount = 0;
        this.right_amount = 0;
    }

    async initialize() {
        await this.renderer.Initialize();
    }

    run = () => {
        var running: boolean = true;

        this.scene.update();
        this.scene.move_player(this.forwards_amount, this.right_amount);

        this.renderer.render(this.scene.getRenderables());

        if (running) {
            requestAnimationFrame(this.run);
        }
    }

    handle_keydown(event: KeyboardEvent) {
        this.keyLable.innerHTML = event.key;

        if (event.key == "w") {
            this.forwards_amount = 0.02;
        }
        if (event.key == "s") {
            this.forwards_amount = -0.02;
        }
        if (event.key == "a") {
            this.right_amount = -0.02;
        }
        if (event.key == "d") {
            this.right_amount = 0.02;
        }
    }

    handle_keyup(event: KeyboardEvent) {
        this.keyLable.innerHTML = event.key;

        if (event.key == "w") {
            this.forwards_amount = 0;
        }
        if (event.key == "s") {
            this.forwards_amount = 0;
        }
        if (event.key == "a") {
            this.right_amount = 0;
        }
        if (event.key == "d") {
            this.right_amount = 0;
        }
    }

    handle_mouseMove(event: MouseEvent) {
        this.mouseX.innerHTML = event.clientX.toString();
        this.mouseY.innerHTML = event.clientY.toString();

        this.scene.spin_player(event.movementX * 0.1, -event.movementY * 0.1);
    }
}
