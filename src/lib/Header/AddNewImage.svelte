<script lang="ts">
    import { Button } from "@svelteuidev/core";

    import AddModal from "./AddModal.svelte";

    let opened: boolean;
</script>

<Button size="xs" variant="outline" on:click={() => (opened = true)}
    >Upload new Pepe</Button>
<AddModal bind:opened />
