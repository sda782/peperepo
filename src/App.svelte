<script lang="ts">
    import { SvelteUIProvider } from "@svelteuidev/core";
    import Header from "./lib/Header/Header.svelte";
    import Main from "./lib/Main/Main.svelte";
</script>

<SvelteUIProvider withGlobalStyles themeObserver="dark">
    <Header />
    <Main />
</SvelteUIProvider>
