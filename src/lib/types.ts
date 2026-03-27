import type { SvelteComponent } from "svelte";

export enum FileType {
	Executable,
	Document
}

export interface ItemData {
	id: string,
	image: any,
	title: string;
	subtitle: string;
	tags: string[];
	link: string;
	component: any;
	type: FileType;
}
