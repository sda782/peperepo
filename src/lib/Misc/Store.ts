import type { StorageReference } from "firebase/storage";
import { writable, type Writable } from "svelte/store";

export type ImageData = {
    url: string,
    ref: StorageReference
}

export const imageDatas: Writable<ImageData[]> = writable([])