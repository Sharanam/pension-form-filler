<script>
  // @ts-nocheck

  import FileInput from "./lib/interface/FileInput.svelte";
  import InputInterface from "./lib/interface/InputInterface.svelte";
  import RecordManager from "./lib/interface/RecordManager.svelte";
  import Output from "./lib/interface/Output.svelte";
  import RecordNavigator from "./lib/interface/RecordNavigator.svelte";

  import { initialRecord } from "./lib/tools/initialRecord";
  import RecordTable from "./lib/interface/RecordTable.svelte";
  import PrintableUnit from "./lib/interface/PrintableUnit.svelte";

  let index = 0;

  let file = [initialRecord()];
  let showAll = false;
</script>

<main>
  <!-- interface starts -->
  <FileInput bind:data={file} bind:index />
  <Output {file} bind:showAll />
  <hr />
  {#if file}
    <RecordNavigator records={file?.length} bind:currentRecord={index} />
    <RecordManager bind:file bind:currentRecord={index} />
    <RecordTable bind:file bind:index />
  {/if}
  <InputInterface {index} bind:file />

  <!-- interface ends -->

  {#if showAll}
    {#each file as _, i}
      <div class={`page-${i % 2 ? "odd" : "even"}`}>
        <PrintableUnit bind:file index={i} />
      </div>
    {/each}
  {:else}
    <PrintableUnit bind:file bind:index />
  {/if}
</main>

<style>
  @media screen {
    .page-even {
      background-color: lightpink;
    }
    .page-odd {
      background-color: lightblue;
    }
  }
</style>
