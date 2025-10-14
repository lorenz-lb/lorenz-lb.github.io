export class GameState {
    isFreeCamActive: boolean;
    activeCameraEntityID: number;

    constructor() {
        this.isFreeCamActive = false;
        this.activeCameraEntityID = -1;
    }
}
