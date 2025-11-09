<script lang="ts">
  import { onMount } from "svelte";
  import { ECSApp } from "./control/appECS";
  import banner from "./banner.png";

  let gpuAvailable: boolean = false;

  if (navigator.gpu) {
    gpuAvailable = true;
  }

  let pond_canvas: HTMLCanvasElement;
  let app: ECSApp;

  onMount(async () => {
    app = new ECSApp(pond_canvas);
    app.startApp();
  });
</script>

<main class="flex justify-center w-full">
  <div class="p-8 space-y-10 w-full">
    <!-- TEXT -->
    <div class="space-y-10">
      <!-- Banner -->
      <img src={banner} alt={"banner"} />
      <!-- Head -->
      <h1 class="text-3xl font-bold text-center mb-8">WebGPU</h1>
      <section>
        <!-- prettier-ignore -->
        <p class="">
          WebGPU is seen as the successor to OpenGL. 
          So WebGPU is a cross platform API for access the GPU.
          WebGPU translates it's API calls to Vulcan / Metal / DirectX calls, depending on the system used. 
          WebGPU can be used on many different plattforms and modern Browsers like Chrome or Firefox already enable WebGPU out of the box.
          Safari from Apple also supports WebGPU but it needs to be enabled in the settings (at least on iPhone).
          TODO
        </p>
        <!-- prettier-ignore -->
        <p>The most interesting new addition to WebGPU compared to OpenGL are ComputeShaders.
          Shaders are just special programs written to be executed on the GPU.
          Compute Shaders are general purpose Programs which can accept and return data.</p>
      </section>

      <section>
        <h2 class="text-xl">Controls</h2>
        <!-- prettier-ignore -->
        <p class="">
         // table 
        </p>
      </section>

      <section>
        <h2 class="text-xl">Controls</h2>
        <!-- prettier-ignore -->
        <p class="">
         // table 
        </p>
      </section>
    </div>
    <hr />
    <div>
      <p>ACTION ITEMS</p>
    </div>

    {#if !gpuAvailable}
      <h2 class="text-center">WebGPU is not available, no fishing today :(</h2>
    {:else}
      <h2>Lets go fishing!</h2>
      <canvas
        bind:this={pond_canvas}
        id="gfx-main"
        width={1920 * 0.8}
        height={1080 * 0.8}
        tabindex="0"
      ></canvas>
    {/if}
  </div>
</main>

<style>
  @import "$lib/components/ui95/assets/ui95.css";
</style>
