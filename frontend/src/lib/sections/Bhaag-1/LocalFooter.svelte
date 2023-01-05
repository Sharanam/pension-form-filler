<script>
  import KacheriSeal from "../../commonElements/kacheriSeal.svelte";
  import { data } from "../../globalState/data";
  export let index;
  import { toString } from "../../tools/toString";
</script>

<table class="layed-out">
  <tr>
    <td>
      <KacheriSeal />
      <p>સ્થળ: વલ્લભ વિદ્યાનગર</p>
      <p>તારીખ : {toString($data[index].mudikrutTarikh, "/")}</p>
    </td>
    <td class="center">
      <p>કુલસચિવ</p>
      <p>સરદાર પટેલ યુનિવર્સિટી</p>
      <p>વલ્લભ વિદ્યાનગર</p>
    </td>
    <td>
      <p>કર્મચારીની સહી</p>
      <p>
        નામ: {toString($data[index]?.karmchariNaam[0], " ") ||
          toString($data[index]?.karmchariNaam[1], " ") ||
          ".".repeat(30)}
      </p>
      <p>
        હોદ્દો: {$data[index].karmchariHoddo[1] || ".".repeat(30)}
      </p>
    </td>
  </tr>
</table>

<style>
  td {
    width: max-content;
  }
  table {
    margin-top: 1.5rem;
  }
</style>
