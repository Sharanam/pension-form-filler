<script>
    // @ts-nocheck

    // get json file
    let fileInput;
    export let data, index;
    function handleFileSelect(evt) {
        let files = evt.target.files; // FileList object
        let file = files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            let text = reader.result;
            try {
                data = JSON.parse(text);
                index = 0;
            } catch (err) {
                alert("Invalid JSON file");
            }
        };
        reader.readAsText(file);
    }
</script>

<div class="no-print">
    <label for="fileImport"> Import JSON file: </label>
    <input
        type="file"
        name="fileImport"
        bind:this={fileInput}
        on:change={handleFileSelect}
    />
</div>
