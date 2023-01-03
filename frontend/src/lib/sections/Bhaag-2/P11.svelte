<script>
  // @ts-nocheck
  import { data, preferences } from "../../globalState/data";
  import { toString } from "../../tools/toString";
  import LocalFooter from "./LocalFooter.svelte";
  export let index = 0;
  $: nm =
    toString($data[index]?.karmchariNaam[0], " ") ||
    toString($data[index]?.karmchariNaam[1], " ") ||
    "શ્રી " + ".".repeat(50);
</script>

<div class="page-break-before ">
  {#if !$preferences.showAll}
    <div class="no-print">
      <!-- <Bhaag_2_P8 /> -->
    </div>
  {/if}
  <div class="center">
    <div>
      <p>પેન્શનરની ઓળખની નિશાની / ઊંચાઈ / સહીના નમૂના અને ફોટા</p>
      <p>
        (ગુજરાત મુલ્કી સેવા (પેન્શન) નિયમો,૨૦૦૨ના નિયમો-૧૩૬,૧૩૭, અને ૧૩૮ તથા
        ફોર્મ-૨૧)
      </p>
      <p>
        કલર ફોટો, સાઈઝ 4.5 cm x 3.5 cm સાઈઝનો ફોટો જેનું બેકગ્રાઉન્ડ સફેદ હોવું
        જોઈએ
      </p>
    </div>
    <div class="mt">
      (જો પેન્શનર સગીર કે માનસિક અપંગ હોય તો જ વાલીનો ફોટો ચોટાડવાનો રહેશે)
    </div>
    <div class="mt">
      {nm}
      હોદ્દો
      {$data[index]?.karmchariHoddo[0] ||
        $data[index]?.karmchariHoddo[1] ||
        ".".repeat(50)}
      સરદાર પટેલ યુનિવર્સિટી, વલ્લભ વિદ્યાનગર સત્રાંતે વયનિવૃત્તિ તારીખ: {toString(
        $data[index].nivrutiTarikh,
        "/"
      ) || ".".repeat(20)}
    </div>
  </div>
  <LocalFooter {index} />
</div>

<style>
  .mt {
    margin-top: 1.6em;
  }
</style>
