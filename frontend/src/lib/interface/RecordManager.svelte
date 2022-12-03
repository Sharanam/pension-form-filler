<script>
    import { deleteRecord } from "../tools/deleteRecord";
    import { initialRecord } from "../tools/initialRecord";

    export let file = [];
    export let currentRecord;
</script>

<div class="center no-print">
    <button
        on:click={() => {
            file = [...file, initialRecord()];
            currentRecord = file.length - 1;
        }}
        class="positive"
    >
        Add New Record
    </button>
    <button
        on:click={() => {
            [file, currentRecord] = deleteRecord(file, currentRecord);
        }}
        disabled={file.length === 1}
        class="negative"
    >
        Delete Current Record
    </button>
</div>
