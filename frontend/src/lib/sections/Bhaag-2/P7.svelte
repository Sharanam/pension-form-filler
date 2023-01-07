<script>
  // @ts-nocheck

  import { data, preferences } from "../../globalState/data";
  import Bhaag_2P7 from "../../interface/partialInterface/Bhaag_2_P7.svelte";
  import { ageCalculator } from "../../tools/ageCalculator";
  import { splitter } from "../../tools/splitter";
  import LocalFooter from "./LocalFooter.svelte";
  export let index = 0;
  $: calculatedAge = ageCalculator(
    $data[index].nokriDakhalTarikh,
    $data[index].nivrutiTarikh
  );
  $: pensionPatrNokariVarsh =
    $data[index].pensionPatrNokariVarsh ||
    (calculatedAge <= 33 && calculatedAge);
  $: monghvaari =
    (+$data[index].monghvaariPercentage *
      +$data[index].bandData.pensionPatrPagarNiVigato.chhelloPagaar || 0) /
      200 || 0;
</script>

<div class="page-break-before">
  {#if !$preferences.showAll}
    <div class="no-print in-page-interface">
      <Bhaag_2P7 />
    </div>
  {/if}
  <table style="width: 100%;">
    <tr>
      <td />
      <td>
        (૨) ચાલુ નોકરીમાં અવસાન : (નિયમ -૯૦ (૧) (૧))
        <div style="margin-left: 1em;">
          (એ) કુટુંબ પેન્શન - ૧

          <p class="indent">
            ચાલુ નોકરીએ અવસાન થાય ત્યારે અવસાનની તારીખ પછીની તારીખથી પ્રથમ દશ
            વર્ષ સુધી નીચે મુજબ કુટુંબ પેન્શન મળવાપાત્ર થશે. ચાલુ નોકરીએ અવસાન
            થાય ત્યારે અવસાનની તારીખ પછીથી તારીખથી પ્રથમ દસ વર્ષ માટે પરંતુ
            કર્મચારી જીવતા હોત અને ૬૫ વર્ષની ઉંમરે પહોંચે તે તારીખ સુધી બે પૈકી
            જે વહેલું હોય ત્યાં સુધી નીચે મુજબ કુટુંબ પેન્શન મળવાપાત્ર થશે.
          </p>

          <p class="indent">
            પે બેન્ડ
            <span class="bolder">
              {($data[index].chaluNaukariMaAvsaan &&
                ($data[index].bandData?.swaichitNivrutiSamayNo?.lastPayBand ||
                  $data[index].bandData?.nivrutiSamayNo?.lastPayBand)) ||
                "_".repeat(15)}
            </span>
            + ગ્રેડ પે
            <span class="bolder">
              {($data[index].chaluNaukariMaAvsaan &&
                ($data[index].bandData?.swaichitNivrutiSamayNo?.lastPayGrade ||
                  $data[index].bandData?.nivrutiSamayNo?.lastPayGrade)) ||
                "-"}
            </span>
          </p>
          <p class="indent">
            છેલ્લો પગાર
            <span class="bolder">
              {($data[index].chaluNaukariMaAvsaan &&
                $data[index].bandData?.pensionPatrPagarNiVigato
                  ?.chhelloPagaar) ||
                0 ||
                "_".repeat(15)}
            </span>
            રુ. &#215; 50% =
            <span class="bolder">
              {($data[index].chaluNaukariMaAvsaan &&
                parseInt(
                  ($data[index].bandData?.pensionPatrPagarNiVigato
                    ?.chhelloPagaar || 0) * 0.5
                )) ||
                "_".repeat(15)}/-
            </span>
          </p>
          <p class="indent">
            છેલ્લા પગારના ૫૦% જેટલી રકમ રૂ.
            <span class="bolder">
              {($data[index].chaluNaukariMaAvsaan &&
                parseInt(
                  ($data[index].bandData?.pensionPatrPagarNiVigato
                    ?.chhelloPagaar || 0) * 0.5
                )) ||
                "_".repeat(15)}/-
            </span>
          </p>
          (બી) કુટુંબ પેન્શન -૨ (બી) કુટુંબ પેન્શન - ૨

          <p class="indent">
            ત્યારબાદ એટલે કે કર્મચારીના અવસાનની તારીખ પછીની તારીખથી ૧૦ વર્ષ પછી
            છેલ્લા પગારના ૩૦% જેટલી રકમ
          </p>
          <p class="indent">
            છેલ્લો પગાર
            <span class="bolder">
              {($data[index].chaluNaukariMaAvsaan &&
                $data[index].bandData?.pensionPatrPagarNiVigato
                  ?.chhelloPagaar) ||
                0 ||
                "_".repeat(15)}
            </span>
            રુ. &#215; ૩૦ % = રુ.
            <span class="bolder">
              {($data[index].chaluNaukariMaAvsaan &&
                parseInt(
                  ($data[index].bandData?.pensionPatrPagarNiVigato
                    ?.chhelloPagaar || 0) * 0.3
                )) ||
                "_".repeat(15)}/-
            </span>
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td class="align-top"> ૨૫. </td>
      <td>
        <p>મૃત્યુ-સહ-નિવૃત્તિ ગ્રેચ્યુઇટી / સેવા ગ્રેચ્યુઇટી :</p>
        <p>
          ૧. મૃત્યુ-સહ-નિવૃત્તિ-ગ્રેચ્યુઈટી (ગુ.ર.સેવા (પેન્શન) નિયમોના નિયમ-૮૧)
          (૧) (એ)
        </p>
        <p>
          નિવૃત્તિ સમયે : [(છેલ્લો પગાર + મોંઘવારી) &#215; પેન્શનપાત્ર નોકરી
          વર્ષ(મહત્તમ ૩૩ વર્ષ)] /2 =
        </p>
        <p>
          (
          {$data[index].bandData?.pensionPatrPagarNiVigato?.chhelloPagaar ||
            "_".repeat(15)}
          +
          {monghvaari || "_".repeat(15)}
          ) &#215;
          {pensionPatrNokariVarsh || "_".repeat(15)}
          /2 =
        </p>
        <p>
          = {splitter(
            monghvaari &&
              $data[index].bandData?.pensionPatrPagarNiVigato?.chhelloPagaar &&
              ((+monghvaari +
                +$data[index].bandData?.pensionPatrPagarNiVigato
                  ?.chhelloPagaar) *
                +pensionPatrNokariVarsh) /
                2
          ) || "_".repeat(15)}
        </p>
        <p>
          ૨. ચાલુ નોકરીએ અવસાન સમયે : ગુ.મુ. સેવા. (પેન્શન) નિયમો-૨૦૦૨ના
          નિયમ-૮૧(૧) (બી)
        </p>
        <div style="margin-left: 1em;">
          <p>(એ) એક વર્ષ કરતાં ઓછી પેન્શનપાત્ર નોકરી હોય તે પ્રસંગે</p>
          <p>
            (છેલ્લો પગાર + મોંઘવારી ) &#215; ૨ =
            {splitter(
              $data[index].bhaag2_25_2[0] === "a" &&
                monghvaari &&
                $data[index].bandData?.pensionPatrPagarNiVigato
                  ?.chhelloPagaar &&
                (+monghvaari +
                  +$data[index].bandData?.pensionPatrPagarNiVigato
                    ?.chhelloPagaar) *
                  2
            ) || "_".repeat(15)}
          </p>
          <p>
            (બી) એક વર્ષ કે તે કરતાં વધુ પરંતુ પાંચ વર્ષ કરતાં ઓછી પેન્શનપાત્ર
            નોકરી હોય તે પ્રસંગે
          </p>
          <p>
            (છેલ્લો પગાર + મોંઘવારી ) &#215; ૬ =
            {splitter(
              $data[index].bhaag2_25_2[0] === "b" &&
                monghvaari &&
                $data[index].bandData?.pensionPatrPagarNiVigato
                  ?.chhelloPagaar &&
                (+monghvaari +
                  +$data[index].bandData?.pensionPatrPagarNiVigato
                    ?.chhelloPagaar) *
                  6
            ) || "_".repeat(15)}
          </p>
          <p>
            (સી) પાંચ વર્ષ કે વધુ પરંતુ ૨૦ વર્ષ કરતાં ઓછી પેન્શનપાત્ર નોકરી હોય
            તે પ્રસંગે
          </p>
          <p>
            (છેલ્લો પગાર + મોંઘવારી ) &#215; ૧૨ =
            {splitter(
              $data[index].bhaag2_25_2[0] === "c" &&
                monghvaari &&
                $data[index].bandData?.pensionPatrPagarNiVigato
                  ?.chhelloPagaar &&
                (+monghvaari +
                  +$data[index].bandData?.pensionPatrPagarNiVigato
                    ?.chhelloPagaar) *
                  12
            ) || "_".repeat(15)}
          </p>
          <p>
            (ડી) ૨૦ વર્ષ કે તેના કરતાં વધુ નોકરી કરી હોય ત્યાં મહત્તમ હોય મહત્તમ
            ૩૩ વર્ષની મર્યાદામાં જેટલા વર્ષની પેન્શનપાત્ર નોકરી હોય તેટલા પગાર
          </p>
          <p>
            (છેલ્લો પગાર + મોંઘવારી ) &#215; પુરા કરેલા પેન્શનપાત્ર નોકરીના વર્ષ
            (મહત્તમ 33 વર્ષ) =
            {splitter(
              $data[index].bhaag2_25_2[0] === "d" &&
                monghvaari &&
                $data[index].bandData?.pensionPatrPagarNiVigato
                  ?.chhelloPagaar &&
                (+monghvaari +
                  +$data[index].bandData?.pensionPatrPagarNiVigato
                    ?.chhelloPagaar) *
                  33
            ) || "_".repeat(15)}
          </p>
        </div>
      </td>
    </tr>
  </table>
  <LocalFooter />
</div>
