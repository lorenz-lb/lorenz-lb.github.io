import { OBJParser, MTLParser, type MTLData } from "../control/objParser";
import { Material, type MaterialProperies } from "./material";

export class MaterialManager {

    private materialStore: Map<string, Material>

    // GPU ressources
    private device: GPUDevice;
    private textureLayout: GPUBindGroupLayout;
    private constantLayout: GPUBindGroupLayout;

    constructor(device: GPUDevice, textureLayout: GPUBindGroupLayout, constantLayout: GPUBindGroupLayout) {
        this.materialStore = new Map();

        // GPU ressources
        this.device = device;
        this.textureLayout = textureLayout;
        this.constantLayout = constantLayout;
    }

    /**
     * loads a material file, creates GPU materials and stores them
     * CURRENTLY ONLY MTL FILES ARE SUPPORTED!
     * */
    public async loadMaterial(url: string) {

        const mtlMap = new Map<string, MTLData>(Object.entries(await MTLParser.readMTLFile(url)));
        console.log(mtlMap);

        for (const [k, v] of mtlMap) {
            if (!this.materialStore.has(k)) {
                // parse MTL to generic Material type
                const matProp = { name: v.name, kd: v.kd, map_kd: v.map_Kd } as MaterialProperies;

                console.log(matProp);

                let material = new Material();
                await material.init(this.device, matProp, this.textureLayout, this.constantLayout);
                console.log(material);
                this.materialStore.set(k, material);
            }
        }


        console.log(`Materials loaded: ${Array.from(this.materialStore.keys())}`)
    }

    public getMaterial(name: string): Material | null {
        let mat = null;

        if (this.materialStore.has(name)) {
            mat = this.materialStore.get(name)!;

            console.log(`Returned Material: ${name}`)
        }

        return mat;
    }
}
