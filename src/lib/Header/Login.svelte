<script lang="ts">
    import { Button, Group, Input } from "@svelteuidev/core";
    import { sign_in } from "../Auth/AuthManager";

    let email: string;
    let password: string;
    const login = () => {
        sign_in(email, password);
    };
</script>

<Group spacing="xs">
    <Input
        size="xs"
        type="email"
        placeholder="John@Doe.com"
        bind:value={email} />
    <Input
        size="xs"
        type="password"
        placeholder="password101"
        bind:value={password} />
    <Button size="xs" variant="subtle" on:click={login}>Login</Button>
</Group>
