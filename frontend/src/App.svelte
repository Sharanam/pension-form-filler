<script>
  // @ts-nocheck
  import InputInterface from "./lib/interface/InputInterface.svelte";
  import RecordTable from "./lib/interface/recordManager/RecordTable.svelte";
  import PrintableUnit from "./lib/interface/PrintableUnit.svelte";
  import Header from "./lib/WebPage/header/Header.svelte";
  import Footer from "./lib/WebPage/footer/Footer.svelte";
  import { data, index, preferences } from "./lib/globalState/data";
  import ShowAllRecords from "./lib/interface/recordManager/ShowAllRecords.svelte";
  import { initialRecord } from "./lib/tools/initialRecord";
  import { deleteRecord } from "./lib/tools/deleteRecord";
</script>

<Header />
<main>
  <div class="center no-print">
    <ShowAllRecords />
    <button
      on:click={() => {
        data.update((n) => [...n, initialRecord()]);
        index.set($data.length - 1);
      }}
      class="positive"
    >
      Add New Record
    </button>
    <button
      on:click={() => {
        // needs to be done this way to avoid a bug in svelte
        let [d, i] = deleteRecord($data, $index);
        console.log([d, i]);
        index.set(i);
        data.set(d);
      }}
      disabled={$data.length === 1}
      class="negative"
    >
      Delete Current Record
    </button>
  </div>
  {#if $data}
    <RecordTable />
  {/if}
  <InputInterface />

  {#if $preferences.showAll}
    {#each $data as _, i}
      <div class={`page-${i % 2 ? "odd" : "even"}`}>
        <PrintableUnit index={i} />
      </div>
    {/each}
  {:else}
    <PrintableUnit index={$index} />
  {/if}
</main>

<Footer />

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
