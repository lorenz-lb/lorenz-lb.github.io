import { base } from "$app/paths";
import thumb from './thumb.png'
// import module
//import FontAtlas from './fontAtlas.svelte'
import { type ItemData, FileType } from "$lib/types";

export default {
    id: "TEMPLATE",
    image: thumb,
    title: "TITLE",
    subtitle: "SUBTITLE",
    tags: ["TAG"].toSorted(),
    link: `${base}/experiments/PATH`,
    //component: FontAtlas,
    type: FileType.Executable,
} as ItemData;
