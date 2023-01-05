<script>
  // @ts-nocheck
  import { toGujarati } from "../tools/toGujarati";
  import { toString } from "../tools/toString";
  import { data } from "../globalState/data";

  export let index = 0;
  function updateAge(i) {
    let [dd, mm, yyyy] = $data[index].niyuktiTable[i][2][1];
    if (dd && mm && yyyy) {
      let dob = new Date(yyyy, mm - 1, dd);
      let today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      let m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      $data[index].niyuktiTable[i][2][0] = age;
    }
  }
</script>

<table class="border">
  <tr>
    <td>ક્રમ</td>
    <td>કઇ કઇ સંસ્થામા નોકરી કરી તેનુ નામ</td>
    <td>સમયગાળો તારીખ થી તારીખ</td>
    <td colspan="3">કુલ નોકરીના</td>
    <td colspan="3">પેન્શનપાત્ર કરીના </td>
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

  {#each $data[index].naukariNiVigato as tmp, i (i)}
    <tr class="member-row">
      <td>
        {toGujarati(i + 1)}
      </td>
      <td class="initial">
        <div class="no-print">
          <textarea
            rows="4"
            value={tmp[0]}
            on:change={(e) => {
              $data[index].naukariNiVigato[i][0] = e.target.value || "";
            }}
          />
        </div>
        <span class="">
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
                $data[index].naukariNiVigato[i][1][0][0] = e.target.value;
              }}
              placeholder="dd"
            />
            <input
              type="number"
              value={tmp[1][0][1]}
              on:change={(e) => {
                $data[index].naukariNiVigato[i][1][0][1] = e.target.value;
              }}
              placeholder="mm"
            />
            <input
              type="number"
              value={tmp[1][0][2]}
              on:change={(e) => {
                $data[index].naukariNiVigato[i][1][0][2] = e.target.value;
              }}
              placeholder="yyyy"
            />
          </div>
          <div class="date">
            <input
              type="number"
              value={tmp[1][1][0]}
              on:change={(e) => {
                $data[index].naukariNiVigato[i][1][1][0] = e.target.value;
              }}
              placeholder="dd"
            />
            <input
              type="number"
              value={tmp[1][1][1]}
              on:change={(e) => {
                $data[index].naukariNiVigato[i][1][1][1] = e.target.value;
              }}
              placeholder="mm"
            />
            <input
              type="number"
              value={tmp[1][1][2]}
              on:change={(e) => {
                $data[index].naukariNiVigato[i][1][1][2] = e.target.value;
              }}
              placeholder="yyyy"
            />
          </div>
        </div>
        <span class="">
          {(toString(tmp[1][0], "/") &&
            toString(tmp[1][1], "/") &&
            toString(tmp[1][0], "/") + " થી " + toString(tmp[1][1], "/")) ||
            ".".repeat(1)}
        </span>
      </td>
      <td class="initial">varsh</td>
      <td class="initial">maas</td>
      <td class="initial">divas</td>

      <td class="initial">varsh</td>
      <td class="initial">maas</td>
      <td class="initial">divas</td>
    </tr>
  {/each}
  <tr class="no-print">
    <td colspan="9">
      <button
        on:click={() => {
          $data[index].naukariNiVigato = [
            ...$data[index].naukariNiVigato,
            ["", "", ["", "", ""], ["", "", ""]],
          ];
        }}
        class="positive"
      >
        Add Row
      </button>
    </td>
  </tr>

  કુલ
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
