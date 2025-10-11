import atals_image from "./fontAtlas.png?url"


export interface AtlasMetaData {
	char: string;
	// [Ustart, Vstart, Uend, Vend]
	uv: [number, number, number, number];
	width: number;
	height: number;
	advance: number;
}

export async function createFontAtlasBindings(
	device: GPUDevice
): Promise<{ atlasBindGroupLayout: GPUBindGroupLayout, atlasBindGroup: GPUBindGroup }> {

	const response = await fetch(atals_image);
	const imageBlob = await response.blob();
	const fontAtlasImageBitmap: ImageBitmap = await createImageBitmap(imageBlob);


	const fontAtlasTexture = device.createTexture({
		size: [fontAtlasImageBitmap.width, fontAtlasImageBitmap.height, 1],
		format: 'rgba8unorm', // Passen Sie das Format Ihres Atlas an
		usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
	});

	device.queue.copyExternalImageToTexture(
		{ source: fontAtlasImageBitmap },
		{ texture: fontAtlasTexture },
		[fontAtlasImageBitmap.width, fontAtlasImageBitmap.height]
	);

	const fontAtlasTextureView = fontAtlasTexture.createView();

	const fontAtlasSampler = device.createSampler({
		magFilter: 'linear',
		minFilter: 'linear',
	});

	const atlasBindGroupLayout = device.createBindGroupLayout({
		label: 'Font Atlas Bind Group Layout (Group 1)',
		entries: [
			{ binding: 0, visibility: GPUShaderStage.FRAGMENT, sampler: { type: 'filtering' } },
			{ binding: 1, visibility: GPUShaderStage.FRAGMENT, texture: { sampleType: 'float', viewDimension: '2d' } },
		],
	});

	const atlasBindGroup = device.createBindGroup({
		label: 'Font Atlas Bind Group',
		layout: atlasBindGroupLayout,
		entries: [
			{ binding: 0, resource: fontAtlasSampler },
			{ binding: 1, resource: fontAtlasTextureView },
		],
	});

	return { atlasBindGroupLayout, atlasBindGroup };
}





