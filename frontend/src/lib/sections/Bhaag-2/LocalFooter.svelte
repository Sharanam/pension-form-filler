<script>
  import KacheriSeal from "../../commonElements/kacheriSeal.svelte";
  import { toString } from "../../tools/toString";
</script>

<table class="layed-out">
  <tr>
    <td>
      <KacheriSeal />
      <p>
        સ્થળ:
        <b> વલ્લભ વિદ્યાનગર </b>
      </p>
      <p>
        તારીખ :
        <b>
          {toString(new Date().toLocaleDateString("en-GB").split("/"), "/")}
        </b>
      </p>
    </td>
    <td class="center">
      <p>કુલસચિવ</p>
      <p>સરદાર પટેલ યુનિવર્સિટી</p>
      <p>વલ્લભ વિદ્યાનગર</p>
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
