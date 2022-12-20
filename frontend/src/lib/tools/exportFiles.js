// @ts-nocheck
export function exportJSON(file) {
    let name = prompt(
        "Enter a name for the file",
        new Date().toDateString().replace(/[-:, ]/g, "") + '.pension.records'
    )
    if (name === null) return
    name = name || `${new Date().toDateString().replace(/[-:, ]/g,"")}.pension.records`

    let dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(file));
    let downloadAnchorNode =
        document.createElement("a");
    downloadAnchorNode.setAttribute(
        "href",
        dataStr
    );
    downloadAnchorNode.setAttribute(
        "download",
        name
    );
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}


export function exportCSV(file) {
    alert("This feature is not available yet");
}