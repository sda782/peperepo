<script lang="ts">
    import { Button, Group } from "@svelteuidev/core";
    import { auth } from "../Auth/firebaseconfig";

    const logout = () => {
        auth.signOut();
    };
</script>

<Group spacing="xs">
    <span
        >{auth.currentUser.displayName !== null
            ? auth.currentUser.displayName
            : auth.currentUser.email}</span>
    <Button variant="subtle" size="xs" on:click={logout}>Log out</Button>
</Group>
