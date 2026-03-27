import { base } from "$app/paths";
import thumb from './fontAtlas.png'
import FontAtlas from './fontAtlas.svelte'
import { type ItemData, FileType } from "$lib/types";

export default {
    id: "FONTATLAS",
    image: thumb,
    title: "Font Atlas Generator",
    subtitle: "Create a font atlas for your game",
    tags: ["game"].toSorted(),
    link: `${base}/experiments/fontAtlas`,
    component: FontAtlas,
    type: FileType.Executable,
} as ItemData;
