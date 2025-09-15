
import type { Component } from "svelte";

export type Program = {
  id: number;
  image: any;
  title: string;
  component: Component;
  windowData: WindowData | null;
  windowHints: WindowHints | null;
}

export type WindowData = {
  width: number;
  height: number;
  pos_x: number;
  pos_y: number;
  minimized: boolean;
  maximized: boolean;
  hasfocus: boolean;
  zindex: number;
  resizable: boolean;
  disableWindowControl: boolean;
}

export interface WindowHints {
  width?: any;
  height?: any;
  posX?: any;
  posY?: any;
  maximized?: boolean;
  resizable?: boolean;
  disableWindowControl?: boolean;
}

export interface WindowEvents {
  onClose: (id: number) => void;
  onMinimize: (id: number) => void;
  onMaximize: (id: number) => void;

  onChangePosition: (id: number, newX: number, newY: number) => void;
  onChangeSize: (id: number, newWidth: number, newHeight: number) => void;
}

export interface DataManipulator {
  setWindowData: (id: number, windowData: WindowData) => void;
  setfocus: (id: number) => void;
}

