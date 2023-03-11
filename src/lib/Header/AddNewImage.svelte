<script lang="ts">
    import { Button, Modal, Image } from "@svelteuidev/core";
    import { upload } from "../firebaseStorage/firebaseStorageApi";

    let opened: boolean = false;
    let preview: string = undefined;

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
    };
</script>

<Button size="xs" variant="outline" on:click={() => (opened = true)}
    >Upload new Pepe</Button>
<Modal {opened} on:close={onClose} title="Upload rare pepe">
    <Image src={preview} />
    <input
        type="file"
        accept=".jpg, .jpeg, png"
        alt="image input"
        on:change={(e) => onFileSelected(e)} />
    <Button on:click={Upload}>Upload</Button>
</Modal>
