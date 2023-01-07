<script>
  // @ts-nocheck

  import { data, preferences } from "../../globalState/data";
  import Bhaag_2_P8 from "../../interface/partialInterface/Bhaag_2_P8.svelte";
  import { ageCalculator } from "../../tools/ageCalculator";
  import { mudikrutRakam } from "../../tools/constantValues";
  import { splitter } from "../../tools/splitter";
  import { toGujarati } from "../../tools/toGujarati";
  import LocalFooter from "./LocalFooter.svelte";
  export let index = 0;

  $: tableArray = Array.from(mudikrutRakam).reduce((acc, val, i) => {
    if (i % 4 == 0) acc.push([val]);
    else acc[acc.length - 1].push(val);
    return acc;
  }, []);
  $: age =
    +$data[index].mudikrutRakamAge ||
    ageCalculator($data[index].janmTarikh, $data[index].mudikrutTarikh) ||
    "";

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
      <Bhaag_2_P8 />
    </div>
  {/if}
  <table style="width: 100%;">
    <tr>
      <td class="align-top"> ૨૬.</td>
      <p>સેવા ગ્રેજ્યુઇટી:</p>
      <p class="indent">
        ૧૦ વર્ષ કરતા ઓછી પેન્શનપાત્ર નોકરીના કિસ્સામા સેવા
        ગ્રેજ્યુઇટી(ગુ.મુ.સેવા(પેન્શન) નિયમોના નિયમ-૮૦)
      </p>
      <p class="indent">
        (છેલ્લો પગાર + મોંઘવારી) &#215; પુરી કરેલી નોકરીના વર્ષ = (
        <b>
          {$data[index].bandData?.pensionPatrPagarNiVigato?.chhelloPagaar ||
            "_".repeat(15)}
        </b>
        +
        <b>
          {monghvaari || "_".repeat(15)}
        </b>
        ) &#215;
        {pensionPatrNokariVarsh || "_".repeat(15)} = રુ.
        <b>
          {splitter(
            monghvaari &&
              $data[index].bandData?.pensionPatrPagarNiVigato?.chhelloPagaar &&
              ((+monghvaari +
                +$data[index].bandData?.pensionPatrPagarNiVigato
                  ?.chhelloPagaar) *
                +pensionPatrNokariVarsh) /
                2
          ) || "_".repeat(15)}
        </b>
      </p>
    </tr>
    <tr>
      <td class="align-top"> ૨૭. </td>
      <td>
        <p>
          પેન્શનની રકમનું મુડીકૃત (ગુ.મુ.સેવા(પેન્શન) નિયમોના નિયમ - ૧૦૦)
          પેન્શનના મુડીકુત રુપાંતર માટે નજીકની ઉંમરના આધારે એક રુપિયાની રુપાંતર
          કરેલ રકમ માટે મુડીકૃત રકમ :
        </p>
        <p>
          (As per Goverment Resolution Finance Department No. PGR-1009-5-Pay
          Cell (M) dated 13th April, 2009)
        </p>
      </td>
    </tr>
    <tr>
      <td />
      <td>
        <table class="layed-out center border">
          <tr>
            {#each Array(4) as _, i}
              <td> ઉંમર </td>
              <td> દર </td>
            {/each}
          </tr>
          {#each tableArray as row, i}
            <tr>
              {#each row as col}
                {#each col as cell}
                  <td class={col[0] == age && "selected"}>
                    {toGujarati(cell)}
                  </td>
                {/each}
              {/each}
            </tr>
          {/each}
        </table>
      </td>
    </tr>
    <tr>
      <td />
      <td>
        નક્કી થયેલ પેન્શન &#215; <b>
          {toGujarati($data[index].mudikrut) || "_".repeat(10)}%
        </b>
        = રુપાંતર પેંશન =
        <b>
          {toGujarati(
            splitter(
              $data[index].mudikrut &&
                $data[index].bandData?.pensionPatrPagarNiVigato
                  ?.chhelloPagaar &&
                parseInt(
                  ((+$data[index].bandData?.pensionPatrPagarNiVigato
                    ?.chhelloPagaar || 0) /
                    2) *
                    (+$data[index].mudikrut / 100)
                )
            )
          ) || "_".repeat(15)}/-
        </b>
        <p>
          રુપાંતર પેન્શન ભાગ &#215; રુપાંતર દર &#215; ૧૨ =
          <b>
            {toGujarati(
              splitter(
                $data[index].mudikrut &&
                  age &&
                  mudikrutRakam.get(+age) &&
                  $data[index].bandData?.pensionPatrPagarNiVigato
                    ?.chhelloPagaar &&
                  parseInt(
                    ((+$data[index].bandData?.pensionPatrPagarNiVigato
                      ?.chhelloPagaar || 0) /
                      2) *
                      (+$data[index].mudikrut / 100)
                  )
              )
            ) || "_".repeat(15)}
          </b>
          &#215;
          <b>
            {toGujarati(
              $data[index].mudikrut && age && mudikrutRakam.get(+age)
            ) || "_".repeat(15)}
          </b>
          &#215; ૧૨ =

          <b>
            {toGujarati(
              splitter(
                $data[index].mudikrut &&
                  age &&
                  mudikrutRakam.get(+age) &&
                  $data[index].bandData?.pensionPatrPagarNiVigato
                    ?.chhelloPagaar &&
                  parseInt(
                    ((+$data[index].bandData?.pensionPatrPagarNiVigato
                      ?.chhelloPagaar || 0) /
                      2) *
                      (+$data[index].mudikrut / 100) *
                      12 *
                      +mudikrutRakam.get(+age)
                  )
              )
            ) || "_".repeat(15)}/-
          </b>
        </p>
      </td>
    </tr>
  </table>
  <LocalFooter />
</div>

<style>
  td.selected {
    background-color: lightsalmon;
    font-weight: bold;
  }
</style>
