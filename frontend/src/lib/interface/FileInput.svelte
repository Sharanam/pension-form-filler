<script>
    // @ts-nocheck

    // get json file
    let fileInput;
    export let data, index;
    function handleFileSelect(evt, options = {}) {
        let files = evt.target.files;
        let file = files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            let text = reader.result;
            try {
                if (options.append) {
                    data = [...data, ...JSON.parse(text)];
                } else {
                    data = JSON.parse(text);
                }
                index = 0;
            } catch (err) {
                alert("Invalid JSON file");
            }
        };
        reader.readAsText(file);
    }
</script>

<div class="no-print">
    <label for="fileImport"> Import pension-records file: </label>
    <input
        type="file"
        name="fileImport"
        bind:this={fileInput}
        on:change={handleFileSelect}
    />
    <label for="fileAppend"> Append pension-records file: </label>
    <input
        type="file"
        name="fileAppend"
        bind:this={fileInput}
        on:change={(e) => handleFileSelect(e, { append: true })}
    />
</div>
