import { base } from "$app/paths";
import thumb from './thumb.png'
import Cv from "./cv.svelte";
import { type ItemData, FileType } from "$lib/types";

export default {
    id: "CV",
    image: thumb,
    title: 'CV',
    subtitle: "",
    tags: [].toSorted(),
    link: `${base}/experiments/cv`,
    component: Cv,
    type: FileType.Document,
} as ItemData;
