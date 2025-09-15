import { base } from "$app/paths";
import thumb from './pix_chexcel_2.png';
import Chexcel from "./chexcel.svelte";

let name = 'chexcel'

export default {
    id: "CHEXCEL",
    image: thumb,
    title: name,
    subtitle: "The route to (almost) chess in Excel",
    tags: ["Excel"].toSorted(),
    link: `${base}/experiments/${name}`,
    component: Chexcel,
};
