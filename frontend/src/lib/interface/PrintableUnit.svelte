<script>
    import PensionCase from "../../lib/sections/PensionCase.svelte";

    import PensionCase1 from "../../lib/sections/PensionCase1.svelte";

    export let file, index;
</script>

<PensionCase bind:file {index} />
<PensionCase1 bind:file {index} />
