<script>
  // @ts-nocheck

  import RajyapatritTick from "../../commonElements/RajyapatritTick.svelte";
  import { data } from "../../globalState/data";
  import { toGujarati } from "../../tools/toGujarati";
  import { toString } from "../../tools/toString";
  import LetterBox from "./LetterBox.svelte";

  import LocalFooter from "./LocalFooter.svelte";
  export let index;
</script>

<div class="page-break-before">
  <table style="width: 100%;" class="layed-out">
    <tr>
      <td class="align-top"> ૭ </td>
      <td class="align-top" colspan="3">
        <p>કર્મચારીનું પત્રવ્યવહાર નું સરનામું:</p>
        <p>(પીનકોડ, ટેલીફોન નંબર, ઇમેઇલ સાથે)</p>
      </td>
      <td class="align-top" colspan="6">
        {#if $data[index].address}
          {#each $data[index].address.split("\n") as line}
            <span style="display:block">{line}</span>
          {/each}
        {:else}
          <!-- for 4 lines of dots  -->
          {`${".".repeat(100)}\n`.repeat(4)}
        {/if}
      </td>
    </tr>
    <tr>
      <td class="align-top"> ૮ </td>
      <td class="align-top" colspan="3"> કર્મચારીનો જી. પી.એફ. નંબર: </td>
      <td class="align-top" colspan="0">
        <LetterBox arr={toString($data[index].gpfNumber).split()} s="3" />
      </td>
    </tr>
    <tr>
      <td class="align-top"> ૯ </td>
      <td class="align-top" colspan="3">
        કર્મચારી રાજ્યપત્રિત છે કે બિન રાજ્યપત્રિત છે? (તે ટીક કરવું)
      </td>
      <td class="align-top" colspan="3">
        <RajyapatritTick {index} />
      </td>
    </tr>
    <tr>
      <td class="align-top">૧૦</td>
      <td class="align-top" colspan="2">
        <div class="no-spacing">
          <p>કચેરીનું નામ સરનામું અને ફોન નંબર :</p>
          <p>(પીન કોડ નંબર સાથે)</p>
          <p>(અંગ્રેજીમાં)</p>
        </div>
      </td>
      <td colspan="5" class="align-top no-spacing border">
        {#if $data[index].kacheriNaam[1]}
          {#each $data[index].kacheriNaam[1]?.split("\n") as kacheri}
            <span style="display: block;">
              {kacheri || ".".repeat(100)}
            </span>
          {/each}
        {/if}
      </td>
    </tr>
    <tr>
      <td class="align-top" />
      <td class="align-top" colspan="2">
        <p>(ગુજરાતીમાં)</p>
      </td>
      <td colspan="5" class="align-top no-spacing border">
        {#if $data[index].kacheriNaam[0]}
          {#each $data[index].kacheriNaam[0]?.split("\n") as kacheri}
            <span style="display: block;">
              {kacheri || ".".repeat(100)}
            </span>
          {/each}
        {/if}
      </td>
    </tr>
    <tr>
      <td class="align-top"> ૧૧. </td>
      <td class="align-top" colspan="2">
        <p>ખાતાના વડા:</p>
        <p>કોડ નંબર:</p>
      </td>
      <td class="align-top" colspan="5">
        <p>
          {$data[index].khaatu[1] || ".".repeat(40)}
        </p>
        <p>
          <LetterBox arr={$data[index].khaatu[2]} s="4" />
        </p>
      </td>
    </tr>
    <tr>
      <td class="align-top">૧૨</td>
      <td class="align-top" colspan="2">
        <p>વિભાગનું નામ:</p>
        <p>કોડ નંબર:</p>
      </td>
      <td class="align-top" colspan="5">
        <p>
          {$data[index].vibhaag[1] || ".".repeat(40)}
        </p>
        <p>
          <LetterBox arr={$data[index].vibhaag[2]} s="4" />
        </p>
      </td>
    </tr>
    <tr>
      <td class="align-top">૧૩</td>
      <td class="align-top" colspan="7">
        <p>
          ૧૩. કર્મચારી જેજિલ્લા પેટા તિજોરીએ થી પેન્શન મેળવવા માગતા હોય તેનું
          નામ
        </p>
      </td>
    </tr>
    <tr>
      <td class="align-top" />
      <td class="align-top" colspan="7" style="font-size: 1.3em; ">
        <p>
          જિલ્લા તિજોરી: <span style="text-decoration: underline;">
            {$data[index].jillo || ".".repeat(40)}
          </span>, પેટા તિજોરી :
          <span style="text-decoration: underline;">
            {$data[index].petaTijori || $data[index].taluko || ".".repeat(40)}
          </span>
        </p>
      </td>
    </tr>
    <tr>
      <td class="align-top"> ૧૪ </td>
      <td class="align-top" colspan="9"
        ><p>
          યોગ્ય રીતે શાખ કરાવેલ (૧) ત્રણ સહીના નમૂનાઓ (૨) સરકારી કર્મચારી સાથે
          તેમના પતિ/પત્ની સાથે પાસપોર્ટ કદના સંયુક્ત ફોટાની નકલ (પતિ/પત્ની ના
          હોય તો સિંગલ ફોટો, કુટુંબ પેન્શનમાં સિંગલ ફોટો, ગાર્ડિયનશિપ હોય તો
          ગાર્ડિયન સહિતના ફોટા) (૩) ઊંચાઈ અને અંગત ઓળખ ચિન્હની વિગત દર્શાવતી બે
          કાપલીઓ આ સાથે કર્મચારી અરજી સહીત સામેલ છે.
        </p>
      </td>
    </tr>
    <tr>
      <td class="align-top"> ૧૫ </td>
      <td class="align-top" colspan="9">
        કામ ચલાઉ પેન્શન/ મૃત્યુ સહ નિવૃતિ ગ્રેજ્યુટી/ કુટુંબ પેન્શન મંજૂર કરેલ
        હોય તેની વિગતો કામ ચલાઉ પેન્શન રૂ: ___________ તારીખ: ___________ થી
        તારીખ ____________ કામ ચલાઉ મૃત્યુ સહ નિવૃતિ ગ્રેજ્યુટી રૂ: _________
        તા: _________ થી તા: ________ કામ ચલાઉ કુટુંબ પેન્શન રૂ: _______ તારીખ:
        ________ થી તારીખ ____________ શ્રી/
        શ્રીમતી_________________________________ને હુકમ નં. _________ તારીખ:
        ____________ થી મંજૂર કરેલ છે
      </td>
    </tr>
  </table>
  <LocalFooter />
</div>

<style>
</style>
