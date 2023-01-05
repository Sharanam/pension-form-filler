<script>
  // @ts-nocheck

  import { data } from "../../globalState/data";
  import { toString } from "../../tools/toString";
  import LocalFooter from "./LocalFooter.svelte";
  export let index = 0;
  $: nm =
    toString($data[index]?.karmchariNaam[0], " ") ||
    toString($data[index]?.karmchariNaam[1], " ") ||
    ".".repeat(50);
  $: nvrtt = toString($data[index].nivrutiTarikh, "/") || ".".repeat(20);
</script>

<div class="page-break-before">
  <table style="width: 100%;">
    <tr>
      <td class="align-top"> ૨૯. </td>
      <td>
        <p>ખાતાકીય તપાસ પ્રમાણપત્ર: (ગુ.મુ.સેવા(પેન્શન) નિયમોના નિયમ - ૧૩૯ )</p>
        આથી સમગ્રપણે ખાતરી કરી પ્રમાણિત કરવામાં આવે છે કે {nm}
        ની સામે આજની તારીખે (તા:
        {toString($data[index].nokriDakhalTarikh, "/") || ".".repeat(20)}
        થી તા:
        {nvrtt}) કોઈ ખાતાકીય તપાસ બાકી નથી
      </td>
    </tr>
  </table>
  <LocalFooter {index} />
  <table style="width: 100%;">
    <tr>
      <td class="align-top"> ૩૦. </td>
      <td>
        <p>
          પેન્શન પાત્ર નોકરી અંગે નું પ્રમાણપત્ર: (ગુ.મુ.સેવા(પેન્શન) નિયમોના
          નિયમ - ૧૩૧)
        </p>

        આથી પ્રમાણિત કરવામાં આવે છે કે
        {nm}
        તારીખ
        {nvrtt}
        ના રોજ વયનિવૃત થનાર છે, તેમની સેવાપોથી ચકાસણી કરતાં તેમની સમગ્ર નોકરી દરમ્યાનની
        ત્રણ માસથી વધુ સમયની કોઈપણ જાતની સેવાતૂટ બાદ કરવાની રહી જતી નથી તેમજ ફરજ
        મોકૂફી પેન્શનપાત્ર ન ગણેલ સમય બાદ કરવાનો રહીજતો નથી તેમજ તેમની ૩૬ માસ કરતાં
        વધુ સમયની અસાધારણ રજા બાદ કરવાની રહી જતી નથી તેમજ સમગ્ર નોકરીદરમ્યાનનો તેમની
        રજાના હિસાબ પૂર્ણ કરેલ છે અને છેલ્લા બે વર્ષની સેવાની ચકાસણી કરી સેવાપોથીમાં
        આ પ્રમાણપત્ર આપવામાં આવેલ છે.
      </td>
    </tr>
  </table>
  <LocalFooter {index} />
  <table style="width: 100%;">
    <tr>
      <td class="align-top">૩૧. </td>
      <td>
        <p>
          ગુ.મુ.સેવા(પેન્શન) નિયમોના નિયમ –૯(૬૦) અન્વયે મળેલ સત્તાની રૂએ થી શ્રી {nm}
          હોદ્દો: {$data[index].karmchariHoddo[1] || ".".repeat(30)}
          પેન્શન મંજૂર કરું છું.
        </p>
      </td>
    </tr>
  </table>
  <LocalFooter {index} />
</div>
