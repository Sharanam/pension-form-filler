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

  let processing = null;
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
        processing = "Deleting Record";
        let [d, i] = deleteRecord($data, $index);
        index.set(i);
        data.set(d);
        setTimeout(() => {
          processing = null;
        }, 200);
      }}
      disabled={$data.length === 1}
      class="negative"
    >
      Delete Current Record
    </button>
  </div>

  {#if processing}
    <div class="center process no-print">
      <h1>{processing || "Processing"}</h1>
    </div>
  {:else}
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
  .process {
    margin-block: 2rem;
    padding: 2em;
    color: blue;
  }
  .process > h1::after {
    content: "...";
  }
  .process > h1 {
    font-size: 2rem;
  }
</style>
