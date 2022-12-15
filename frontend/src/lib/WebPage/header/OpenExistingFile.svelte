<script>
    // @ts-nocheck

    let fileInput;
    import fileHandle from "./fileHandle.js";
    import { data, index } from "../../globalState/data";
    let d;
    data.subscribe((data) => (d = data));
</script>

<label for="openFile">Open Existing File</label>
<input
    type="file"
    id="openFile"
    accept=".records"
    bind:this={fileInput}
    on:change={(e) => fileHandle(e, data, index)}
/>

<style>
    label {
        display: block;
        width: 100%;
        height: 100%;
        cursor: pointer;
        font-weight: bold;
    }
    label:focus,
    label:hover {
        transform: translateX(5px);
    }
    input {
        display: none;
    }
</style>
