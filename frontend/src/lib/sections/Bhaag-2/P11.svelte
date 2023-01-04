<script>
  // @ts-nocheck
  import { data, preferences } from "../../globalState/data";
  import { toString } from "../../tools/toString";
  import LocalFooter from "./LocalFooter.svelte";
  import Bhaag_2_P11 from "./../../interface/partialInterface/Bhaag_2_P11.svelte";
  export let index = 0;
  $: nm =
    toString($data[index]?.karmchariNaam[0], " ") ||
    toString($data[index]?.karmchariNaam[1], " ") ||
    "શ્રી " + ".".repeat(50);
</script>

<div class="page-break-before ">
  {#if !$preferences.showAll}
    <div class="no-print in-page-interface">
      <Bhaag_2_P11 />
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

  <div class="grid center">
    <div class="ni">
      ઓળખની અંગત નિશાની
      <div class="box">
        {$data[index].personal[0] || ""}
      </div>
    </div>
    <div class="height">
      ઉંચાઇ
      <div class="box">
        {$data[index].personal[1] || ""}
      </div>
    </div>
    <div class="sahi">
      સહીનો નમુનો
      <div class="box" />
    </div>
    <div class="photo">
      સંયુક્ત ફોટો
      <div class="box" />
    </div>
  </div>
  <LocalFooter {index} />
</div>

<style>
  .mt {
    margin-top: 1.6em;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.5em 0.2em;
    grid-auto-flow: row;
    grid-template-areas:
      "ni height sahi"
      "photo photo photo";
  }
  .box {
    content: "";
    border: 1px solid black;
    display: block;

    min-height: 20vh;
    max-height: 80%;

    min-width: 10vw;
    max-width: 12em;

    margin-inline: auto;
  }

  .ni {
    grid-area: ni;
  }

  .height {
    grid-area: height;
  }

  .sahi {
    grid-area: sahi;
  }

  .photo {
    grid-area: photo;
  }
</style>
