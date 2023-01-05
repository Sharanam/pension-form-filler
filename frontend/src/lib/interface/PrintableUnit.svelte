<script>
  // @ts-nocheck

  import { data } from "../globalState/data";
  import PensionCase from "../../lib/sections/PensionCase.svelte";
  import TableOfContents from "../sections/TableOfContents.svelte";
  import Bhaag1 from "../sections/Bhaag-1/Index.svelte";
  import Bhaag2 from "../sections/Bhaag-2/Index.svelte";
  import Bhaag5 from "../sections/Bhaag-5/Index.svelte";
  export let index;
  $: bhaag = $data[index].bhaag;
</script>

<TableOfContents />
<PensionCase {index} />
{#if bhaag.includes(1)}
  <Bhaag1 {index} />
{/if}
{#if bhaag.includes(2)}
  <Bhaag2 {index} />
{/if}
{#if bhaag.includes(5)}
  <Bhaag5 {index} />
{/if}
