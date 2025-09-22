<script lang="ts">
  import { onMount } from "svelte";
  import shaderCode from "./shaders/shaders.wgsl?raw";
  import { TriangleMesh } from "./triangleMesh";

  let gpuAvailable: boolean = false;

  if (navigator.gpu) {
    gpuAvailable = true;
  }

  let gfx_main: HTMLCanvasElement;

  onMount(async () => {
    const adapter: GPUAdapter = <GPUAdapter>(
      await navigator.gpu?.requestAdapter()
    );
    const device: GPUDevice = <GPUDevice>await adapter?.requestDevice();
    const context: GPUCanvasContext = <GPUCanvasContext>(
      gfx_main.getContext("webgpu")
    );
    const format: GPUTextureFormat = "bgra8unorm";
    context.configure({ device: device, format: format, alphaMode: "opaque" });

    const bindGroupLayout = device.createBindGroupLayout({ entries: [] });
    const bindGroup = device.createBindGroup({
      layout: bindGroupLayout,
      entries: [],
    });

    const pipelineLayout = device.createPipelineLayout({
      bindGroupLayouts: [bindGroupLayout],
    });

    const triangleMesh: TriangleMesh = new TriangleMesh(device);

    const shaderModule = device.createShaderModule({ code: shaderCode });
    const pipelineDescriptor: GPURenderPipelineDescriptor = {
      layout: pipelineLayout,
      vertex: {
        module: shaderModule,
        entryPoint: "vs_main",
        buffers: [triangleMesh.bufferLayout],
      },
      fragment: {
        module: shaderModule,
        entryPoint: "fs_main",
        targets: [
          {
            format: format,
          },
        ],
      },
      primitive: {
        topology: "triangle-list",
      },
    };

    const pipeline: GPURenderPipeline =
      device.createRenderPipeline(pipelineDescriptor);

    const commandEncoder: GPUCommandEncoder = device.createCommandEncoder();
    const textureView: GPUTextureView = context
      .getCurrentTexture()
      .createView();
    const renderpass: GPURenderPassEncoder = commandEncoder.beginRenderPass({
      colorAttachments: [
        {
          view: textureView,
          clearValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },
          loadOp: "clear",
          storeOp: "store",
        },
      ],
    });

    renderpass.setPipeline(pipeline);
    renderpass.setBindGroup(0, bindGroup);
    renderpass.setVertexBuffer(0, triangleMesh.buffer);

    renderpass.draw(3, 1, 0, 0);
    renderpass.end();
    device.queue.submit([commandEncoder.finish()]);
  });
</script>

<main class="flex mx-[1px]">
  <div class="min-h-screen p-8 space-y-10 overflow-hidden">
    {#if !gpuAvailable}
      <h2>WebGPU is not available, no fishing today :(</h2>
    {:else}
      <h2>Lets go fishing!</h2>
      <canvas bind:this={gfx_main} id="gfx-main" width="800" height="600"
      ></canvas>
    {/if}
  </div>
</main>

<style>
  @import "$lib/components/ui95/assets/ui95.css";
</style>
