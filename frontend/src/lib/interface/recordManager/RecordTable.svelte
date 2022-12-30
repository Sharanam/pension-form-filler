<script>
  import { toString } from "../../tools/toString";

  import { data, index } from "../../globalState/data";
  import { pensionPrakar } from "../../tools/constantValues";
</script>

<div style="max-height: 50vh;overflow-y: auto;" class="no-print">
  {#if $data.length > 1}
    <table>
      <thead>
        <th> ક્રમાંક </th>
        <th>કર્મચારીનું નામ</th>
        <th>કર્મચારીનો હોદ્દો</th>
        <th>નિવૃત્તિનો પ્રકાર</th>
        <th>નિવૃત્તિની તારીખ</th>
      </thead>
      <tbody>
        {#each $data as record, i}
          <tr class:active={i === $index} on:click={() => index.set(i)}>
            <td class="center">{i + 1}</td>
            <td
              >{toString(
                record.karmchariNaam[0] || record.karmchariNaam[1],
                " "
              ) || ""}</td
            >
            <td class="center"
              >{record.karmchariHoddo[0] || record.karmchariHoddo[1] || ""}</td
            >
            <td class="center">
              {toString(
                record.nivrutiPrakar.map((p) => pensionPrakar[p]),
                ", "
              )}
            </td>
            <td class="center">
              {toString(record.nivrutiTarikh, "/") || ""}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }
  table,
  th,
  td {
    border: 1px solid black;
  }
  td {
    padding: 0.5rem;
    cursor: pointer;
  }
  .active {
    background-color: darkslategray;
    color: white;
  }
  tr:hover {
    background-color: lightblue;
    color: black;
  }
  .active:hover {
    background-color: darkslateblue;
    color: white;
  }
</style>
