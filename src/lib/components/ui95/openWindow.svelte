<script module>
  import { clamp } from "$lib/util";
  import { onMount } from "svelte";
</script>

<script lang="ts">
  import type {
    DataManipulator,
    Program,
    WindowData,
    WindowEvents,
  } from "./ui95types";
  import { uiSettings } from "./uiSettings.svelte";

  interface OpenWindowProps {
    windowData: WindowData;
    availableArea: HTMLElement;
    windowEvents: WindowEvents;
    dataManipulator: DataManipulator;
    program: Program;
  }

  let {
    windowData,
    availableArea,
    windowEvents,
    dataManipulator,
    program,
  }: OpenWindowProps = $props();

  let isdragging = $state(false);
  let off_x = 0;
  let off_y = 0;

  let currentWidth = $state(0);
  currentWidth = windowData.width;
  let currentHeight = $state(0);
  currentHeight = windowData.height;

  let currentPosX = $state(windowData.pos_x);
  let currentPosY = $state(windowData.pos_y);

  let self: HTMLElement;
  let handleBar: HTMLElement;

  function handleMouseDown(event: MouseEvent) {
    if (isPointerLockActive()) return;

    console.log("MouseDownCalled");
    isdragging = true;

    off_x = event.clientX - currentPosX;
    off_y = event.clientY - currentPosY;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(event: MouseEvent) {
    if (isPointerLockActive()) return;

    if (isdragging) {
      let clampedMouseX = clamp(0, availableArea.offsetWidth, event.clientX);
      let clampedMouseY = clamp(
        off_y,
        availableArea.clientHeight - (handleBar.offsetHeight - off_y),
        event.clientY,
      );

      currentPosX = clampedMouseX - off_x;
      currentPosY = clampedMouseY - off_y;
    }
  }

  function handleMouseUp() {
    if (isPointerLockActive()) return;
    isdragging = false;

    windowEvents.onChangePosition(program.id, currentPosX, currentPosY);
    windowEvents.onChangeSize(program.id, currentWidth, currentHeight);

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  function propagateUpdates() {
    console.log("PROPAGATEUPDATES:");
    console.log("CURRENT w : \t", currentWidth);
    windowEvents.onChangePosition(program.id, currentPosX, currentPosY);
    windowEvents.onChangeSize(program.id, currentWidth, currentHeight);
    console.log("WINDOW w : \t", windowData.width);
  }

  function openwindowMouseDown() {
    if (isPointerLockActive()) return;
    dataManipulator.setfocus(program.id);
  }
  function openwindowMouseUp() {
    if (isPointerLockActive()) return;
    // set maximized false
    if (!windowData.maximized) {
      currentHeight = self.offsetHeight;
      currentWidth = self.offsetWidth;
    }
    propagateUpdates();
  }

  function isPointerLockActive() {
    return document.pointerLockElement !== null;
  }
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
  bind:this={self}
  id="openWindow"
  class={`${windowData.resizable ? "resize" : ""} overflow-hidden absolute min-h-10 min-w-30 flex flex-col`}
  style="
        width: {windowData.maximized ? 'w-full' : windowData.width + 'px'};
        height: {windowData.maximized ? 'h-full' : windowData.height + 'px'};
        top: {windowData.maximized ? '0px' : currentPosY + 'px'};
        left: {windowData.maximized ? '0px' : currentPosX + 'px'};
        {windowData.maximized ? 'right: 0px;' : ''}
        {windowData.maximized ? 'bottom: 0px;' : ''}
        z-index: {windowData.zindex};"
  role="region"
  onmouseup={openwindowMouseUp}
  onmousedown={openwindowMouseDown}
>
  <!-- headder -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
    bind:this={handleBar}
    role="region"
    id="windowHead"
    class=" h-8 w-full flex flex-row justify-end items-center"
    onmousedown={handleMouseDown}
    onmousemove={handleMouseMove}
    onmouseup={handleMouseUp}
  >
    <p
      class="h-full w-full text-white flex justify-left items-center m-1 mx-2 overflow-hidden whitespace-nowrap break-keep font-bold"
    >
      {program.title}
    </p>

    <div class="flex-1 flex w-full h-[70%] items-center px-1">
      {#if !windowData.disableWindowControl}
        <!-- minimize and maximize-->
        <div class="flex w-full h-full justify-end items-center mx-1">
          <button
            class="h-full aspect-square
              grid place-items-center
              text-black text-lg font-bold leading-0
              button3d
              headbutton"
            onclick={() => windowEvents.onMinimize(program.id)}
          >
            <div
              class="w-[90%] h-[100%] flex items-end"
              style="border:solid transparent 3px;"
            >
              <hr class="w-[80%]" style="border: solid black 2px;" />
            </div>
          </button>

          <button
            class="h-full aspect-square
              grid place-items-center
              text-black text-lg font-bold
              button3d
              headbutton"
            onclick={() => windowEvents.onMaximize(program.id)}
          >
            <div
              class="w-[70%] h-[70%]"
              style="border:solid black 2px;border-top-width: 4px;"
            ></div>
          </button>
        </div>
      {/if}
      <!-- close button-->
      <button
        class="headbutton"
        class:button3d={!windowData.disableWindowControl}
        class:element3d-disabled={windowData.disableWindowControl}
        disabled={windowData.disableWindowControl}
        onclick={() => windowEvents.onClose(program.id)}
      >
        X</button
      >
    </div>
  </div>
  <!-- contents-->
  <div class="flex-1 w-full flex flex-row overflow-hidden">
    <div
      class="flex-1 overflow-auto"
      style="font-family: {uiSettings.fontPixelated
        ? 'Windows95, sans-serif'
        : 'sans-serif'};
        {!uiSettings.isMobile ? 'font-size: 14pt;' : ''}
        "
    >
      <!-- svelte-ignore svelte_component_deprecated -->
      <svelte:component
        this={program.component}
        {windowEvents}
        programID={program.id}
      ></svelte:component>
    </div>
  </div>
</div>

<style>
  @import "./assets/ui95.css";

  .headbutton {
    border-width: 2px;
    background-color: #c3c3c3;
    font-size: large;
    height: 100%;
    aspect-ratio: 1/1;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center; /* Horizontale Zentrierung */
    align-items: center; /* Vertikale Zentrierung */
  }

  #windowHead {
    background-color: #000082;
    margin: 2px;
  }

  #openWindow {
    background-color: #c3c3c3;
    border: 2px solid;
    border-top-color: white;
    border-left-color: white;
    border-right-color: black;
    border-bottom-color: black;

    box-sizing: border-box;
  }

  .grayscale {
    filter: grayscale();
  }
</style>
