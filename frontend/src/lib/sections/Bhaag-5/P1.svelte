<script>
  import NaukariNiVigato from "../../commonElements/naukariNiVigato.svelte";
  export let index;
  import { data } from "../../globalState/data";
  import { toString } from "../../tools/toString";
  import LocalFooter from "./LocalFooter.svelte";
  $: nm =
    toString($data[index]?.karmchariNaam[0], " ") ||
    toString($data[index]?.karmchariNaam[1], " ") ||
    "શ્રી " + ".".repeat(50);
</script>

<div class="page-break-before">
  <div class="center" style="margin-top: 10px;">
    <h2>પેન્શન પેપર્સ</h2>
    <h3>ભાગ - ૫</h3>
    <p>નિવૃત્ત થતાં બિન સરકારી કર્મચારીઓ માટે ભરવાનું ફોર્મ</p>
  </div>
  <table style="width: 100%;">
    <tr>
      <td> રવાના : </td>
      <td> ક્રમાંક : </td>
    </tr>
    <tr>
      <td />
      <td> તારીખ : </td>
    </tr>
  </table>
  <div class="no-spacing">
    <p>પ્રતિ</p>
    <p>નિયામકશ્રી,</p>
    <p>પેન્શન અને પ્રોવિડન્ટ ફંડ,</p>
    <p>વિમા અને લેખા ભવન, ડૉ. જીવરાજ મહેતા ભવન,</p>
    <p>સેક્ટર-૧૦-બી, ગાંધીનગર.</p>
  </div>
  <div class="center">
    <p>
      વિષય: બિનસરકારી કર્મચારી <b>{nm}</b> હોદ્દો
      <b
        >{$data[index]?.karmchariHoddo[0] ||
          $data[index]?.karmchariHoddo[1] ||
          ".".repeat(50)}</b
      > નોકરીનું સ્થળ: સરદાર પટેલ યુનિવર્સિટી, વલ્લભ વિદ્યાનગરના પેન્શન પેપર્સ મોકલવા
      બાબત.
    </p>
  </div>
  <div>
    <p>માનનીયશ્રી,</p>
    <p class="indent">
      જયભારત સહ ઉપરોક્ત બાબતે આ સાથે સરદાર પટેલ યુનિવર્સિટી, વલ્લભ વિદ્યાનગરના
      હોદ્દો <b
        >{$data[index]?.karmchariHoddo[0] ||
          $data[index]?.karmchariHoddo[1] ||
          ".".repeat(50)}</b
      >, <b>{nm}</b>
      ના પેન્શન પેપર્સ તથા અસલ સેવાપોથી તૈયાર કરી નીચેની વિગતે રજૂ કરવામાં આવે છે
      તો નિવૃત્તિના લાભો અધિકૃત કરવા વિંનતી છે.
    </p>
  </div>
  <table>
    <td class="align-top"> ૧ </td>
    <td>
      <b>{nm}</b>
      એ તારીખ:
      <b>{toString($data[index].nokriDakhalTarikh, "/") || ".".repeat(20)}</b>
      થી તારીખ:
      <b>{toString($data[index].nivrutiTarikh, "/") || ".".repeat(20)} </b>
      સુધીની કરેલ નોકરીની તારીખ નીચે મુજબ છે.
    </td>
  </table>
  <NaukariNiVigato {index} />
  <LocalFooter />
</div>
