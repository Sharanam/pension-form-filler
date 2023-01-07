<script>
  export let index;
  import PensionPrakar from "../../commonElements/PensionPrakar.svelte";
  import { data } from "../../globalState/data";
  import LetterBox from "./LetterBox.svelte";
  import LocalFooter from "./LocalFooter.svelte";
  import { ofFifteen } from "../../tools/arrayOfFifteen";
</script>

<div class="page-break-before">
  <div class="center" style="margin-top: 10px;">
    <h2>પેન્શન કેસ</h2>
    <h3>ભાગ - ૨</h3>
    <p>
      નિવૃત થનાર કર્મચારીની વડાએ પેન્શન અને પ્રોવિડન્ટ ફંડ નિયામકશ્રી ને પૂરી
      પાડવાની વિગતો
    </p>
  </div>
  <table style="width: 100%;">
    <tr>
      <td class="align-top">૧</td>
      <td class="align-top" colspan="2">
        <span style="display: block"> સરકારી કર્મચારીનું નામ : </span>
        <span style="display: block">
          (સેવાપોથીમાં નોંધ્યા પ્રમાણે જો સુધારેલ હોય તો ગેઝેટનો આધાર રાખવો)
        </span>
        <span style="display: block"> અંગ્રેજીમાં : (in block letters)</span>
      </td>
      <td class="align-top">
        <span style="display:block"> અટક </span>
        <b>{$data[index].karmchariNaam[0][1] || ".".repeat(20)}</b>
        <span style="display:block;" class="capitalized">
          <b>{$data[index].karmchariNaam[1][1] || ".".repeat(20)}</b>
        </span>
      </td>
      <td class="align-top">
        <span style="display:block"> નામ </span>
        <b>{$data[index].karmchariNaam[0][2] || ".".repeat(20)}</b>
        <span style="display:block;" class="capitalized">
          <b>{$data[index].karmchariNaam[1][2] || ".".repeat(20)}</b>
        </span>
      </td>
      <td class="align-top">
        <span style="display:block"> પિતા/ પતિનું નામ </span>
        <b>{$data[index].karmchariNaam[0][3] || ".".repeat(20)}</b>
        <span style="display:block;" class="capitalized">
          <b>{$data[index].karmchariNaam[1][3] || ".".repeat(20)}</b>
        </span>
      </td>
    </tr>
    <tr>
      <td class="align-top" colspan="7">
        {#each ["Surname", "First Name", "Second Name"] as title, k}
          <div class="block-letters">
            <div>
              <span>
                {title}
              </span>
              {#each ofFifteen($data[index].karmchariNaam[1][k + 1].split("") || []) as i}
                <span>
                  {i || " "}
                </span>
              {/each}
            </div>
          </div>
        {/each}
      </td>
    </tr>
    <tr>
      <td class="align-top">૨</td>
      <td class="align-top">
        <p>હોદ્દો:</p>
        <p>અંગ્રેજીમાં:</p>
      </td>
      <td class="align-top" colspan="5">
        <p>
          {$data[index].karmchariHoddo[1] || ".".repeat(44)}
        </p>
        <p class="capitalized">
          {$data[index].karmchariHoddo[0] || ".".repeat(44)}
        </p>
      </td>
    </tr>
    <tr>
      <td class="align-top">૩</td>
      <td class="align-top">જન્મ તારીખ:</td>
      <td class="align-top" colspan="5">
        <LetterBox arr={$data[index].janmTarikh} />
      </td>
    </tr>
    <tr>
      <td class="align-top">૪</td>
      <td class="align-top"> નોકરીમા દાખલ તારીખ: </td>
      <td class="align-top" colspan="5">
        <LetterBox arr={$data[index].nokriDakhalTarikh} />
      </td>
    </tr>
    <tr>
      <td class="align-top">૫</td>
      <td class="align-top"> સત્રાંત નિવૃત્તિની તારીખ: </td>
      <td class="align-top" colspan="5">
        <LetterBox arr={$data[index].nivrutiTarikh} />
      </td>
    </tr>
    <tr>
      <td class="align-top">૬</td>
      <td class="align-top" colspan="7">
        <PensionPrakar i={index} />
      </td>
    </tr>
    <tr>
      <td class="align-top" colspan="4">
        <p>
          ૨૦ વર્ષની નોકરી બાદ સ્વૈચ્છિક નિવૃતી હોય તો નોશનલ નિવૃતિ ની તારીખ:
        </p>
        <p>(ગુ. મુ. સેવા પેન્શન નિયમો -૨૦૦૨ ના નિયમ ૪૮)</p>
      </td>
      <td class="align-top" colspan="5">
        <LetterBox arr={$data[index].notionalNivrutiTarikh[0]} />
      </td>
    </tr>
    <tr>
      <td class="align-top" colspan="4">
        <p class="center"><u> અથવા </u></p>
      </td>
    </tr>
    <tr>
      <td class="align-top" colspan="4">
        <p>
          ૨૫ વર્ષની નોકરી બાદ સ્વૈચ્છિક નિવૃતી હોય તો નોશનલ નિવૃતિ ની તારીખ:
        </p>
        <p>(ગુ. મુ. સેવા પેન્શન નિયમો -૨૦૦૨ ના નિયમ ૪૯)</p>
      </td>
      <td class="align-top" colspan="5">
        <LetterBox arr={$data[index].notionalNivrutiTarikh[1]} />
      </td>
    </tr>
  </table>
  <LocalFooter />
</div>
