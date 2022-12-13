<script>
    export let file, showAll;
</script>

<div class="no-print output">
    <div
        style="
        display: flex;
        justify-content: space-between;
        align-items: center;
    "
    >
        <input
            type="checkbox"
            bind:checked={showAll}
            id="showAll"
            name="showAll"
            value="showAll"
        />
        <label for="showAll">Show all records</label>
    </div>

    <button
        on:click={() => {
            window.print();
        }}
    >
        {showAll ? "Print all records" : "Print current record"}
    </button>

    <button
        on:click={() => {
            let dataStr =
                "data:text/json;charset=utf-8," +
                encodeURIComponent(JSON.stringify(file));
            let downloadAnchorNode = document.createElement("a");
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute(
                "download",
                `${new Date()
                    .toDateString()
                    .replace(/[-:, ]/g, "")}.pension.records`
            );
            document.body.appendChild(downloadAnchorNode); // required for firefox
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        }}
    >
        Export pension-records
    </button>
</div>

<style>
    div {
        width: fit-content;
        margin: auto;
    }
    div.output {
        background-color: lightpink;
        width: 100%;
        text-align: center;
        padding: 1rem 0;
        margin: 1rem 0;
    }
</style>
