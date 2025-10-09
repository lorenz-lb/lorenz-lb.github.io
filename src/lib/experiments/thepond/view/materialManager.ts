import { MTLParser, type MTLData } from "../control/objParser";
import { Material, type MaterialProperies } from "./material";

export type ShaderVariant = 'default' | 'debug';

export class MaterialManager {

    private materialStore: Map<string, Material>
    private pipelineCache: Map<ShaderVariant, GPURenderPipeline>;
    // private shaderStore: Map<ShaderVariant, string>;

    // GPU ressources
    private device: GPUDevice;
    private textureLayout: GPUBindGroupLayout;
    private constantLayout: GPUBindGroupLayout;
    private pipelineLayout: GPUPipelineLayout;
    private frameGroupLayout: GPUBindGroupLayout;

    constructor(device: GPUDevice, frameGroupLayout: GPUBindGroupLayout) {
        this.materialStore = new Map();
        this.pipelineCache = new Map();
        // this.shaderStore = new Map();

        // GPU ressources
        this.device = device;
        this.frameGroupLayout = frameGroupLayout;

        this.textureLayout = this.device.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
                    texture: {}
                },
                {
                    binding: 1,
                    visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
                    sampler: {}
                },
            ],
            label: "MaterialTextureLayout",
        });

        this.constantLayout = this.device.createBindGroupLayout({
            entries: [
                {
                    binding: 0,
                    visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
                    buffer: { type: "uniform" }
                },
            ],
            label: "MaterialConstantLayout",
        });

        this.pipelineLayout = device.createPipelineLayout({
            bindGroupLayouts: [
                this.frameGroupLayout,
                this.textureLayout,
                this.constantLayout,
            ],
            label: "MaterialGlobalPipelineLayout"
        });
    }

    // #############################################################
    // #################### Material Management ####################
    // #############################################################

    /**
     * loads a material file, creates GPU materials and stores them
     * CURRENTLY ONLY MTL FILES ARE SUPPORTED!
     * */
    public async loadMaterial(url: string, shaderVariant: ShaderVariant = 'default') {

        const mtlMap = new Map<string, MTLData>(Object.entries(await MTLParser.readMTLFile(url)));
        console.log(mtlMap);

        for (const [k, v] of mtlMap) {
            if (!this.materialStore.has(k)) {
                const pipeline = this.getPipeline(shaderVariant)!;
                // parse MTL to generic Material type
                const matProp = { name: v.name, kd: v.kd, map_kd: v.map_kd } as MaterialProperies;

                let material = new Material();
                await material.init(this.device, matProp, this.textureLayout, this.constantLayout, pipeline);

                this.materialStore.set(k, material);
            }
        }

        console.log(`Materials loaded: ${Array.from(this.materialStore.keys())}`)
    }

    public getMaterial(name: string): Material | null {
        let mat = null;

        if (this.materialStore.has(name)) {
            mat = this.materialStore.get(name)!;
        }

        return mat;
    }

    // #############################################################
    // #################### Pipeline Management ####################
    // #############################################################

    public getPipeline(variant: ShaderVariant) {
        if (this.pipelineCache.has(variant)) {
            return this.pipelineCache.get(variant);
        }
    }

    public async createPipeline(variant: ShaderVariant, shaderCode: string, doAlpha = false) {
        const vertexLayout = {
            arrayStride: 32,
            attributes: [
                {
                    shaderLocation: 0,
                    format: "float32x3",
                    offset: 0,
                },

                {
                    shaderLocation: 1,
                    format: "float32x3",
                    offset: 12,
                },
                {
                    shaderLocation: 2,
                    format: "float32x2",
                    offset: 24 /**2 4 byte numbers**/,
                }

            ],
        }

        const instanceLayout = {
            arrayStride: 16 * 4, // 64 Bytes für mat4
            stepMode: 'instance',
            attributes: [
                { shaderLocation: 4, offset: 0, format: 'float32x4' },
                { shaderLocation: 5, offset: 16, format: 'float32x4' },
                { shaderLocation: 6, offset: 32, format: 'float32x4' },
                { shaderLocation: 7, offset: 48, format: 'float32x4' },
            ],
        };


        const targets: GPUColorTargetState[] = [{ format: navigator.gpu.getPreferredCanvasFormat(), blend: undefined }];
        const depthStencil: GPUDepthStencilState = {
            format: 'depth24plus-stencil8',
            depthCompare: 'less',
            depthWriteEnabled: true
        };


        if (doAlpha) {
            targets[0].blend = {
                color: { srcFactor: 'src-alpha', dstFactor: 'one-minus-src-alpha', operation: 'add' },
                alpha: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha', operation: 'add' },
            };
            depthStencil.depthWriteEnabled = false;
            depthStencil.depthCompare = 'always';
        }

        const newPipeline = await this.device.createRenderPipelineAsync({
            layout: this.pipelineLayout,

            vertex: {
                module: this.device.createShaderModule({ code: shaderCode }),
                entryPoint: 'vs_main',
                buffers: [vertexLayout, instanceLayout],
            },

            fragment: {
                module: this.device.createShaderModule({ code: shaderCode }),
                entryPoint: 'fs_main',
                targets: targets,
            },

            primitive: {
                topology: 'triangle-list',
                cullMode: 'back',
            },

            depthStencil: depthStencil,
            label: `${variant} Pipeline`
        });

        this.pipelineCache.set(variant, newPipeline);
    }

    // #############################################################
    // ####################  Shader Management  ####################
    // #############################################################

    //     public registerShader(variant: ShaderVariant, code: string) {
    //         this.shaderStore.set(variant, code);
    //     }
    //
    //     public getShaderCode(variant: ShaderVariant): string | undefined {
    //         return this.shaderStore.get(variant);
    //     }
}
