<script lang="ts">
    import { Center, Modal, Image, Space, Button } from "@svelteuidev/core";
    import { upload } from "../firebaseStorage/firebaseStorageApi";
    import addButonImage from "../../assets/add_white.png";

    export let opened: boolean = false;
    let preview: string = undefined;
    let addbutton: HTMLInputElement;

    const onFileSelected = (e) => {
        setPreview(e.target.files[0]);
    };

    const setPreview = (imageData: Blob) => {
        let reader = new FileReader();
        reader.readAsDataURL(imageData);
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

    async function pasteImage() {
        try {
            const permissionName = "clipboard-read" as PermissionName;
            const permission = await navigator.permissions.query({
                name: permissionName,
            });
            if (permission.state === "denied") {
                throw new Error("Not allowed to read clipboard.");
            }
            const clipboardContents = await navigator.clipboard.read();
            for (const item of clipboardContents) {
                if (!item.types.includes("image/png")) {
                    addbutton.click();
                    throw new Error("Clipboard contains non-image data.");
                }
                const blob = await item.getType("image/png");
                setPreview(blob);
                //preview = URL.createObjectURL(blob);
            }
        } catch (error) {
            console.error(error.message);
        }
    }
</script>

<Modal centered {opened} on:close={onClose} title="Upload rare pepe" size="xs">
    <Center>
        {#if preview}
            <Image src={preview} />
        {:else}
            <Image
                width="150px"
                src={addButonImage}
                on:click={() => {
                    pasteImage();
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
