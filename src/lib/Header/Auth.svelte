<script lang="ts">
    import Login from "./Login.svelte";
    import AuthStatus from "./AuthStatus.svelte";
    import { isSignedIn } from "../Auth/AuthManager";
    import { Group } from "@svelteuidev/core";
    import AddNewImage from "./AddNewImage.svelte";
</script>

{#if $isSignedIn}
    <Group>
        <AddNewImage />
        <AuthStatus />
    </Group>
{:else}
    <Login />
{/if}
