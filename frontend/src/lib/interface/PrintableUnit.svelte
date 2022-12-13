<script>
    import PensionCase from "../../lib/sections/PensionCase.svelte";
    import SevaPothi from "../../lib/sections/SevaPothi.svelte";
    import PensionCase1 from "../../lib/sections/PensionCase1.svelte";

    export let file, index;
</script>

<SevaPothi page={file[index]?.pages} />
<PensionCase bind:file {index} />
<PensionCase1 bind:file {index} />
