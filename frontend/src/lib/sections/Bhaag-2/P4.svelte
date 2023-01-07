<script>
  // @ts-nocheck

  import { data, preferences } from "../../globalState/data";
  import Bhaag_2_19 from "../../interface/partialInterface/Bhaag_2_19.svelte";
  import { toString } from "../../tools/toString";
  import {
    countYMD,
    getSumFrom,
    minusYMD,
    sumYMD,
    totalYear,
  } from "../../tools/ymd";
  import LetterBox from "./LetterBox.svelte";
  import LocalFooter from "./LocalFooter.svelte";
  export let index = 0;

  $: l1 = countYMD(
    $data[index].pensionPatrNokri[0][0],
    $data[index].pensionPatrNokri[0][1]
  );

  $: l11 = getSumFrom($data[index].pensionPatrNokri[1]);
  $: l12 = getSumFrom($data[index].pensionPatrNokri[2]);
  $: l13 = getSumFrom($data[index].pensionPatrNokri[3]);
  $: l14 = getSumFrom($data[index].pensionPatrNokri[4]);
  $: l15 = [l11, l12, l13, l14].reduce((a, b) => sumYMD(a, b));
  $: lb = minusYMD(l1, l15);
  $: le = [
    lb,
    $data[index].pensionPatrNokri[5],
    $data[index].pensionPatrNokri[6],
  ].reduce((a, b) => sumYMD(a, b));

  $: lef = totalYear(le.map((x) => parseInt(x) || 0));
</script>

