<script lang="ts">
  let width: number = 32;
  let fontFamily: string = "Arial, sans-serif";
  let characters: string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  let canvasElement: HTMLCanvasElement;
  let atlasImageUrl: string = "";

  function generateFontAtlas() {
    if (!canvasElement) return;

    const ctx = canvasElement.getContext("2d");
    if (!ctx) return;

    const cols = Math.ceil(Math.sqrt(characters.length));
    const rows = Math.ceil(characters.length / cols);
    const charSize = width;

    const canvasWidth = cols * charSize;
    const canvasHeight = rows * charSize;

    canvasElement.width = canvasWidth;
    canvasElement.height = canvasHeight;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.font = `${width}px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "white";

    for (let i = 0; i < characters.length; i++) {
      const char = characters[i];

      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * charSize + charSize / 2;
      const y = row * charSize + charSize / 2;

      ctx.fillText(char, x, y);
    }

    atlasImageUrl = canvasElement.toDataURL("image/png");
  }

  function downloadAtlas() {
    if (!atlasImageUrl) {
      alert("First, generate the Atlas.");
      return;
    }

    const link = document.createElement("a");
    link.download = "font_atlas.png";
    link.href = atlasImageUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
</script>

<main class="flex mx-[1px]">
  <div class="min-h-screen p-8 space-y-10 overflow-hidden">
    <div class="space-y-10">
      <h1 class="text-3xl font-bold text-center mb-8">Font Atlas Creator</h1>
      <section>
        <p class="">
          With this tool you can very easily create your own font atlas used for
          creating text in games!
        </p>
      </section>

      <section>
        <h2 class="text-xl">Settings</h2>
        <div class="space-y-4">
          <div>
            <label for="width-slider" class="block font-medium"
              >Cell width: {width}px</label
            >
            <input
              id="width-slider"
              type="range"
              min="10"
              max="100"
              step="1"
              bind:value={width}
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label for="font-family" class="block font-medium mb-1"
              >Font Family</label
            >
            <input
              id="font-family"
              type="text"
              bind:value={fontFamily}
              placeholder="Arial, sans-serif"
              class="ui95-textinput px-1 w-full"
            />
          </div>

          <div>
            <label for="characters" class="block font-medium mb-1"
              >Characters</label
            >
            <input
              id="characters"
              type="text"
              bind:value={characters}
              placeholder="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
              class="ui95-textinput px-1 w-full"
            />
          </div>
        </div>
      </section>

      <section class="space-y-4 flex-col">
        <h2 class="text-xl">Generate & Preview</h2>

        <button on:click={generateFontAtlas} class="button3d p-3">
          <div>Generate Font Atlas</div>
        </button>

        <canvas bind:this={canvasElement} class="hidden"></canvas>

        {#if atlasImageUrl}
          <h3 class="font-medium mt-4">Preview:</h3>
          <img
            src={atlasImageUrl}
            alt="Generated Font Atlas"
            class="ui95-inset-panel p-2 image-rendering-pixelated"
            style="border: 2px solid #ccc; max-width: 100%; height: auto;"
          />

          <button on:click={downloadAtlas} class="button3d p-3 mt-2">
            <div>
              Download Atlas (PNG)
              <div></div>
            </div></button
          >
        {:else}
          <p>Click "Generate Font Atlas" to generate your atlas</p>
        {/if}
      </section>
    </div>
  </div>
</main>

<style>
  @import "$lib/components/ui95/assets/ui95.css";

  h2 {
    font-weight: bold;
  }

  .image-rendering-pixelated {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }
</style>
