<script>
  // @ts-nocheck

  import { data, index } from "../../globalState/data";
  import ShowAllRecords from "../../interface/recordManager/ShowAllRecords.svelte";

  export let file = [];
  let show = window.localStorage.getItem("showRecordManager") === "true";
  let fontSize = window.localStorage.getItem("fontSize") || 1;
</script>

<div class="no-print">
  {#if show}
    <div class="hideable" style="padding: 1rem;">
      <div class="outside">
        <button
          class="box-controller"
          on:click={() => {
            show = false;
            window.localStorage.setItem("showRecordManager", false);
          }}
        >
          <!-- Close Sign In Unicode which looks like "X" -->
          &#x2715;
        </button>
      </div>
      {#if file}
        <div class="one-line">
          <label for="font-size">Font Size</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={fontSize}
            on:change={(e) => {
              window.localStorage.setItem("fontSize", e.target.value);
              document.documentElement.style.fontSize = e.target.value + "rem";
              fontSize = e.target.value;
            }}
            id="font-size"
          />
          <button
            on:click={() => {
              window.localStorage.setItem("fontSize", 1);
              document.documentElement.style.fontSize = "1rem";
              fontSize = 1;
            }}
            disabled={fontSize == 1}
            class="easy-button"
          >
            Default
          </button>
        </div>
        <ShowAllRecords />
        <!-- record navigator starts -->
        <div class=" center">
          <button
            class="navigator-button"
            on:click={() => {
              index.set(0);
            }}
            disabled={$index === 0}
          >
            |&lt;
          </button>
          <button
            class="navigator-button"
            on:click={() => {
              if ($index > 0) {
                index.update((n) => n - 1);
              }
            }}
            disabled={$index === 0}
          >
            &lt;
          </button>

          <div style="display: inline;">
            Record: {$index + 1}/{$data.length}
          </div>
          <button
            class="navigator-button"
            on:click={() => {
              if ($index < $data.length - 1) {
                index.update((n) => n + 1);
              }
            }}
            disabled={$index === $data.length - 1}
          >
            &gt;
          </button>
          <button
            class="navigator-button"
            on:click={() => {
              index.set($data.length - 1);
            }}
            disabled={$index === $data.length - 1}
          >
            &gt;|
          </button>
        </div>
      {/if}
    </div>
  {:else}
    <button
      class="hideable box-controller"
      on:click={() => {
        show = true;
        window.localStorage.setItem("showRecordManager", true);
      }}
    >
      &lt;&lt;
    </button>
  {/if}
</div>

<style>
  .hideable {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 2;
    background-color: rgb(39 47 84 / 0.8);
    transition: transform 0.5s;
    transform: translateX(0);
  }
  .hideable:focus,
  .hideable:hover {
    background-color: rgb(39 47 84 / 1);
  }
  div.outside {
    position: relative;
    height: 25px;
  }
  div.outside > button {
    position: absolute;
    right: 0;
    /* bottom: calc(100% + 0.7rem); */
    bottom: 0%;
    z-index: 2;
    background-color: rgb(194 33 33 / 1);
  }
  button.box-controller {
    border: 0;
    background-color: rgb(39 47 84 / 1);
    color: white;
    padding: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 0;
  }
  .navigator-button {
    margin: 0;
    border-radius: 0;
    font-size: 1rem;
  }
  .easy-button {
    padding: 0.1rem;
    border-radius: 0;
    margin: 0;
  }
  .one-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
