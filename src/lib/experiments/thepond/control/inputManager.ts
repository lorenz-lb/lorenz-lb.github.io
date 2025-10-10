export class InputManager {
    private canvas: HTMLCanvasElement;

    // keyboard
    w: boolean = false;
    a: boolean = false;
    s: boolean = false;
    d: boolean = false;
    q: boolean = false;
    e: boolean = false;

    // mouse
    primary: boolean = false;
    secondary: boolean = false;
    movementX: number = 0;
    movementY: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.initialize();
    }

    initialize() {
        this.canvas.addEventListener('keydown', this.keyDown.bind(this));
        this.canvas.addEventListener('keyup', this.keyUp.bind(this));
        this.canvas.addEventListener('mousedown', this.mouseDown.bind(this));
        this.canvas.addEventListener('mouseup', this.mouseUp.bind(this));
        this.canvas.addEventListener('mousemove', this.mouseMove.bind(this));
    }

    private keyDown(event: KeyboardEvent) {
        if (event.key == 'w' || event.key == 'W') { this.w = true; }
        else if (event.key == 'a' || event.key == 'A') { this.a = true; }
        else if (event.key == 's' || event.key == 'S') { this.s = true; }
        else if (event.key == 'd' || event.key == 'D') { this.d = true; }
        else if (event.key == 'q' || event.key == 'Q') { this.q = true; }
        else if (event.key == 'e' || event.key == 'E') { this.e = true; }

        console.log(`down: \t ${event.key} \t ${this.w} `)
    }

    private keyUp(event: KeyboardEvent) {
        if (event.key == 'w' || event.key == 'W') { this.w = false; }
        else if (event.key == 'a' || event.key == 'A') { this.a = false; }
        else if (event.key == 's' || event.key == 'S') { this.s = false; }
        else if (event.key == 'd' || event.key == 'D') { this.d = false; }
        else if (event.key == 'q' || event.key == 'Q') { this.q = false; }
        else if (event.key == 'e' || event.key == 'E') { this.e = false; }
    }

    private mouseDown(event: MouseEvent) {
        this.primary = (event.buttons & 1) > 0;
        this.secondary = (event.buttons & 2) > 0;
    }

    private mouseUp(event: MouseEvent) {
        this.primary = (event.buttons & 1) > 0;
        this.secondary = (event.buttons & 2) > 0;
    }

    private mouseMove(event: MouseEvent) {
        this.movementX += event.movementX;
        this.movementY += event.movementY;
    }

    public consumeMouseDelta(): { x: number, y: number } {
        const delta = { x: this.movementX, y: this.movementY };

        this.movementX = 0;
        this.movementY = 0;

        return delta;
    }
}
