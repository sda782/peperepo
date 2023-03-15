<script lang="ts">
    import {
        Center,
        Modal,
        Image,
        Space,
        Button,
        Text,
    } from "@svelteuidev/core";
    import { upload } from "../firebaseStorage/firebaseStorageApi";
    import addButonImage from "../../assets/add_white.png";
    import { resize } from "../Misc/Convert";

    export let opened: boolean = false;
    let preview: string = undefined;
    let addbutton: HTMLInputElement;
    let errorMessage: string = undefined;

    const onFileSelected = (e) => {
        setPreview(e.target.files[0]);
    };

    const setPreview = (imageData: Blob) => {
        let reader = new FileReader();
        reader.readAsDataURL(imageData);
        reader.onload = (e: ProgressEvent<FileReader>) => {
            preview = resize(e.target.result.toString());
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

    const onFail = () => {
        addbutton.click();
        errorMessage = "can't paste image select file instead";
        setTimeout(() => {
            errorMessage = undefined;
        }, 1000);
    };

    async function pasteImage() {
        preview = undefined;
        try {
            const permissionName = "clipboard-read" as PermissionName;
            const permission = await navigator.permissions.query({
                name: permissionName,
            });
            if (permission.state === "denied") {
                onFail();
                return;
            }
            const clipboardContents = await navigator.clipboard.read();
            for (const item of clipboardContents) {
                if (!item.types.includes("image/png")) {
                    onFail();
                    return;
                }
                let blob = await item.getType("image/png");
                setPreview(blob);
            }
        } catch (error) {
            onFail();
        }
    }
</script>

<svelte:window />
<Modal centered {opened} on:close={onClose} title="Upload rare pepe" size="xs">
    <Center>
        <Image
            width="150px"
            src={preview === undefined ? addButonImage : preview}
            on:click={() => {
                pasteImage();
            }} />
    </Center>
    <input
        style="display:none"
        type="file"
        accept=".jpg, .jpeg, .png"
        alt="image input"
        on:change={(e) => onFileSelected(e)}
        bind:this={addbutton} />
    {#if errorMessage}
        <Text>{errorMessage}</Text>
    {/if}
    <Space h="lg" />
    <Button fullSize on:click={Upload}>Upload</Button>
</Modal>
