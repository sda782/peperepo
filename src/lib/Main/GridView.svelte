<script lang="ts">
    import { Group, Image } from "@svelteuidev/core";
    import { getImages } from "../firebaseStorage/firebaseStorageApi";

    import { imageUrls } from "../Store";

    const size = 300;
    getImages();
</script>

<Group>
    {#each $imageUrls as url}
        <Image
            radius="md"
            width={size}
            height={size}
            src={url}
            alt=""
            on:click={() => {
                console.log("first");
            }} />
    {/each}
</Group>
