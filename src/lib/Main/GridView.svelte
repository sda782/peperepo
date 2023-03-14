<script lang="ts">
    import { Button, Group, Image, Modal } from "@svelteuidev/core";
    import {
        deleteImage,
        getImages,
    } from "../firebaseStorage/firebaseStorageApi";
    import { imageDatas as imageDatas } from "../Misc/Store";
    let currentImageData = undefined;

    const size = 300;
    getImages();
    let opened = false;
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
            width={size}
            height={size}
            src={img.url}
            alt=""
            on:dblclick={() => {
                opened = true;
                currentImageData = img;
            }} />
    {/each}
</Group>
<Modal size="full" {opened} title="Delete Meme" on:close={onClose}>
    <Button fullSize on:click={deleteImg}>Delete</Button>
</Modal>
