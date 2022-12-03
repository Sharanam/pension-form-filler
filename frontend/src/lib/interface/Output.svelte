<script>
    export let file;
</script>

<div class="no-print">
    <button
        on:click={() => {
            window.print();
        }}
    >
        Print This Record
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
</style>