export const FONTATLAS_METADATA: AtlasMetaData[] = [{ "char": "a", "uv": [0, 0, 0.125, 0.125], "width": 32, "height": 32, "advance": 32 }, { "char": "b", "uv": [0.125, 0, 0.25, 0.125], "width": 32, "height": 32, "advance": 32 }, { "char": "c", "uv": [0.25, 0, 0.375, 0.125], "width": 32, "height": 32, "advance": 32 }, { "char": "d", "uv": [0.375, 0, 0.5, 0.125], "width": 32, "height": 32, "advance": 32 }, { "char": "e", "uv": [0.5, 0, 0.625, 0.125], "width": 32, "height": 32, "advance": 32 }, { "char": "f", "uv": [0.625, 0, 0.75, 0.125], "width": 32, "height": 32, "advance": 32 }, { "char": "g", "uv": [0.75, 0, 0.875, 0.125], "width": 32, "height": 32, "advance": 32 }, { "char": "h", "uv": [0.875, 0, 1, 0.125], "width": 32, "height": 32, "advance": 32 }, { "char": "i", "uv": [0, 0.125, 0.125, 0.25], "width": 32, "height": 32, "advance": 32 }, { "char": "j", "uv": [0.125, 0.125, 0.25, 0.25], "width": 32, "height": 32, "advance": 32 }, { "char": "k", "uv": [0.25, 0.125, 0.375, 0.25], "width": 32, "height": 32, "advance": 32 }, { "char": "l", "uv": [0.375, 0.125, 0.5, 0.25], "width": 32, "height": 32, "advance": 32 }, { "char": "m", "uv": [0.5, 0.125, 0.625, 0.25], "width": 32, "height": 32, "advance": 32 }, { "char": "n", "uv": [0.625, 0.125, 0.75, 0.25], "width": 32, "height": 32, "advance": 32 }, { "char": "o", "uv": [0.75, 0.125, 0.875, 0.25], "width": 32, "height": 32, "advance": 32 }, { "char": "p", "uv": [0.875, 0.125, 1, 0.25], "width": 32, "height": 32, "advance": 32 }, { "char": "q", "uv": [0, 0.25, 0.125, 0.375], "width": 32, "height": 32, "advance": 32 }, { "char": "r", "uv": [0.125, 0.25, 0.25, 0.375], "width": 32, "height": 32, "advance": 32 }, { "char": "s", "uv": [0.25, 0.25, 0.375, 0.375], "width": 32, "height": 32, "advance": 32 }, { "char": "t", "uv": [0.375, 0.25, 0.5, 0.375], "width": 32, "height": 32, "advance": 32 }, { "char": "u", "uv": [0.5, 0.25, 0.625, 0.375], "width": 32, "height": 32, "advance": 32 }, { "char": "v", "uv": [0.625, 0.25, 0.75, 0.375], "width": 32, "height": 32, "advance": 32 }, { "char": "w", "uv": [0.75, 0.25, 0.875, 0.375], "width": 32, "height": 32, "advance": 32 }, { "char": "x", "uv": [0.875, 0.25, 1, 0.375], "width": 32, "height": 32, "advance": 32 }, { "char": "y", "uv": [0, 0.375, 0.125, 0.5], "width": 32, "height": 32, "advance": 32 }, { "char": "z", "uv": [0.125, 0.375, 0.25, 0.5], "width": 32, "height": 32, "advance": 32 }, { "char": "A", "uv": [0.25, 0.375, 0.375, 0.5], "width": 32, "height": 32, "advance": 32 }, { "char": "B", "uv": [0.375, 0.375, 0.5, 0.5], "width": 32, "height": 32, "advance": 32 }, { "char": "C", "uv": [0.5, 0.375, 0.625, 0.5], "width": 32, "height": 32, "advance": 32 }, { "char": "D", "uv": [0.625, 0.375, 0.75, 0.5], "width": 32, "height": 32, "advance": 32 }, { "char": "E", "uv": [0.75, 0.375, 0.875, 0.5], "width": 32, "height": 32, "advance": 32 }, { "char": "F", "uv": [0.875, 0.375, 1, 0.5], "width": 32, "height": 32, "advance": 32 }, { "char": "G", "uv": [0, 0.5, 0.125, 0.625], "width": 32, "height": 32, "advance": 32 }, { "char": "H", "uv": [0.125, 0.5, 0.25, 0.625], "width": 32, "height": 32, "advance": 32 }, { "char": "I", "uv": [0.25, 0.5, 0.375, 0.625], "width": 32, "height": 32, "advance": 32 }, { "char": "J", "uv": [0.375, 0.5, 0.5, 0.625], "width": 32, "height": 32, "advance": 32 }, { "char": "K", "uv": [0.5, 0.5, 0.625, 0.625], "width": 32, "height": 32, "advance": 32 }, { "char": "L", "uv": [0.625, 0.5, 0.75, 0.625], "width": 32, "height": 32, "advance": 32 }, { "char": "M", "uv": [0.75, 0.5, 0.875, 0.625], "width": 32, "height": 32, "advance": 32 }, { "char": "N", "uv": [0.875, 0.5, 1, 0.625], "width": 32, "height": 32, "advance": 32 }, { "char": "O", "uv": [0, 0.625, 0.125, 0.75], "width": 32, "height": 32, "advance": 32 }, { "char": "P", "uv": [0.125, 0.625, 0.25, 0.75], "width": 32, "height": 32, "advance": 32 }, { "char": "Q", "uv": [0.25, 0.625, 0.375, 0.75], "width": 32, "height": 32, "advance": 32 }, { "char": "R", "uv": [0.375, 0.625, 0.5, 0.75], "width": 32, "height": 32, "advance": 32 }, { "char": "S", "uv": [0.5, 0.625, 0.625, 0.75], "width": 32, "height": 32, "advance": 32 }, { "char": "T", "uv": [0.625, 0.625, 0.75, 0.75], "width": 32, "height": 32, "advance": 32 }, { "char": "U", "uv": [0.75, 0.625, 0.875, 0.75], "width": 32, "height": 32, "advance": 32 }, { "char": "V", "uv": [0.875, 0.625, 1, 0.75], "width": 32, "height": 32, "advance": 32 }, { "char": "W", "uv": [0, 0.75, 0.125, 0.875], "width": 32, "height": 32, "advance": 32 }, { "char": "X", "uv": [0.125, 0.75, 0.25, 0.875], "width": 32, "height": 32, "advance": 32 }, { "char": "Y", "uv": [0.25, 0.75, 0.375, 0.875], "width": 32, "height": 32, "advance": 32 }, { "char": "Z", "uv": [0.375, 0.75, 0.5, 0.875], "width": 32, "height": 32, "advance": 32 }, { "char": "1", "uv": [0.5, 0.75, 0.625, 0.875], "width": 32, "height": 32, "advance": 32 }, { "char": "2", "uv": [0.625, 0.75, 0.75, 0.875], "width": 32, "height": 32, "advance": 32 }, { "char": "3", "uv": [0.75, 0.75, 0.875, 0.875], "width": 32, "height": 32, "advance": 32 }, { "char": "4", "uv": [0.875, 0.75, 1, 0.875], "width": 32, "height": 32, "advance": 32 }, { "char": "5", "uv": [0, 0.875, 0.125, 1], "width": 32, "height": 32, "advance": 32 }, { "char": "6", "uv": [0.125, 0.875, 0.25, 1], "width": 32, "height": 32, "advance": 32 }, { "char": "7", "uv": [0.25, 0.875, 0.375, 1], "width": 32, "height": 32, "advance": 32 }, { "char": "8", "uv": [0.375, 0.875, 0.5, 1], "width": 32, "height": 32, "advance": 32 }, { "char": "9", "uv": [0.5, 0.875, 0.625, 1], "width": 32, "height": 32, "advance": 32 }, { "char": "0", "uv": [0.625, 0.875, 0.75, 1], "width": 32, "height": 32, "advance": 32 }] as AtlasMetaData[]

