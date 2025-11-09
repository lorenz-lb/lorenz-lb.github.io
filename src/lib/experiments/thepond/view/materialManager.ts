import { MTLParser, type MTLData } from "../control/objParser";
import { Material, type MaterialProperies } from "./material";
import { vec3 } from "gl-matrix"

export enum ShaderTypes {
    TexturedShader = "textured",
    SolidShader = "solid",
}

export interface PipelineSettings {
    shaderID: string,
    shaderCode: string,

    doAlpha?: boolean,
    useTexture?: boolean,
    topology?: GPUPrimitiveTopology
}

/**
 * Class for managing the creation, caching and retrieving of materials and coresponding GPU pipelines, needed for rendering a material
 */
export class MaterialManager {
    private materialStore: Map<string, Material>
    private pipelineCache: Map<string, GPURenderPipeline>;

    // GPU ressources
    private device: GPUDevice;
    private textureLayout: GPUBindGroupLayout;
    private constantLayout: GPUBindGroupLayout;
    private texturedPipelineLayout: GPUPipelineLayout;
    private untexturedPipelineLayout: GPUPipelineLayout;
    private frameGroupLayout: GPUBindGroupLayout;

    private vertexLayout;
    private instanceLayout;

    constructor(device: GPUDevice, frameGroupLayout: GPUBindGroupLayout) {
        this.materialStore = new Map();
        this.pipelineCache = new Map();

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

        this.texturedPipelineLayout = device.createPipelineLayout({
            bindGroupLayouts: [
                this.frameGroupLayout,
                this.constantLayout,
                this.textureLayout,
            ],
            label: "TexturedMaterialGlobalPipelineLayout"
        });

        this.untexturedPipelineLayout = device.createPipelineLayout({
            bindGroupLayouts: [
                this.frameGroupLayout,
                this.constantLayout,
            ],
            label: "simpleMaterialGlobalPipelineLayout"
        });

        this.vertexLayout = {
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
                    offset: 24,
                }

            ],
        }

        this.instanceLayout = {
            arrayStride: 16 * 4,
            stepMode: 'instance',
            attributes: [
                { shaderLocation: 4, offset: 0, format: 'float32x4' },
                { shaderLocation: 5, offset: 16, format: 'float32x4' },
                { shaderLocation: 6, offset: 32, format: 'float32x4' },
                { shaderLocation: 7, offset: 48, format: 'float32x4' },
            ],
        };

    }

    // #############################################################
    // #################### Material Management ####################
    // #############################################################
    /*
     * Crate a new Material with a shader and color
     * */
    public async createMaterial(id: string, properties: MaterialProperies | null = null, shaderID: string = ShaderTypes.SolidShader) {

        if (!this.materialStore.has(id)) {
            if (!properties) {
                properties = { name: id, kd: vec3.fromValues(1.0, 1.0, 1.0) } as MaterialProperies;
            }

            const pipeline = this.getPipeline(shaderID)!;

            let material = new Material();

            if (properties.map_kd) {
                await material.init(this.device, properties, pipeline, this.constantLayout, this.textureLayout);
            }
            else {
                await material.init(this.device, properties, pipeline, this.constantLayout);
            }
            this.materialStore.set(id, material);
        }

        console.log(`Material Created: ${id}`)
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

    public getPipeline(shaderID: string) {
        if (this.pipelineCache.has(shaderID)) {
            return this.pipelineCache.get(shaderID);
        }
    }

    /*
     * Crate a new pipeline configured for a (group of) material(s)  
     * */
    public async createPipeline(pipelineSettings: PipelineSettings) {
        const doAlpha = pipelineSettings.doAlpha ?? false;
        const useTexture = pipelineSettings.useTexture ?? false;
        const topology = pipelineSettings.topology ?? "triangle-list";

        let selectedLayout: GPUPipelineLayout;
        let alphaLable = "";

        if (useTexture) {
            selectedLayout = this.texturedPipelineLayout;
        } else {
            selectedLayout = this.untexturedPipelineLayout;
        }

        const targets: GPUColorTargetState[] = [{ format: navigator.gpu.getPreferredCanvasFormat(), blend: undefined }];
        const depthStencil: GPUDepthStencilState = {
            format: 'depth24plus-stencil8',
            depthCompare: 'less-equal',
            depthWriteEnabled: true
        };

        if (doAlpha) {
            targets[0].blend = {
                color: { srcFactor: 'src-alpha', dstFactor: 'one-minus-src-alpha', operation: 'add' },
                alpha: { srcFactor: 'one', dstFactor: 'one-minus-src-alpha', operation: 'add' },
            };
            depthStencil.depthWriteEnabled = false;
            depthStencil.depthCompare = 'less-equal';
            alphaLable = "ALPHA";
        }

        const newPipeline = await this.device.createRenderPipelineAsync({
            layout: selectedLayout,

            vertex: {
                module: this.device.createShaderModule({ code: pipelineSettings.shaderCode, label: `ShaderVariant:${pipelineSettings.shaderID}` }),
                entryPoint: 'vs_main',
                buffers: [this.vertexLayout, this.instanceLayout],
            },

            fragment: {
                module: this.device.createShaderModule({ code: pipelineSettings.shaderCode }),
                entryPoint: 'fs_main',
                targets: targets,
            },

            primitive: {
                topology: topology,
                // TODO: use culling if needed
                cullMode: 'none',
            },

            depthStencil: depthStencil,
            label: `${pipelineSettings.shaderID} Pipeline${" " + alphaLable}`
        });

        this.pipelineCache.set(pipelineSettings.shaderID, newPipeline);
    }
}
