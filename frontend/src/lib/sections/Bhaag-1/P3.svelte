<script>
  // @ts-nocheck

  import { data } from "../../globalState/data";

  import { toString } from "../../tools/toString";
  import LocalFooter from "./LocalFooter.svelte";
  export let index;
</script>

<div class="page-break-before">
  <table style="width: 100%;">
    <tr>
      <td>૧૫</td>
      <td colspan="5"> વારસ નિયુક્તિ </td>
    </tr>
    <tr>
      <td>(૧) </td>
      <td colspan="5">
        <p>
          મારા અવસાનના તુરત પહેલાના પેન્શન અંગેના લાભો સંબંધેની તમામ પ્રકારની
          ચડત લેણી રકમ જેવી કે પેન્શનની નકી લેણી રકમ, પેનાનની મૂડીકૃત રૂપાંતરની
          રકમ, મૃત્યુ-સહ-નિવૃત્તિ ગ્રેચ્યુઈટીની ચૂકવણી માટે તેમજ નિવૃત્તિ બાદ
          મારા અવસાન પ્રસંગે મારા કુટુંબને સહત તરીકેની રકમ ચૂકવણી માટે હું આ
          સાથેની મારી નિયુક્તિની પ્રમાણિત નકલ મુજબ ચુકવણી કરવા વિનંતી કરે છે.
          (નકલ સામેલ છે)
        </p>
      </td>
    </tr>
    <tr>
      <td>(૨) </td>
      <td colspan="5">
        <p>જો નિયુક્ત સગીર હોય તો</p>

        <p>
          (ક) જન્મ તારીખ :
          {#if $data[index].sagir}
            {toString($data[index].nayuktSagir, "/") || ".".repeat(15)}
          {:else}
            <span>- - નથી - -</span>
          {/if}
        </p>
        <p>
          (ખ) સગીર વય દરમ્યાન સદરહુ રકમ જે વ્યક્તિને વાલી તરીકે આપવાની હોય તેનું
          નામ:
          {#if $data[index].sagir}
            {$data[index].sadarhu || ".".repeat(15)}
          {:else}
            <span>- - નથી - -</span>
          {/if}
        </p>
        <p>
          (સરનામું પીનકોડ સહિત):

          {#if $data[index].sagir}
            {#each $data[index].sagirAddress.split("\n") as line}
              <span style="display: block;">{line}</span>
            {/each}
          {:else}
            <span>- - નથી - -</span>
          {/if}
        </p>
        <p>
          (ગ) વાલી તરીકે નિયુક્તિનો પેન્શનર સાથે સંબંધ :

          {#if $data[index].sagir}
            {$data[index].pentionerSatheSambandh || ".".repeat(15)}
          {:else}
            <span>- - નથી - -</span>
          {/if}
        </p>
      </td>
    </tr>
    <tr>
      <td> ૧૬ </td>
      <td colspan="5">
        <p>
          બાહેંધરીપત્ર : ગુ.યુ.સેવા (પેન્શન) નિયમોના નિયમ (૧૪ / ૧૩૫) આથી હું
          <u
            >{toString(
              $data[index].karmchariNaam[0] || $data[index].karmchariNaam[1],
              " "
            ) || ".".repeat(40)}
          </u>
          હોદ્દો
          <u>
            {$data[index].karmchariHoddo[1] || ".".repeat(40)}
          </u>
          બાહેંધરી ખત આપું છું કે, હું તા. {toString(
            $data[index].nivrutiTarikh,
            "/"
          ) || ".".repeat(40)} ના રોજ નિવૃત્ત થાઉ છું. તે પછીથી મારી પાસેથી કોઈ પણ
          સરકારી લેણું જેવું કે, પગાર, રજા પગાર ભથ્થાં, લીધેલ પેશગીઓ, લોન, ઘરભાડા
          અંગે થયેલ અધિક ચૂકવણીઓ સામે બાકી રહેતી રકમ પગારધોરણની સુધારણા કરતા થયેલ
          અધિક ચુકવણી અથવા અન્ય સરકારી લેણુ બાકી જણાય તો તે મારા પેન્શના મૃત્યુ સાહ
          ગ્રેજયુઈટીમાંથી ભરપાઈ કરવા બાહેંધરી સંમતિ આપું છું. નિવૃત્તિ બાદ સરકારી
          રહેણાંક ચાલુ રહેવાની મંજુરી આપવામાં આવે તો વસૂલ કરવાપાત્ર થતું મકાનભાડું
          મને મંજૂર કરવામાં આવેલ પેન્શના કુટુંબ પેન્શન અને તે પર મળવાપાત્ર ટી.આઈ.નથી
          તિજોરી કક્ષાએ વસુલાત કરવા બાહેંધરી તેમજ સંમતિ આપું છું.
        </p>
      </td>
    </tr>
  </table>
  <LocalFooter {index} />
</div>

<style>
  tr > td:first-child {
    vertical-align: top;
  }
</style>