<div class="page-break-before">
  {#if !$preferences.showAll}
    <div class="no-print in-page-interface">
      <Bhaag_2_19 />
    </div>
  {/if}
  <table style="width: 100%;">
    <tr>
      <td> ૧૯. </td>
      <td> <p class="indent tarikh" /></td>
      <td class="border center">
        <span style="display: block;"> વર્ષ </span>
      </td>
      <td class="border center">
        <span style="display: block;"> માસ </span>
      </td>
      <td class="border center">
        <span style="display: block;"> દિવસ </span>
      </td>
    </tr>
    <tr>
      <td />
      <td>
        (એ) એકંદર નોકરી તા.
        <span class="bolder">
          {toString($data[index].pensionPatrNokri[0][0] || "", "/") ||
            "____/____/____"}
        </span>
        થી તા.

        <span class="bolder">
          {toString($data[index].pensionPatrNokri[0][1] || "", "/") ||
            "____/____/____"}
        </span>
        બાદ પેન્શન માટે ન ગણવાનો સમય
      </td>
      {#each l1 as ymd}
        <td>
          <div class="box-center">
            <LetterBox s={2} arr={ymd} />
          </div>
        </td>
      {/each}
    </tr>
    <tr>
      <td />
      <td class="peta-prakar">
        <p class="indent">(૧) ૩૬ માસથી વધારે અસાધારણ રજા</p>
        {#each $data[index].pensionPatrNokri[1] as row}
          <p class="indent tarikh">
            તા

            <b>
              {toString(row[0], "/") || "____/____/____"}
            </b>
            થી તા
            <b>
              {toString(row[1], "/") || "____/____/____"}
            </b>
          </p>
        {/each}
      </td>
      {#each l11 as ymd}
        <td>
          <div class="box-center">
            <LetterBox s={2} arr={ymd} />
          </div>
        </td>
      {/each}
    </tr>
    <tr>
      <td />
      <td class="peta-prakar">
        <p class="indent">
          (૨) પેન્શનપાત્ર નોકરી તરીકે ન ગણવાના હૂકમો થયા હોય તેવો ફરજ મોકૂફીનો
          સમય
        </p>
        {#each $data[index].pensionPatrNokri[2] as row}
          <p class="indent tarikh">
            તા
            <b>{toString(row[0], "/") || "____/____/____"}</b>
            થી તા <b>{toString(row[1], "/") || "____/____/____"}</b>
          </p>
        {/each}
      </td>
      {#each l12 as ymd}
        <td>
          <div class="box-center">
            <LetterBox s={2} arr={ymd} />
          </div>
        </td>
      {/each}
    </tr>
    <tr>
      <td />
      <td class="peta-prakar">
        <p class="indent">
          (૩) ત્રણ માસ કરતાં વધારે મુદતની તૂટ હોય ત્યાં બે ગાળા વચ્ચેનો તૂટ નો
          સમયગાળો
        </p>
        {#each $data[index].pensionPatrNokri[3] as row}
          <p class="indent tarikh">
            તા
            <b>{toString(row[0], "/") || "____/____/____"}</b>
            થી તા <b>{toString(row[1], "/") || "____/____/____"}</b>
          </p>
        {/each}
      </td>
      {#each l13 as ymd}
        <td>
          <div class="box-center">
            <LetterBox s={2} arr={ymd} />
          </div>
        </td>
      {/each}
    </tr>
    <tr>
      <td />
      <td class="peta-prakar">
        <p class="indent">(૪) પેન્શનપાત્ર નહિ ગણાતી અન્ય મુદતો</p>
        {#each $data[index].pensionPatrNokri[4] as row}
          <p class="indent tarikh">
            તા
            <b>{toString(row[0], "/") || "____/____/____"}</b>
            થી તા <b>{toString(row[1], "/") || "____/____/____"}</b>
          </p>
        {/each}
      </td>
      {#each l14 as ymd}
        <td>
          <div class="box-center">
            <LetterBox s={2} arr={ymd} />
          </div>
        </td>
      {/each}
    </tr>
    <tr>
      <td />
      <td>
        <p class="indent">
          (૫) પેન્શનપાત્ર નોકરી નહિ ગણાતી નોકરી નો સરવાળો (1) થી (૪)
        </p>
      </td>
      {#each l15 as ymd}
        <td>
          <div class="box-center">
            <LetterBox s={2} arr={ymd} />
          </div>
        </td>
      {/each}
    </tr>
    <tr>
      <td />
      <td> (બી) ચોખ્ખી પેન્શનપાત્ર નોકરી (એ -(૫)) : </td>
      {#each lb as _}
        <td>
          <div class="box-center">
            <LetterBox s={2} arr={_} />
          </div>
        </td>
      {/each}
    </tr>
    <tr>
      <td />
      <td> (સી) ૨૦/૨૫ વર્ષ બાદ સ્વૈચ્છિક નિવૃત્તિ હોય તો નોશનલ નોકરી </td>
      {#each $data[index].pensionPatrNokri[5].map((x) => x
          ?.toString()
          .padStart(2, "0")) as _}
        <td>
          <div class="box-center">
            <LetterBox s={2} arr={_} />
          </div>
        </td>
      {/each}
    </tr>
    <tr>
      <td />
      <td>
        <p>
          <u> ગુ. મુ. સેવા પેન્શન નિયમો -૪૮/૪૯ મુજબ (વધુમાં વધુ પાંચ વર્ષ) </u>
        </p>
        (ડી) ન્યાયિક સેવા ના અધિકારી/ મદદનિશ સરકારી વકીલ માટે:
      </td>

      {#each $data[index].pensionPatrNokri[6].map((x) => x
          ?.toString()
          .padStart(2, "0")) as _}
        <td>
          <div class="box-center">
            <LetterBox s={2} arr={_} />
          </div>
        </td>
      {/each}
    </tr>
    <tr>
      <td />
      <td>
        <p>
          <u>
            ગુ. મુ. સેવા પેન્શન નિયમ ૩૭ મુજબ મળવા પાત્ર નોશનલ નોકરી કુલ
            (બી+સી+ડી)
          </u>
        </p>
        (ઇ) ગણતરી માં લેવાની પૂરા વર્ષ ની નોકરી
      </td>
      {#each le as _}
        <td>
          <div class="box-center">
            <LetterBox s={2} arr={_} />
          </div>
        </td>
      {/each}
    </tr>
    <tr>
      <td />
      <td />
      <td>
        = {lef || "________"} વર્ષ
      </td>
    </tr>
    <tr>
      <td class="align-top">નોધ: </td>
      <td colspan="8">
        <p>
          પેન્શન પાત્ર નોકરીમાં આવતા સમયમાં પૂરા કરેલ વર્ષ ઉપરાંત જો છ માસ કર્તા
          ઓછો સમયથયો હોય તો ગણતરી માં ના લેવો, પરંતુ છ માસ કરતાં વધુ સમય ને પૂરા
          વર્ષ તરીકે ગણતરીમાં લેવો (મહતમ પેન્શન પાત્ર નોકરી ૩૩ વર્ષ)
        </p>
      </td>
    </tr>
  </table>
  <LocalFooter />
</div>

<style>
  .box-center {
    margin-inline: auto;
    width: fit-content;
  }
  .tarikh {
    padding-left: max(1rem, 1vw);
  }
</style>
