import { base } from "$app/paths";
import TestComp from "./testComp.svelte";

let name = 'test'

export default {
    id: "TEST",
    image: "",
    title: name,
    subtitle: "test",
    tags: ["test"].toSorted(),
    link: `${base}/experiments/${name}`,
    component: TestComp,
};
