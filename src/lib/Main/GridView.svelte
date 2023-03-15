<script lang="ts">
    import { Button, Group, Image, Modal } from "@svelteuidev/core";
    import { isSignedIn } from "../Auth/AuthManager";
    import {
        deleteImage,
        getImages,
    } from "../firebaseStorage/firebaseStorageApi";
    import { displaySize, imageDatas as imageDatas } from "../Misc/Store";
    let currentImageData = undefined;
    let opened = false;

    getImages();

    const deleteImg = () => {
        deleteImage(currentImageData).then(() => {
            currentImageData = undefined;
        });
        opened = false;
    };

    const onClose = () => {
        opened = false;
        currentImageData = undefined;
    };
</script>

<Group>
    {#each $imageDatas as img}
        <Image
            radius="md"
            width={$displaySize}
            height={$displaySize}
            src={img.url}
            alt=""
            on:dblclick={() => {
                if ($isSignedIn) {
                    opened = true;
                    currentImageData = img;
                }
            }} />
    {/each}
</Group>
<Modal size="full" {opened} title="Delete Meme" on:close={onClose}>
    <Button fullSize on:click={deleteImg}>Delete</Button>
</Modal>
