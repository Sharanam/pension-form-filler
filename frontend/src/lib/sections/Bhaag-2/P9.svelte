<script>
  // @ts-nocheck

  import { data, preferences } from "../../globalState/data";
  import Bhaag_2_P9 from "../../interface/partialInterface/Bhaag_2_P9.svelte";
  import { ageCalculator } from "../../tools/ageCalculator";
  import { splitter } from "../../tools/splitter";
  import { toGujarati } from "../../tools/toGujarati";
  import { toString } from "../../tools/toString";
  import LocalFooter from "./LocalFooter.svelte";
  export let index = 0;

  $: age =
    +$data[index].mudikrutRakamAge ||
    ageCalculator($data[index].janmTarikh, $data[index].mudikrutTarikh) ||
    "";
  $: leniNiRakam = $data[index].leniRakamNiVigato;
</script>

<div class="page-break-before">
  {#if !$preferences.showAll}
    <div class="no-print in-page-interface">
      <Bhaag_2_P9 />
    </div>
  {/if}
  <table style="width: 100%;">
    <tr>
      <td class="align-top"> ૨૮.</td>
      <td colspan="7">
        <p>નિવૃત્તિના લાભોમાથી કપાત કરવાની હોય તો તેની વિગત</p>
      </td>
    </tr>
    <tr>
      <td />
      <td class="align-top"> (૧) </td>
      <td>
        <div>
          પેન્શનમાંથી કપાત રુ.
          {$data[index].Kapaat[0][0] || "_".repeat(15)}
          તા.
          {toString($data[index].Kapaat[0][1], "/") || "_".repeat(15)}
          થી તા
          {toString($data[index].Kapaat[0][2], "/") || "_".repeat(15)} સુધી રુ
          {$data[index].Kapaat[0][3] || "_".repeat(15)}
          તા
          {toString($data[index].Kapaat[0][4], "/") || "_".repeat(15)}
          થી કાયમી કપાત
          <br />
          પેન્શનમાંથી કપાત કરવાના સિક્ષા હુકમ નંબર {$data[index].Kapaat[1][0] ||
            "_".repeat(15)}
          તા {toString($data[index].Kapaat[1][1], "/") || "_".repeat(15)} પેન્શન
          કાપના શિક્ષાના હુકમની નકલ સામેલ છે.
        </div>
      </td>
    </tr>
    <tr>
      <td />
      <td class="align-top"> (૨) </td>
      <td colspan="7">
        સરકારી કર્મચારી પાસેથી લેણી રકમની વિગત નીચે મુજબ છે. (ગુ. મુ. સેવા
        (પેન્શન) નિયમોના નિયમ 133/134/135)
      </td>
    </tr>
    <tr>
      <td colspan="7">
        <table class="border padding center" style="width: 100%;">
          <thead>
            <tr>
              <td> ક્રમ </td>
              <td> વિગત </td>

              <td>ખાતા નંબર</td>
              <td> મુદ્દલ </td>
              <td> વ્યાજ </td>
              <td> કુલ </td>
              <td> જમા કરાવવાનું અંદાજપત્ર સદર </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>૧</td>
              <td> મકાન પેશગી </td>
              {#if leniNiRakam[0]}
                {#each leniNiRakam[1][0] as col}
                  <td>
                    {col}
                  </td>
                {/each}
              {/if}
            </tr>
            <tr>
              <td>૨</td>
              <td> વાહન પેશગી </td>
              {#if !leniNiRakam[0]}
                <td rowspan="3" colspan="5">
                  {toString($data[index]?.karmchariNaam[0], " ") ||
                    toString($data[index]?.karmchariNaam[1], " ") ||
                    ".".repeat(50)} પાસેથી કોઈ વસુલાત કરવાની બાકી નથી.
                </td>
              {:else}
                {#each leniNiRakam[1][1] as col}
                  <td>
                    {col}
                  </td>
                {/each}
              {/if}
            </tr>
            <tr>
              <td>૩</td>
              <td> પગાર ભથ્થાની વસુલાત </td>
              {#if leniNiRakam[0]}
                {#each leniNiRakam[1][2] as col}
                  <td>
                    {col}
                  </td>
                {/each}
              {/if}
            </tr>
            <tr>
              <td>૪</td>
              <td> અન્ય વસુલાત </td>
              {#if leniNiRakam[0]}
                {#each leniNiRakam[1][3] as col}
                  <td>
                    {col}
                  </td>
                {/each}
              {/if}
            </tr>
            <tr>
              <td />
              <td> કુલ વસુલાત </td>
            </tr>
          </tbody>
        </table>
        <p class="indent">
          ઉપર જણાવેલ વિગતે રકમ સરકારી લેણા પેટે મૃત્યુ-સહ-નિવૃતિ ગ્રેજ્યુટી /
          સેવા ગ્રેજ્યુઇટીમાંથી વસુલાત કરી જમા કરવા વિનંતી છે.
        </p>
      </td>
    </tr>
  </table>
  <p class="center">-: પ્રમાણપત્રો :-</p>
  <table>
    <tr>
      <td class="align-top"> (૧) </td>
      <td>
        આથી સમગ્રપણે ખાતરી કરી પ્રમાણિત કરવામાં આવે છે કે આજની તારીખે
        શ્રી/શ્રીમતિ
        <span class="bolder">
          {toString($data[index]?.karmchariNaam[0], " ") ||
            toString($data[index]?.karmchariNaam[1], " ") ||
            ".".repeat(50)}
        </span>
        તા:

        <span class="bolder">
          {toString($data[index].nokriDakhalTarikh, "/") || ".".repeat(20)}
        </span>
        થી તા:
        <span class="bolder">
          {toString($data[index].nivrutiTarikh, "/") || ".".repeat(20)}
        </span>
        પાસે કશું લેણું બાકી નથી.
      </td>
    </tr>
  </table>
  <LocalFooter />
  <table>
    <tr>
      <td class="align-top"> (૨) </td>
      <td>
        સ્વૈચ્છિક નિવૃત્તિના કેસમાં આપવાપાત્ર પ્રમાણપત્ર:
        <p>
          (નાણાં વિભાગનાં તારીખ: 26/08/1971ના ઠરાવ ક્રમાંક:નવન/1070/2699/જે
          મુજબ)
        </p>

        <p>
          આથી પ્રમાણપત્ર આપવામાં આવે છે કે શ્રી {".".repeat(30)} કે જેઓને નાણાં વિભાગનાં
          તારીખ:08/10/1970ના ઠરાવ ક્રમાંક:નવન/1030/3158/જે અન્વયે સ્વૈ. નિવૃત્તિ
          થવાની પરવાનગી આપવામાં આવી છે.
        </p>
        <p class="indent">
          (૧) તેઓએ તે જમા અથવા કેડરની જગા કાર્યકારી રીતે ધારણ કરવાનું ચાલુ
          રાખ્યું હોત.
        </p>
        <p class="indent">
          (૨) તેઓએ / તેણીએ નિવૃત્તિ પહેલા જે ખાસ પગાર મેળવ્યો હોય તે મેળવવાનું
          ચાલુ રાખ્યુ હોત.
        </p>
        <p class="indent">
          (૩) તેઓએ તેણીએ સ્વૈચ્છિક નિવૃત્તિ ન લીધી હોત તો કાલ્પનિક પેન્શનપાત્ર
          નોકરી / ફરજ દરમિયાન આપતી લાચડી આડ ઓળંગવાની પરવાનગી આપવામાં આવી હોત.
        </p>
        <p class="indent">
          (૪) તેઓએ / તેણીએ કાલ્પનિક પેન્શનપાત્ર નોકરી દરમ્યાન ઇજાફાઓ મેળવવાનું
          ચાલુ રાખ્યું હોત.
        </p>
      </td>
    </tr>
  </table>
  <LocalFooter />
</div>
