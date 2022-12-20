<script>
    import PensionCase from "../../lib/sections/PensionCase.svelte";

    import PensionCase1 from "../sections/old/PensionCase1.svelte";
    import TableOfContents from "../sections/TableOfContents.svelte";
    import Bhaag1 from "../sections/Bhaag-1/Index.svelte";
    export let index;
</script>

<TableOfContents />
<PensionCase {index} />
<Bhaag1 {index} />
<hr class="end" />
<div class="no-print">
    <PensionCase1 {index} />
</div>

<style>
    hr.end {
        margin-block: 15px;
        color: red;
        background-color: red;
        height: 15px;
    }
</style>
