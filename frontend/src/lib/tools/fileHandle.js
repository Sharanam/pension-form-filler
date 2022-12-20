// @ts-nocheck
export default function handleFileSelect(evt, data, index, options = {}) {
    let files = evt.target.files;
    let file = files[0];
    let reader = new FileReader();
    reader.onload = function(e) {
        let text = reader.result;
        try {
            if (options.append) {
                data.set([...options.previous, ...JSON.parse(text)]);
            } else {
                data.set(JSON.parse(text));
            }
            index.set(0);
        } catch (err) {
            alert("Invalid JSON file");
        }
    };
    reader.readAsText(file);
}