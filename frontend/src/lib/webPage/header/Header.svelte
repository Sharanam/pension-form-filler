<script>
  // @ts-nocheck

  import AppendExistingFile from "./AppendExistingFile.svelte";
  import OpenExistingFile from "./OpenExistingFile.svelte";
  import { data, preferences, index } from "../../globalState/data";
  import { exportCSV, exportJSON } from "../../tools/exportFiles";
  import { initialRecord } from "../../tools/initialRecord";

  export let showAll = false,
    processing = null;
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
                exportJSON($data);
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
              {showAll ? "Print all records" : "Print current record"}

              (Ctrl + P)
            </button>
          </li>
          <hr />
          <li>
            <button
              on:click={() => {
                if (
                  confirm(
                    "Are you sure you want to start a new file? All unsaved changes will be lost."
                  )
                )
                  processing = "Creating New Data File";
                data.set([initialRecord()]);
                index.set(0);
                setTimeout(() => {
                  processing = null;
                }, 200);
              }}
            >
              New file
            </button>
          </li>
          <li>
            <button
              on:click={() => {
                exportCSV($data);
              }}
            >
              Export summary in CSV File
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
    font: inherit;
    font-size: 1.2em;
  }
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
    padding: 0;
    font: inherit;
  }
  ul.submenu > li > button:focus,
  ul.submenu > li > button:hover {
    transform: translateX(5px);
  }
</style>
