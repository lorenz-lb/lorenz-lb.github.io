<script lang="ts">
  import { onMount } from "svelte";
  import { Renderer } from "./renderer";

  let gpuAvailable: boolean = false;

  if (navigator.gpu) {
    gpuAvailable = true;
  }

  let gfx_main: HTMLCanvasElement;
  let renderer: Renderer;

  onMount(async () => {
    renderer = new Renderer(gfx_main);
    renderer.Initialize();
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
