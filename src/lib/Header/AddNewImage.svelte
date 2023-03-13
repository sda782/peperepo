<script lang="ts">
    import { Button, Modal, Image, Space, Center } from "@svelteuidev/core";
    import { upload } from "../firebaseStorage/firebaseStorageApi";
    import addButonImage from "../../assets/add_white.png";

    let opened: boolean = false;
    let preview: string = undefined;
    let addbutton: HTMLInputElement;

    const onFileSelected = (e) => {
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e: ProgressEvent<FileReader>) => {
            preview = e.target.result.toString();
        };
    };

    const onClose = () => {
        opened = false;
        preview = undefined;
    };

    const Upload = () => {
        if (preview === undefined) return;
        upload(preview);
        onClose();
    };
</script>

<Button size="xs" variant="outline" on:click={() => (opened = true)}
    >Upload new Pepe</Button>
<Modal centered {opened} on:close={onClose} title="Upload rare pepe" size="xs">
    <Center>
        {#if preview}
            <Image src={preview} />
        {:else}
            <Image
                width="150px"
                src={addButonImage}
                on:click={() => {
                    addbutton.click();
                }} />
        {/if}
    </Center>
    <input
        style="display:none"
        type="file"
        accept=".jpg, .jpeg, .png"
        alt="image input"
        on:change={(e) => onFileSelected(e)}
        bind:this={addbutton} />
    <Space h="lg" />
    <Button fullSize on:click={Upload}>Upload</Button>
</Modal>
