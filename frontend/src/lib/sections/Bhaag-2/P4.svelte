<script>
  // @ts-nocheck

  import { data } from "../../globalState/data";
  import { toString } from "../../tools/toString";
  import LetterBox from "./LetterBox.svelte";
  import LocalFooter from "./LocalFooter.svelte";
  export let index = 0;

  function countYMD(...args) {
    let [d1, m1, y1, d2, m2, y2] = args.flat();
    if (
      !/^\d{1,2}$/.test(d1) ||
      !/^\d{1,2}$/.test(m1) ||
      !/^\d{4}$/.test(y1) ||
      !/^\d{1,2}$/.test(d2) ||
      !/^\d{1,2}$/.test(m2) ||
      !/^\d{4}$/.test(y2)
    ) {
      return ["", "", ""];
    }

    let years = y2 - y1;
    let months = m2 - m1;
    let days = d2 - d1;

    if (days < 0) {
      months--;
      let daysInPrevMonth = new Date(y2, m2, 0).getDate();
      days += daysInPrevMonth + 1;
    }

    if (months < 0) {
      years--;
      months += 12;
    }
    return [years, months, days].map((x) => x.toString().padStart(2, "0"));
  }
  function sumYMD(...args) {
    let [y1, m1, d1] = args[0];
    let v1 = true,
      v2 = true;
    if (!/^\d{1,2}$/.test(y1) || !/^\d{1,2}$/.test(m1) || !/^\d{1,2}$/.test(d1))
      v1 = false;

    let [y2, m2, d2] = args[1];
    if (!/^\d{1,2}$/.test(y2) || !/^\d{1,2}$/.test(m2) || !/^\d{1,2}$/.test(d2))
      v2 = false;

    if (!v1 && !v2) return ["", "", ""];
    if (!v1) return [y2, m2, d2];
    if (!v2) return [y1, m1, d1];

    let years = parseInt(y1) + parseInt(y2);
    let months = parseInt(m1) + parseInt(m2);
    let days = parseInt(d1) + parseInt(d2);

    if (days > 30) {
      months++;
      days -= 30;
    }

    if (months > 12) {
      years++;
      months -= 12;
    }

    return [years, months, days].map((x) => x.toString().padStart(2, "0"));
  }
  $: l1 = countYMD(
    $data[index].pensionPatrNokri[0][0],
    $data[index].pensionPatrNokri[0][1]
  );
  $: l11 = sumYMD(
    countYMD(
      $data[index].pensionPatrNokri[1][0],
      $data[index].pensionPatrNokri[1][1]
    ),
    countYMD(
      $data[index].pensionPatrNokri[1][2],
      $data[index].pensionPatrNokri[1][3]
    )
  );
  $: l12 = sumYMD(
    countYMD(
      $data[index].pensionPatrNokri[2][0],
      $data[index].pensionPatrNokri[2][1]
    ),
    countYMD(
      $data[index].pensionPatrNokri[2][2],
      $data[index].pensionPatrNokri[2][3]
    )
  );
  $: l13 = sumYMD(
    countYMD(
      $data[index].pensionPatrNokri[3][0],
      $data[index].pensionPatrNokri[3][1]
    ),
    countYMD(
      $data[index].pensionPatrNokri[3][2],
      $data[index].pensionPatrNokri[3][3]
    )
  );
  $: l14 = sumYMD(
    countYMD(
      $data[index].pensionPatrNokri[4][0],
      $data[index].pensionPatrNokri[4][1]
    ),
    countYMD(
      $data[index].pensionPatrNokri[4][2],
      $data[index].pensionPatrNokri[4][3]
    )
  );
  //   $: l15 = sumYMD(l11, l12, l13, l14);
  $: l15 = [l11, l12, l13, l14].reduce((a, b) => sumYMD(a, b));

  function minusYMD(period1, period2) {
    let [y1, m1, d1] = period1;
    let [y2, m2, d2] = period2;
    let v1 = true,
      v2 = true;
    if (!/^\d{1,2}$/.test(y1) || !/^\d{1,2}$/.test(m1) || !/^\d{1,2}$/.test(d1))
      v1 = false;
    if (!/^\d{1,2}$/.test(y2) || !/^\d{1,2}$/.test(m2) || !/^\d{1,2}$/.test(d2))
      v2 = false;
    if (!v1 && !v2) return ["", "", ""];
    if (!v1) return [-y2, -m2, -d2];
    if (!v2) return [y1, m1, d1];
    let years = y1 - y2;
    let months = m1 - m2;
    let days = d1 - d2;
    if (days < 0) {
      months--;
      let daysInPrevMonth = new Date(y1, m1, 0).getDate();
      days += daysInPrevMonth + 1;
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    return [years, months, days].map((x) => x.toString().padStart(2, "0"));
  }
  $: lb = minusYMD(l1, l15);

  $: le = [
    lb,
    $data[index].pensionPatrNokri[5],
    $data[index].pensionPatrNokri[6],
  ].reduce((a, b) => sumYMD(a, b));
  function totalYear([y, m, d]) {
    if (m >= 6) y++;
    return y;
  }
  $: lef = totalYear(le.map((x) => parseInt(x) || 0));
</script>

<div class="page-break-before">
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
        (એ) એકંદર નોકરી તા. {toString(
          $data[index].pensionPatrNokri[0][0] || "",
          "/"
        ) || "____/____/____"} થી તા.
        {toString($data[index].pensionPatrNokri[0][1] || "", "/") ||
          "____/____/____"}
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
        <div />
        <p class="indent">(૧) ૩૬ માસથી વધારે અસાધારણ રજા</p>
        <p class="indent tarikh">
          તા
          {toString($data[index].pensionPatrNokri[1][0] || "", "/") ||
            "____/____/____"}
          થી તા {toString($data[index].pensionPatrNokri[1][1] || "", "/") ||
            "____/____/____"}
        </p>
        <p class="indent tarikh">
          તા
          {toString($data[index].pensionPatrNokri[1][2] || "", "/") ||
            "____/____/____"}
          થી તા {toString($data[index].pensionPatrNokri[1][3] || "", "/") ||
            "____/____/____"}
        </p>
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
        <p class="indent tarikh">
          તા
          {toString($data[index].pensionPatrNokri[2][0] || "", "/") ||
            "____/____/____"}
          થી તા {toString($data[index].pensionPatrNokri[2][1] || "", "/") ||
            "____/____/____"}
        </p>
        <p class="indent tarikh">
          તા
          {toString($data[index].pensionPatrNokri[2][2] || "", "/") ||
            "____/____/____"}
          થી તા {toString($data[index].pensionPatrNokri[2][3] || "", "/") ||
            "____/____/____"}
        </p>
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
        <p class="indent tarikh">
          તા
          {toString($data[index].pensionPatrNokri[3][0] || "", "/") ||
            "____/____/____"}
          થી તા {toString($data[index].pensionPatrNokri[3][1] || "", "/") ||
            "____/____/____"}
        </p>
        <p class="indent tarikh">
          તા
          {toString($data[index].pensionPatrNokri[3][2] || "", "/") ||
            "____/____/____"}
          થી તા {toString($data[index].pensionPatrNokri[3][3] || "", "/") ||
            "____/____/____"}
        </p>
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
        <p class="indent tarikh">
          તા
          {toString($data[index].pensionPatrNokri[4][0] || "", "/") ||
            "____/____/____"}
          થી તા {toString($data[index].pensionPatrNokri[4][1] || "", "/") ||
            "____/____/____"}
        </p>
        <p class="indent tarikh">
          તા
          {toString($data[index].pensionPatrNokri[4][2] || "", "/") ||
            "____/____/____"}
          થી તા {toString($data[index].pensionPatrNokri[4][3] || "", "/") ||
            "____/____/____"}
        </p>
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
      <td> (બી) ચોખ્ખી પેન્શનપાત્ર નોકરી ( એ -(૫) ) : </td>
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
  <LocalFooter {index} />
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
