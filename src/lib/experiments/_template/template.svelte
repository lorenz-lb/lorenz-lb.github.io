<script lang="ts">
  import banner from "./banner.png";
</script>

<main class="flex mx-[1px]">
  <div class="min-h-screen p-8 space-y-10 overflow-hidden">
    <!-- TEXT -->
    <div class="space-y-10">
      <!-- Banner -->
      <img src={banner} alt={"banner"} />
      <!-- Head -->
      <h1 class="text-3xl font-bold text-center mb-8">Template Title</h1>
      <section>
        <!-- prettier-ignore -->
        <p class="">
          Intro
        </p>
      </section>
      <section>
        <h2 class="text-xl">Section Title</h2>
        <!-- prettier-ignore -->
        <p class="">
          First Section
        </p>
      </section>
    </div>
    <hr />
    <div>
      <p>ACTION ITEMS</p>
    </div>
  </div>
</main>

<style>
  @import "$lib/components/ui95/assets/ui95.css";

  h2 {
    font-weight: bold;
  }
</style>
