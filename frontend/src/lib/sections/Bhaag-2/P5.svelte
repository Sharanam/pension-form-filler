<script>
  // @ts-nocheck

  import { data, preferences } from "../../globalState/data";
  import Bhaag_2P5 from "../../interface/partialInterface/Bhaag_2_P5.svelte";
  import { splitter } from "../../tools/splitter";
  import { toGujarati } from "../../tools/toGujarati";
  import { toString } from "../../tools/toString";
  import { dasMaas } from "../../tools/ymd";
  import LocalFooter from "./LocalFooter.svelte";
  export let index = 0;
</script>

<div class="page-break-before">
  {#if !$preferences.showAll}
    <div class="no-print in-page-interface">
      <Bhaag_2P5 />
    </div>
  {/if}
  <table style="width: 100%;">
    <tr>
      <td class="align-top"> ૨૦. </td>
      <td>
        <p>નિવૃત્તિ સમયનો છેલ્લો પગાર:</p>
        <p>
          પે બેન્ડ
          <b>
            {$data[index].bandData?.nivrutiSamayNo?.lastPayBand ||
              "_".repeat(15)}
          </b>
          + ગ્રેડ પે
          <b>
            {$data[index].bandData?.nivrutiSamayNo?.lastPayGrade ||
              "_".repeat(15)}
          </b>
        </p>
      </td>
    </tr>

    <tr>
      <td class="align-top"> ૨૧. </td>
      <td>
        <p>સ્વૈચ્છિક નિવૃત્તિ હોય નોકરીનો છેલ્લી તારીખે સંભવિત મુળ પગાર:</p>
        <p>
          પે બેન્ડ
          <b>
            {$data[index].bandData?.swaichitNivrutiSamayNo?.lastPayBand ||
              "_".repeat(15)}
          </b>
          + ગ્રેડ પે
          <b>
            {$data[index].bandData?.swaichitNivrutiSamayNo?.lastPayGrade ||
              "_".repeat(15)}
          </b>
        </p>
      </td>
    </tr>
    <tr>
      <td class="align-top"> ૨૨. </td>
      <td>
        <p>
          ખરેખર મેળવેલ પેન્શાનપાત્ર પગારની વિગતો (મુ.સેવા (પેન્શન) નિયમોના
          નિયમ-૪૩)
        </p>
        <p>
          તા.
          <b>
            {toString(
              $data[index].bandData?.pensionPatrPagar?.pensionDateFrom,
              "/"
            ) || "_".repeat(20)}
          </b>
          થી તા.

          <b>
            {toString(
              $data[index].bandData?.pensionPatrPagar?.pensionDateTo,
              "/"
            ) || "_".repeat(20)}
          </b>
        </p>
        <p>(૨૫ વર્ષ બાદની સ્વૈચ્છિક નિવૃત્તિ હોય તો નોશનલ પગાર ધ્યાને લેવો)</p>
      </td>
    </tr>
    <tr>
      <td />
      <td>
        <table class="border padding center" style="min-width: 70%;">
          <thead>
            <th> ક્રમ </th>
            <th> માસ </th>
            <th> પે બેન્ડ </th>

            <th> ગ્રેડ પે </th>
          </thead>
          <tbody>
            {#each dasMaas($data[index]?.bandData?.pensionPatrPagar?.pensionDateTo) || [] as item, i}
              <tr>
                <td>
                  {toGujarati(i + 1)}
                </td>
                <td>
                  {item[0]} થી {item[1]}
                </td>
                <td class="bolder">
                  {$data[index].bandData?.pensionPatrPagarNiVigato?.payBand[
                    i
                  ] || "-"}
                </td>
                <td class="bolder">
                  {$data[index].bandData?.pensionPatrPagarNiVigato?.gradePay[
                    i
                  ] || "-"}
                </td>
              </tr>
            {/each}
            <tr>
              <td />
              <td class="right"> કુલ પગાર </td>
              <td colspan="2" class="bolder">
                {$data[index].bandData?.pensionPatrPagarNiVigato?.kulPagaar ||
                  "_".repeat(15)}
              </td>
            </tr>
            <tr>
              <td />
              <td class="right"> સરવાળો દશ માસ </td>
              <td colspan="2" class="bolder">
                {splitter(
                  $data[index].bandData?.pensionPatrPagarNiVigato
                    ?.sarvaadoDasMaas || 0,
                  ","
                ) || "_".repeat(15)}
              </td>
            </tr>
            <tr>
              <td />
              <td class="right"> માસિક સરેરાશ પેન્શનપાત્ર પગાર </td>
              <td colspan="2" class="bolder">
                <p>
                  {$data[index].bandData.pensionPatrPagarNiVigato
                    .chhelloPagaar || "_".repeat(15)}
                  &#215; 50% =
                </p>
                {splitter(
                  parseInt(
                    $data[index].bandData?.pensionPatrPagarNiVigato
                      ?.masikSarerashPpp
                  ) || 0,
                  ","
                ) || "_".repeat(15)}
              </td>
            </tr></tbody
          >
        </table>
      </td>
    </tr>
    <tr>
      <td />
      <td>
        <p class="indent">
          છેલ્લા આર.ઓ.પી.ની ચકાસણી એલ.એફ.કચેરીએ કરેલ છે અને ત્યાર પછીના વાર્ષિક
          ઇજાફા તથા બઢતી વગેરે અન્વયે નિયત કરી ચુકવવામાં આવેલ પગાર મેં ચકાસણી
          કરેલ છે અને તે બરાબર જણાયેલ છે, તે મુજબ પેન્શનપાત્ર પગાર ગણતરીમાં
          લીધેલ છે. (ગુ.મુ.સેવા(પેન્શન) નિયીન નિયમ-૧૩૦, ૧૩૧)
        </p>
        <p>
          નોંધ: (૧) કર્મચારીની નિવૃત્તિના દસ માસ પૂર્વે છેલ્લા દસ માસમાં વગર
          પગારની રજા (LWP) હોય તો તે મુજબ તેમનો વગર પગારની રજા (LWP) ના પૂર્વેના
          સમયનો ચૂકવેલ પગાર દસ માસના હેતુ માટે ધ્યાનમાં લેવો.
        </p>
        <p>
          (૨) કર્મચારી ફરજ મોકુફી પર હોય તે સમયને ફરજ મોકુફી તરીકે જ ગણેલ હોય તો
          જો કર્મચારી ફરજ મોકુફી પર જતાં પહેલાં મેળવેલ પગારના દસ માસના હેતુ માટે
          ધ્યાને લેવો.
        </p>
        (3) કર્મચારી અર્ધપગારી રજા પર હોય, તો તે જો રજા પર ગયા ન હોય તો અને ફરજ ઉપર
        હોત તો અને જે તે પગાર મેળવવા પાત્ર હોય તે પગાર દશ માસના હેતુ માટે ધ્યાનમાં
        લેવો.
      </td>
    </tr>
  </table>
  <LocalFooter />
</div>

<style>
  td.right::after {
    content: " : ";
  }
</style>
