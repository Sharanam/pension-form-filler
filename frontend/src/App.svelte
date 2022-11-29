<script>
  // @ts-nocheck

  import FileInput from "./lib/interface/FileInput.svelte";
  import Form from "./lib/interface/Form.svelte";
  import RecordManager from "./lib/interface/RecordManager.svelte";
  import Output from "./lib/interface/Output.svelte";
  import RecordNavigator from "./lib/interface/RecordNavigator.svelte";
  import PensionCase from "./lib/sections/PensionCase.svelte";
  import SevaPothi from "./lib/sections/SevaPothi.svelte";
  import { initialRecord } from "./lib/tools/initialRecord";
  import PensionCase1 from "./lib/sections/PensionCase1.svelte";

  let index = 0;

  let file = [initialRecord()];
  $: data = file[index];
</script>

<main>
  <!-- interface starts -->
  <FileInput bind:data={file} bind:index />
  {#if file}
    <RecordNavigator records={file?.length} bind:currentRecord={index} />
    <RecordManager bind:file bind:currentRecord={index} />
  {/if}
  <Form {index} bind:file />

  <!-- interface ends -->

  <!-- page starts -->
  <SevaPothi page={data?.pages} />
  <PensionCase bind:file {index} />
  <PensionCase1 bind:file {index} />
  <!-- page ends -->

  <!-- interface starts -->
  <Output />
  <!-- interface ends -->
</main>
