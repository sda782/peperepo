import { ref, uploadString, getDownloadURL, list, type UploadResult, type StorageReference, deleteObject } from "firebase/storage"
import { storage, storageRef } from "../Auth/firebaseconfig"
import { v4 } from "uuid"
import { imageDatas, type ImageData } from "../Misc/Store"
import { get } from "svelte/store"

export const upload = (image: string) => {
    const imageRef = ref(storage, v4() + ".jpg")
    uploadString(imageRef, image, 'data_url').then((snapshot: UploadResult) => {
        imageDatas.set([])
        getImages();
    })
}

export const getImages = () => {
    list(storageRef).then((listRef) => {
        listRef.items.forEach((item: StorageReference) => {
            getDownloadURL(item).then((url: string) => {
                const imageData: ImageData = { url: url, ref: item }
                imageDatas.set([...get(imageDatas), imageData])
            });
        });
    });
}

export const deleteImage = async (imageData: ImageData): Promise<void> => {
    return deleteObject(imageData.ref).then(() => {
        let imgdatas = get(imageDatas)
        let index = imgdatas.indexOf(imageData)
        if (index > -1) imgdatas.splice(index, 1);
        imageDatas.set(imgdatas)
    }).catch((error) => {
        console.error(error)
    });
}