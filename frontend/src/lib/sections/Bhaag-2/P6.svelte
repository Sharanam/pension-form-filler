<script>
  // @ts-nocheck

  import { data } from "../../globalState/data";
  import LocalFooter from "./LocalFooter.svelte";
  export let index = 0;
</script>

<div class="page-break-before">
  <table style="width: 100%;">
    <tr>
      <td class="align-top"> ૨૩. </td>
      <td>
        <p>પેન્શનની ગણતરી (ગુ. મુ. સેવા (પેન્શન) નિયમોના નિયમ- ૮૦)</p>
        <p>(૧) પેન્શન = છેલ્લો પગારના ૫૦ %</p>
        <p class="indent">
          {$data[index].bandData?.pensionPatrPagarNiVigato?.chhelloPagaar ||
            0 ||
            "_".repeat(15)} / 2 =
          <span class="border">
            {($data[index].bandData?.pensionPatrPagarNiVigato?.chhelloPagaar ||
              0) / 2 || "_".repeat(15)}
          </span>
        </p>
      </td>
    </tr>
    <tr>
      <td />
      <td>
        (૨) જો કોઈ કિસ્સામાં ઉપર જણાવેલ મુજબનું પેન્શન રીવીઝન ઓફ પે-૯૮ના
        પગારધોરણ મુજબ છેલ્લે જગ્યા ધરવતા હોય તેના સ્કેલના લઘુતમના ૫૦% કરતાં ઓછું
        થતું હોય તો તે પગારધોરણના લઘુતમ પગારના ૫૦ ટકા મુજબ પેન્શન રહેશે.
        <div>
          લઘુતમ પગાર = [(લઘુતમ પે બેન્ડ + ગ્રેડ પે) / 2] = ______________
        </div>
        <p style="margin-top: 1em;">
          ઉપરોક્ત (૧) અથવા (૨) પૈકી જે વધારે હોય તે = રૂ.______________
        </p>
      </td>
    </tr>
    <tr>
      <td class="align-top"> ૨૪. </td>
      <td>
        <p>કુટુંબ પેન્શન (ગુ. મુ. સેવા (પેન્શન) નિયમોના નિયમ- ૯૦ (૧) (૨))</p>
        <div style="margin-left: 1em;">
          (એ) કુટુંબ પેન્શન - ૧

          <p class="indent">
            અવસાનની તારીખ પછીની તારીખથી સાત વર્ષ સુધી અથવા કર્મચારી જીવતા હોત
            અને ૬૫ વર્ષની ઉંમરે પહોંચે ત્યાં સુધી આ બે પૈકી જે વહેલું હોય ત્યો
            સુધી નીચે મુજબ કુટુંબ પેન્શન મળવાપાત્ર બનશે. કર્મચારીને મંજૂર થયેલ
            પેન્શન કેટલી રકમ રૂ. =
          </p>

          <p class="indent">
            (નોંધ : કોઈ પણ સંજોગોમાં છેલ્લા પગારના ૩૦% કરતાં ઓછી નહિ તેટલી રકમ
            હોવી જોઈએ એટલે કે છેલ્લા પગારના ૩૦%)
          </p>
          <p class="indent">
            છેલ્લો પગાર {$data[index].bandData?.pensionPatrPagarNiVigato
              ?.chhelloPagaar ||
              0 ||
              "_".repeat(15)} રુ. &#215; 30% =
            {parseInt(
              ($data[index].bandData?.pensionPatrPagarNiVigato?.chhelloPagaar ||
                0) * 0.3
            ) || "_".repeat(15)}/-
          </p>
          (બી) કુટુંબ પેન્શન -૨
          <p class="indent">
            ઉપર (૧) (એ) માં દર્શાવેલ સમયગાળા બાદ મળવાપાત્ર કુટુંબ પેન્શન છેલ્લા
            પગારના ૩૦% જેટલી રકમ રૂ. = {parseInt(
              ($data[index].bandData?.pensionPatrPagarNiVigato?.chhelloPagaar ||
                0) * 0.3
            ) || "_".repeat(15)}/-
          </p>
        </div>
      </td>
    </tr>
  </table>
  <LocalFooter {index} />
</div>
