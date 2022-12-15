<script>
    import AppendExistingFile from "./AppendExistingFile.svelte";
    import OpenExistingFile from "./OpenExistingFile.svelte";
    import { data, preferences } from "../../globalState/data";
    let file;
    data.subscribe((data) => (file = data));
    export let showAll = false;
    preferences.subscribe((preferences) => (showAll = preferences.showAll));
</script>

<header class="no-print">
    <img src="/header-spu-logo-source-logo-white-01-1.png" alt="SPU Logo" />
    <nav>
        <ul>
            <li>
                <button>File</button>
                <ul class="submenu">
                    <li>
                        <OpenExistingFile />
                    </li>
                    <li>
                        <AppendExistingFile />
                    </li>
                    <hr />
                    <li>
                        <button
                            on:click={() => {
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
                                    `${new Date()
                                        .toDateString()
                                        .replace(
                                            /[-:, ]/g,
                                            ""
                                        )}.pension.records`
                                );
                                document.body.appendChild(downloadAnchorNode); // required for firefox
                                downloadAnchorNode.click();
                                downloadAnchorNode.remove();
                            }}
                        >
                            Export these records
                        </button>
                    </li>
                    <li>
                        <button
                            on:click={() => {
                                window.print();
                            }}
                        >
                            {showAll
                                ? "Print all records"
                                : "Print current record"}
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</header>

<style>
    @media screen {
        header {
            display: flex;
        }
    }
    header {
        background-color: rgba(39, 47, 84, 1);
        color: #ffffff;
        padding: 0 0.5cm;
        justify-content: space-between;
        position: sticky;
        top: 0;
        z-index: 1;
    }
    header > img {
        width: min(100%, 10cm);
    }
    ul {
        background-color: rgba(39, 47, 84, 1);
        list-style-type: none;
    }
    nav {
        cursor: pointer;
    }
    /* nav buttons look ugly, I want them to be in vertically centered */
    nav > ul {
        display: flex;
        align-items: center;
        height: 100%;
    }

    nav > ul > li {
        display: inline-block;
        padding: 0.5cm;
        position: relative;
    }
    ul.submenu {
        position: absolute;
        background-color: rgba(39, 47, 84, 1);
        width: max-content;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
        z-index: 2;
        top: 100%;
        right: 0;
        margin: 0;
        padding: 0;
        display: none;
    }

    ul.submenu > li {
        padding: 0.5cm;
        text-transform: capitalize;
    }
    ul.submenu > li:hover,
    ul.submenu > li:focus ul.submenu > li:active {
        background-color: rgba(0, 0, 0, 0.5);
    }
    nav > ul > li:hover > ul.submenu,
    nav > ul > li:focus > ul.submenu,
    nav > ul > li:active > ul.submenu,
    nav > ul > li:focus-within > ul.submenu {
        display: block;
    }
    button {
        background-color: unset;
        border: unset;
        color: currentColor;
        outline: unset;
        cursor: pointer;
        margin: 0;
        text-align: inherit;
        font: inherit;
        font-weight: bold;
        padding: 0;
    }
    ul.submenu > li > button:focus,
    ul.submenu > li > button:hover {
        transform: translateX(5px);
    }
</style>
