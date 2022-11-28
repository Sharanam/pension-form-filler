<script>
    export let records = 0;
    export let currentRecord;
</script>

<div class="no-print center">
    <button
        on:click={() => {
            currentRecord = 0;
        }}
        disabled={currentRecord === 0}
    >
        First
    </button>
    <button
        on:click={() => {
            if (currentRecord > 0) {
                currentRecord--;
            }
        }}
        disabled={currentRecord === 0}
    >
        Previous
    </button>
    <button
        on:click={() => {
            if (currentRecord < records - 1) {
                currentRecord++;
            }
        }}
        disabled={currentRecord === records - 1}
    >
        Next
    </button>
    <button
        on:click={() => {
            currentRecord = records - 1;
        }}
        disabled={currentRecord === records - 1}
    >
        Last
    </button>
    <div>
        Current Record: {currentRecord + 1} of {records}
    </div>
</div>
