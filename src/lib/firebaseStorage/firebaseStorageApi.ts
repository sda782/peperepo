import { ref, uploadString, getDownloadURL, list } from "firebase/storage"
import { storage, storageRef } from "../Auth/firebaseconfig"
import { v4 } from "uuid"
import { imageUrls } from "../Store"
import { get } from "svelte/store"

export const upload = (image: string) => {
    const imageRef = ref(storage, v4() + ".jpg")
    uploadString(imageRef, image, 'data_url').then((snapshot) => {
        getNewImages()
    })
}

export const getImages = () => {
    list(storageRef).then((listRef) => {
        listRef.items.forEach((item) => {
            let temp = getDownloadURL(item);
            temp.then((url) => {
                imageUrls.set([...get(imageUrls), url])
            });
        });
    });
}
export const getNewImages = () => {
    imageUrls.set([])
    getImages();
}