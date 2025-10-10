import { base } from "$app/paths";
import thumb from './thumb.png'
import Scrum from "./scrum.svelte";
import { type ItemData, FileType } from "$lib/types";

export default {
    id: "SCRUMCERT",
    image: thumb,
    title: 'Scrum Certificate.pdf',
    subtitle: "",
    tags: [].toSorted(),
    link: `${base}/experiments/scrum`,
    component: Scrum,
    type: FileType.Document,
} as ItemData;
