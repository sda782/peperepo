import type { StorageReference } from "firebase/storage";
import { readable, writable, type Readable, type Writable } from "svelte/store";

export type ImageData = {
    url: string,
    ref: StorageReference
}

export const imageDatas: Writable<ImageData[]> = writable([])
export const displaySize: Readable<number> = readable(300)
export const uploadSize: Readable<number> = readable(200)