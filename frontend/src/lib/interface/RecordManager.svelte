<script>
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
            if (confirm("Are you sure you want to delete this record?")) {
                file = file.filter((_, i) => i !== currentRecord);
                currentRecord = currentRecord - 1 < 0 ? 0 : currentRecord - 1;
            }
        }}
        disabled={file.length === 1}
        class="negative"
    >
        Delete This Record
    </button>
</div>
