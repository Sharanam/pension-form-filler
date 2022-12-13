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
    <div class="button">
        <label for="fileImport"> Import new pension-records file: </label>
        <span>Note: This will overwrite any existing records.</span>
        <input
            type="file"
            name="fileImport"
            bind:this={fileInput}
            on:change={handleFileSelect}
        />
    </div>
    <div class="button">
        <label for="fileAppend"> Append pension-records file: </label>
        <span>
            Note: This will add new records at the end of the existing records.
        </span>
        <input
            type="file"
            name="fileAppend"
            bind:this={fileInput}
            on:change={(e) => handleFileSelect(e, { append: true })}
        />
    </div>
</div>

<style>
    .button {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        padding: 1rem;
        background-color: lightskyblue;
    }
    label {
        font-weight: bold;
    }
</style>
