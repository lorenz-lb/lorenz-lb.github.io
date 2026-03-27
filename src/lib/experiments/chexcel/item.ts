import { base } from "$app/paths";
import thumb from './pix_chexcel_2.png';
import Chexcel from "./chexcel.svelte";
import { type ItemData, FileType } from "$lib/types";

export default {
    id: "CHEXCEL",
    image: thumb,
    title: "Chexcel.txt",
    subtitle: "The route to (almost) chess in Excel",
    tags: ["Excel"].toSorted(),
    link: `${base}/experiments/chexcel`,
    component: Chexcel,
    type: FileType.Executable,
} as ItemData;
