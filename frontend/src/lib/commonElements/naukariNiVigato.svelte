<script>
  // @ts-nocheck
  import { toGujarati } from "../tools/toGujarati";
  import { toString } from "../tools/toString";
  import { data } from "../globalState/data";
  import { countYMD } from "../tools/ymd";

  export let index;

  function calculator(data, i) {
    let ymd = countYMD(
      data[index].naukariNiVigato[0][i][1][0],
      data[index].naukariNiVigato[0][i][1][1]
    );

    data[index].naukariNiVigato[0][i][2] = ymd;
    data[index].naukariNiVigato[0][i][3] = ymd;

    return data;
  }
</script>

<table class="border center">
  <tr>
    <td>ક્રમ</td>
    <td>કઇ કઇ સંસ્થામા નોકરી કરી તેનુ નામ</td>
    <td>સમયગાળો તારીખ થી તારીખ</td>
    <td colspan="3">કુલ નોકરીના</td>
    <td colspan="3">પેન્શનપાત્ર નોકરીના </td>
  </tr>
  <tr>
    <td />
    <td />
    <td />

    <td> વર્ષ </td>
    <td> માસ </td>
    <td> દિવસ </td>
    <td> વર્ષ </td>
    <td> માસ </td>
    <td> દિવસ </td>
  </tr>

  {#each $data[index].naukariNiVigato[0] as tmp, i (i)}
    <tr class="member-row">
      <td>
        {toGujarati(i + 1)}
      </td>
      <td class="initial">
        <div class="no-print">
          <textarea
            rows="4"
            bind:value={$data[index].naukariNiVigato[0][i][0]}
          />
        </div>
        <span class="no-screen bolder">
          <p>
            {#if tmp[0]}
              {#each tmp[0].split("\n") as line}
                <span style="display:block">{line}</span>
              {/each}
            {/if}
          </p>
        </span>
      </td>
      <td class="initial">
        <div class="no-print">
          <div class="date">
            <input
              type="number"
              value={tmp[1][0][0]}
              on:change={(e) => {
                data.update((data) => {
                  data[index].naukariNiVigato[0][i][1][0][0] = e.target.value;
                  data = calculator(data, i);
                  return data;
                });
              }}
              placeholder="dd"
            />
            <input
              type="number"
              value={tmp[1][0][1]}
              on:change={(e) => {
                data.update((data) => {
                  data[index].naukariNiVigato[0][i][1][0][1] = e.target.value;
                  data = calculator(data, i);
                  return data;
                });
              }}
              placeholder="mm"
            />
            <input
              type="number"
              value={tmp[1][0][2]}
              on:change={(e) => {
                data.update((data) => {
                  data[index].naukariNiVigato[0][i][1][0][2] = e.target.value;
                  data = calculator(data, i);
                  return data;
                });
              }}
              placeholder="yyyy"
            />
          </div>
          <div class="date">
            <input
              type="number"
              value={tmp[1][1][0]}
              on:change={(e) => {
                data.update((data) => {
                  data[index].naukariNiVigato[0][i][1][1][0] = e.target.value;
                  data = calculator(data, i);
                  return data;
                });
              }}
              placeholder="dd"
            />
            <input
              type="number"
              value={tmp[1][1][1]}
              on:change={(e) => {
                data.update((data) => {
                  data[index].naukariNiVigato[0][i][1][1][1] = e.target.value;
                  data = calculator(data, i);
                  return data;
                });
              }}
              placeholder="mm"
            />
            <input
              type="number"
              value={tmp[1][1][2]}
              on:change={(e) => {
                data.update((data) => {
                  data[index].naukariNiVigato[0][i][1][1][2] = e.target.value;
                  data = calculator(data, i);
                  return data;
                });
              }}
              placeholder="yyyy"
            />
          </div>
          <div>
            <input
              type="text"
              bind:value={$data[index].naukariNiVigato[0][i][1][2]}
              placeholder="વયનિવૃત્તિ"
            />
          </div>
        </div>
        <p class="no-screen bolder">
          {(toString(tmp[1][0], "/") &&
            toString(tmp[1][1], "/") &&
            toString(tmp[1][0], "/") + " થી " + toString(tmp[1][1], "/")) ||
            ".".repeat(1)}
        </p>
        <p class="no-screen bolder">
          ({tmp[1][2] || "."})
        </p>
      </td>
      <td class="initial">
        <div class="no-print">
          <input
            type="number"
            bind:value={$data[index].naukariNiVigato[0][i][2][0]}
          />
        </div>
        <span class="no-screen bolder">
          {tmp[2][0] || ".".repeat(1)}
        </span>
      </td>
      <td class="initial">
        <div class="no-print">
          <input
            type="number"
            bind:value={$data[index].naukariNiVigato[0][i][2][1]}
          />
        </div>
        <span class="no-screen bolder">
          {tmp[2][1] || ".".repeat(1)}
        </span>
      </td>
      <td class="initial">
        <div class="no-print">
          <input
            type="number"
            bind:value={$data[index].naukariNiVigato[0][i][2][2]}
          />
        </div>
        <span class="no-screen bolder">
          {tmp[2][2] || ".".repeat(1)}
        </span>
      </td>

      <td class="initial">
        <div class="no-print">
          <input
            type="number"
            bind:value={$data[index].naukariNiVigato[0][i][3][0]}
          />
        </div>
        <span class="no-screen bolder">
          {tmp[3][0] || ".".repeat(1)}
        </span>
      </td>
      <td class="initial">
        <div class="no-print">
          <input
            type="number"
            bind:value={$data[index].naukariNiVigato[0][i][3][1]}
          />
        </div>
        <span class="no-screen bolder">
          {tmp[3][1] || ".".repeat(1)}
        </span>
      </td>
      <td class="initial">
        <div class="no-print">
          <input
            type="number"
            bind:value={$data[index].naukariNiVigato[0][i][3][2]}
          />
        </div>
        <span class="no-screen bolder">
          {tmp[3][2] || ".".repeat(1)}
        </span>
      </td>
    </tr>
  {/each}
  <tr class="no-print">
    <td colspan="9">
      <button
        on:click={() => {
          $data[index].naukariNiVigato[0] = [
            ...$data[index].naukariNiVigato[0],
            ["", [["", "", ""], ["", "", ""], ""], ["", "", ""], ["", "", ""]],
          ];
        }}
        class="positive"
      >
        Add Row
      </button>
    </td>
  </tr>
  <tr>
    <td />
    <td />
    <td> કુલ નોકરી </td>
    <td>
      <div class="no-print">
        <input
          type="number"
          bind:value={$data[index].naukariNiVigato[1][0][0]}
        />
      </div>
      <span class=" bolder">
        {$data[index].naukariNiVigato[1][0][0] || ".".repeat(1)}
      </span>
    </td>
    <td>
      <div class="no-print">
        <input
          type="number"
          bind:value={$data[index].naukariNiVigato[1][0][1]}
        />
      </div>
      <span class=" bolder">
        {$data[index].naukariNiVigato[1][0][1] || ".".repeat(1)}
      </span>
    </td>
    <td> // to be continued </td>
  </tr>
</table>

<style>
  table {
    background-color: white;
    color: black;
    width: 100%;
  }
  table:hover {
    border: 2px solid darkgoldenrod;
    box-shadow: 0 0 10px darkgoldenrod;
  }

  input:focus,
  .member-row:hover > .initial > div > div > input,
  .member-row:hover textarea,
  .member-row:hover > .initial > div > textarea {
    border: 1px solid darkmagenta;
    color: aliceblue;
    background: darkmagenta;
  }

  .initial input {
    width: min(80%, 200px);
    display: initial;
    border: 0;
    margin: 0;
    border-radius: 0;
  }
  .initial {
    padding: 0;
  }
  div.date > input {
    border-radius: 0;
    max-width: max(30%, 50px);
  }
  div.date {
    display: inline;
    background-color: white;
    padding-block: 0.5em;
  }
</style>
