<script>
  // @ts-nocheck

  import NiyuktiTable from "../../commonElements/NiyuktiTable.svelte";
  import { data } from "../../globalState/data";
  import { ofFifteen } from "../../tools/arrayOfFifteen";
  import { toGujarati } from "../../tools/toGujarati";
  import { toString } from "../../tools/toString";
  import LocalFooter from "./LocalFooter.svelte";
  export let index;
</script>

<div class="page-break-before">
  <table style="width: 100%;" class="layed-out">
    <tr>
      <td class="align-top"> ૧૬. </td>
      <td colspan="9">
        નિવૃત્તિ બાદ અવસાન થતાં કુટુંબ પેન્શનને પાત્ર
        <span class={toString($data[index].paatrta) == "પત્ની" && "bolder"}>
          પત્ની
        </span>
        /
        <span class={toString($data[index].paatrta) == "પતિ" && "bolder"}>
          પતિ
        </span>
        /
        <span class={toString($data[index].paatrta) == "સંતાન" && "bolder"}>
          સંતાન
        </span>
        /
        <span class={toString($data[index].paatrta) == "માતા" && "bolder"}>
          માતા
        </span>
        /
        <span class={toString($data[index].paatrta) == "પિતા" && "bolder"}>
          પિતા
        </span>નું નામ :
        <p>
          (ગુ.મુ.સેવા (પેન્શન) નિયમો -૨૦૦૨ના નિયમ -૯૧ (૫) નિયમ -૯૨ ની શરતો
          પરિપૂર્ણ થતી હોય તો)
        </p>
      </td>
    </tr>
    <tr>
      <td />
      <td colspan="2">
        {toString($data[index].paatrta)}નું નામ (ગુજરાતીમાં):
      </td>
      <td colspan="2">
        <span style="display:block"> અટક </span>
        <b>{$data[index].paatrataNaam[0][0] || ".".repeat(20)}</b>
      </td>
      <td colspan="2">
        <span style="display:block"> નામ </span>
        <b>{$data[index].paatrataNaam[0][1] || ".".repeat(20)}</b>
      </td>
      <td colspan="2">
        <span style="display:block"> પિતા/ પતિનું નામ </span>
        <b>{$data[index].paatrataNaam[0][2] || ".".repeat(20)}</b>
      </td>
    </tr>
    <tr>
      <td />
      <td colspan="2"> અંગ્રેજીમાં: </td>
      <td colspan="2">
        <b>{$data[index].paatrataNaam[1][0] || ".".repeat(20)}</b>
      </td>
      <td colspan="2">
        <b>{$data[index].paatrataNaam[1][1] || ".".repeat(20)}</b>
      </td>
      <td colspan="2">
        <b>{$data[index].paatrataNaam[1][2] || ".".repeat(20)}</b>
      </td>
    </tr>
    <tr>
      <td colspan="7">
        {#each ["Surname", "First Name", "Second Name"] as title, k}
          <div class="block-letters">
            <div>
              <span>
                {title}
              </span>
              {#each ofFifteen($data[index].paatrataNaam[1][k].split("") || []) as i}
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
      <td class="align-top"> ૧૭. </td>
      <td colspan="7">
        <p>
          કર્મચારી પેન્શનનું મુડીકૃત રૂપાંતર માંગતા હોય તો માંગણી કર્યાની અરજી
          તારીખ : {toGujarati(
            toString($data[index].mudikrutTarikh, "/") || ".".repeat(25)
          )} મુડીકૃત રૂપાંતર માટેના ટકા:
        </p>
        <p>(મહતમ ૪૦ ટકા, ન્યાયિક સેવાના અધિકારી માટે ૫૦ ટકા)</p>

        <p>ગુ .મુ.સેવા (પેન્શન) નિયમો - ૨૦૦૨ના નિયમ -૯૬ થી ૧૨૩</p>
      </td>
      <td class="center">
        <span class="border" style="padding: 0.3em;">
          {toGujarati($data[index].mudikrut)}
        </span>
      </td>
    </tr>
    <tr>
      <td class="align-top">૧૮</td>
      <td colspan="9">
        <p>
          કર્મચારીએ તેમના અવસાન સમયે પેન્શન/મૃત્યુ-સહનિવૃતિ ગ્રેજયુઈટી/પેન્શન
          રૂપાંતર ચુકવવા માટે નિયુક્તિ કરેલ નોમિનીનુંનામ (નાણા વિભાગના ઠરાવ
          તારીખ:૨૩/૦૬/૨૦૦૦ મુજબનું)
        </p>
        <p>
          મારા અવસાનના તુરંત પહેલાંના પેન્શન અંગેના લાભો સબંધેની તમામ પ્રકારની
          ચડત લેણી રકમ જેવી કે, પેન્શનની બાકી લેણી રકમ , પેન્શનની મુડીકૃત
          રૂપાંતર રકમ, ડી.સી.આર.જી.ની ચુકવણી માટે તેમજ નિવૃત્તિ બાદ મારા અવસાન
          પ્રસંગે મારા કુંટુંબને રાહત તરીકે હું નીચે જણાવેલ વ્યક્તિને નિયુક્ત
          કરૂ છું. અગાઉ આ અંગે જો મેં નિયુક્તિ કરેલ હોય તો તે આથી રદ ગણવા
          વિનંતી.
        </p>
      </td>
    </tr>
    <tr>
      <td colspan="10">
        <NiyuktiTable {index} />
      </td>
    </tr>
    <tr>
      <td> નોધ: </td>
      <td colspan="8">
        <p>
          (૧) અનુક્રમ નં. ૧૮ના સમર્થન માં નોમીનાતીઓન ની પ્રમાણિત નકલ સામેલ
          રાખવી.
        </p>
        <p>
          (૨) અનુક્રમ નં. ૧૬ માં નામ દર્શવતા ચોકસાઈ કરી લેવી જેથી ભવિષ્ય માં
          દાવો ચુકવવામાં મુશ્કેલી ઉપસ્થિત ન થાય.
        </p>
      </td>
    </tr>
  </table>
  <LocalFooter />
</div>

<style>
</style>
