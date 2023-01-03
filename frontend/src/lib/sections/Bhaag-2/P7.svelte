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
</script>

<div class="page-break-before">
  {#if !$preferences.showAll}
    <div class="no-print">
      <Bhaag_2P7 />
    </div>
  {/if}
  <table style="width: 100%;">
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
          {$data[index].monghvaari || "_".repeat(15)}
          ) &#215;
          {pensionPatrNokariVarsh || "_".repeat(15)}
          /2 =
        </p>
        <p>
          = {splitter(
            $data[index].monghvaari &&
              $data[index].bandData?.pensionPatrPagarNiVigato?.chhelloPagaar &&
              ((+$data[index].monghvaari +
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
                $data[index].monghvaari &&
                $data[index].bandData?.pensionPatrPagarNiVigato
                  ?.chhelloPagaar &&
                (+$data[index].monghvaari +
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
                $data[index].monghvaari &&
                $data[index].bandData?.pensionPatrPagarNiVigato
                  ?.chhelloPagaar &&
                (+$data[index].monghvaari +
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
                $data[index].monghvaari &&
                $data[index].bandData?.pensionPatrPagarNiVigato
                  ?.chhelloPagaar &&
                (+$data[index].monghvaari +
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
                $data[index].monghvaari &&
                $data[index].bandData?.pensionPatrPagarNiVigato
                  ?.chhelloPagaar &&
                (+$data[index].monghvaari +
                  +$data[index].bandData?.pensionPatrPagarNiVigato
                    ?.chhelloPagaar) *
                  33
            ) || "_".repeat(15)}
          </p>
        </div>
      </td>
    </tr>
  </table>
  <LocalFooter {index} />
</div>

<style>
  .no-print {
    background-color: #756e6e;
    color: white;
    padding: 5px;
  }
</style>
