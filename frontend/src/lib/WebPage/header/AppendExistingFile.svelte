<script>
  // @ts-nocheck

  let fileInput;
  import fileHandle from "../../tools/fileHandle";
  import { data, index } from "../../globalState/data";
  let d;
  data.subscribe((data) => (d = data));
</script>

<label for="appendFile"> Add Records From Existing File </label>
<input
  type="file"
  id="appendFile"
  accept=".records"
  bind:this={fileInput}
  on:change={(e) => fileHandle(e, data, index, { append: true, previous: d })}
/>

<style>
  label {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  label:focus,
  label:hover {
    transform: translateX(5px);
  }
  input {
    display: none;
  }
</style>
