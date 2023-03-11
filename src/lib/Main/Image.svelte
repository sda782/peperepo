<script lang="ts">
    import { Image } from "@svelteuidev/core";
    import temp from "../../assets/Feels_good_man.jpg";
    export let size: number;
</script>

<Image
    radius="md"
    width={size}
    height={size}
    src={temp}
    alt=""
    on:click={() => {
        console.log("first");
    }} />
