import { writable, type Writable } from "svelte/store";

export const imageUrls: Writable<string[]> = writable([])