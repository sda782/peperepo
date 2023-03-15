import { get } from "svelte/store"
import { uploadSize } from "./Store"

export const resize = (image: string): string => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const img = new Image()
    const size = get(uploadSize)

    img.src = image
    canvas.width, canvas.height = size
    ctx.drawImage(img, 0, 0, size, size)

    return canvas.toDataURL(img.src)
}