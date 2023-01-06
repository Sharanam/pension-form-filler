<script>
  // @ts-nocheck

  import FamilyMembers from "../commonElements/FamilyMembers.svelte";
  import KarmchariDarjjo from "../commonElements/KarmchariDarjjo.svelte";
  import { data, index } from "../globalState/data";
  import PensionPrakar from "../commonElements/PensionPrakar.svelte";
  import RajyapatritTick from "../commonElements/RajyapatritTick.svelte";
  import { toString } from "../tools/toString";
  import NiyuktiTable from "../commonElements/NiyuktiTable.svelte";
  import Bhaag_2_19 from "./partialInterface/Bhaag_2_19.svelte";
  import Bhaag_2_P5 from "./partialInterface/Bhaag_2_P5.svelte";
  import Bhaag_2_P7 from "./partialInterface/Bhaag_2_P7.svelte";
  import Bhaag_2_P8 from "./partialInterface/Bhaag_2_P8.svelte";
  import Bhaag_2_P9 from "./partialInterface/Bhaag_2_P9.svelte";
</script>

<div class="no-print dark">
  <h1>અહીં વિગતો દાખલ કરો.</h1>
  <div>
    ભાગ:
    <div>
      <table class="layed-out center">
        <tr>
          {#each [1, 2, 3, 4, 5] as i (i)}
            <td class="align-top">
              <label for={`bhaag${i}`}>{i}</label>
              <input
                type="checkbox"
                bind:group={$data[$index].bhaag}
                name={`bhaag${i}`}
                value={i}
              />
            </td>
          {/each}
        </tr>
      </table>
    </div>
  </div>
  <div>
    ૧ કર્મચારીનું નામ:
    <div>
      <div>
        <input
          type="text"
          placeholder="ડો./શ્રી/શ્રીમતિ/સ્વ."
          bind:value={$data[$index].karmchariNaam[0][0]}
        />
        <input
          type="text"
          placeholder=" અટક "
          bind:value={$data[$index].karmchariNaam[0][1]}
        />
        <input
          type="text"
          placeholder=" નામ "
          bind:value={$data[$index].karmchariNaam[0][2]}
        />
        <input
          type="text"
          placeholder=" પિતા/ પતિનું નામ "
          bind:value={$data[$index].karmchariNaam[0][3]}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Dr/Mr/Mrs"
          bind:value={$data[$index].karmchariNaam[1][0]}
        />
        <input
          type="text"
          placeholder="Surname"
          bind:value={$data[$index].karmchariNaam[1][1]}
        />
        <input
          type="text"
          placeholder="First Name"
          bind:value={$data[$index].karmchariNaam[1][2]}
        />
        <input
          type="text"
          placeholder="Middle Name"
          bind:value={$data[$index].karmchariNaam[1][3]}
        />
      </div>
    </div>
  </div>
  <div>
    ૨ કર્મચારીનો હોદ્દો:
    <div>
      <input
        type="text"
        bind:value={$data[$index].karmchariHoddo[0]}
        placeholder="designation"
      />
      <input
        type="text"
        bind:value={$data[$index].karmchariHoddo[1]}
        placeholder="હોદ્દો"
      />
    </div>
  </div>
  <div>
    ૩ કચેરીનું નામ સરનામું અને ફોન નંબર : (પીન કોડ નંબર સાથે)
    <textarea
      bind:value={$data[$index].kacheriNaam[0]}
      placeholder="કચેરીનું નામ સરનામું અને ફોન નંબર : (પીન કોડ નંબર સાથે)"
      rows="4"
    />
  </div>
  <div>
    અંગ્રેજીમાં:<textarea
      bind:value={$data[$index].kacheriNaam[1]}
      placeholder="અંગ્રેજીમાં"
      rows="4"
    />
  </div>
  <div>
    ૪ ખાતું:
    <div>
      <input
        placeholder="ખાતું"
        type="text"
        bind:value={$data[$index].khaatu[0]}
      />
      <input
        placeholder="ખાતાના વડા"
        type="text"
        bind:value={$data[$index].khaatu[1]}
      />
      <input
        placeholder="કોડ નંબર"
        type="number"
        bind:value={$data[$index].khaatu[2]}
      />
    </div>
  </div>
  <div>
    ૫ વિભાગ:
    <div>
      <input
        type="text"
        placeholder="વિભાગ"
        bind:value={$data[$index].vibhaag[0]}
      />
      <input
        type="text"
        placeholder="વિભાગના વડા"
        bind:value={$data[$index].vibhaag[1]}
      />
      <input
        type="number"
        placeholder="કોડ નંબર"
        bind:value={$data[$index].vibhaag[2]}
      />
    </div>
  </div>
  <div>
    ૬ જન્મ તારીખ : આંકડામાં:
    <div>
      <input
        type="number"
        min="1"
        max="31"
        placeholder="dd"
        bind:value={$data[$index].janmTarikh[0]}
      />
      <input
        type="number"
        min="1"
        max="12"
        placeholder="mm"
        bind:value={$data[$index].janmTarikh[1]}
      />
      <input
        type="number"
        min="1900"
        placeholder="yyyy"
        bind:value={$data[$index].janmTarikh[2]}
      />
    </div>
  </div>
  <div>
    ૭ નોકરીમા દાખલ તારીખ:
    <div>
      <input
        type="number"
        min="1"
        max="31"
        placeholder="dd"
        bind:value={$data[$index].nokriDakhalTarikh[0]}
      />
      <input
        type="number"
        min="1"
        max="12"
        placeholder="mm"
        bind:value={$data[$index].nokriDakhalTarikh[1]}
      />
      <input
        type="number"
        min="1900"
        placeholder="yyyy"
        bind:value={$data[$index].nokriDakhalTarikh[2]}
      />
    </div>
  </div>
  <div>
    ૮ નિવૃત્તિનો પ્રકાર: (type of pension)
    <PensionPrakar i={$index} />
  </div>
  <div>
    ૯ સત્રાંતે નિવૃત્તિની તારીખ:
    <div>
      <input
        type="number"
        min="1"
        max="31"
        placeholder="dd"
        bind:value={$data[$index].nivrutiTarikh[0]}
      />
      <input
        type="number"
        min="1"
        max="12"
        placeholder="mm"
        bind:value={$data[$index].nivrutiTarikh[1]}
      />
      <input
        type="number"
        min="1900"
        placeholder="yyyy"
        bind:value={$data[$index].nivrutiTarikh[2]}
      />
    </div>
  </div>
  <div>
    નોશનલ નિવૃત્તિની તારીખ
    <div>
      <p>
        ૨૦ વર્ષની નોકરી બાદ સ્વૈચ્છિક નિવૃતી હોય તો નોશનલ નિવૃતિ ની તારીખ: (ગુ.
        મુ. સેવા પેન્શન નિયમો -૨૦૦૨ ના નિયમ ૪૮)
      </p>
      <div>
        <input
          type="number"
          min="1"
          max="31"
          placeholder="dd"
          bind:value={$data[$index].notionalNivrutiTarikh[0][0]}
        />
        <input
          type="number"
          min="1"
          max="12"
          placeholder="mm"
          bind:value={$data[$index].notionalNivrutiTarikh[0][1]}
        />
        <input
          type="number"
          min="1900"
          placeholder="yyyy"
          bind:value={$data[$index].notionalNivrutiTarikh[0][2]}
        />
      </div>
      <p>
        ૨૫ વર્ષની નોકરી બાદ સ્વૈચ્છિક નિવૃતી હોય તો નોશનલ નિવૃતિ ની તારીખ: (ગુ.
        મુ. સેવા પેન્શન નિયમો -૨૦૦૨ ના નિયમ ૪૯)
      </p>
      <div>
        <input
          type="number"
          min="1"
          max="31"
          placeholder="dd"
          bind:value={$data[$index].notionalNivrutiTarikh[1][0]}
        />
        <input
          type="number"
          min="1"
          max="12"
          placeholder="mm"
          bind:value={$data[$index].notionalNivrutiTarikh[1][1]}
        />
        <input
          type="number"
          min="1900"
          placeholder="yyyy"
          bind:value={$data[$index].notionalNivrutiTarikh[1][2]}
        />
      </div>
    </div>
  </div>
  <div>
    ૧૦ ઉમર મુજબ નિવૃત્તિ તારીખ:
    <div>
      <input
        type="number"
        min="1"
        max="31"
        placeholder="dd"
        bind:value={$data[$index].ageWiseNivrutiTarikh[0]}
      />
      <input
        type="number"
        min="1"
        max="12"
        placeholder="mm"
        bind:value={$data[$index].ageWiseNivrutiTarikh[1]}
      />
      <input
        type="number"
        min="1900"
        placeholder="yyyy"
        bind:value={$data[$index].ageWiseNivrutiTarikh[2]}
      />
    </div>
  </div>
  <div>
    ૧૧ અવસાન તારીખ:
    <div>
      <input
        type="number"
        min="1"
        max="31"
        placeholder="dd"
        bind:value={$data[$index].avsaanTarik[0]}
      />
      <input
        type="number"
        min="1"
        max="12"
        placeholder="mm"
        bind:value={$data[$index].avsaanTarik[1]}
      />
      <input
        type="number"
        min="1900"
        placeholder="yyyy"
        bind:value={$data[$index].avsaanTarik[2]}
      />
    </div>
  </div>
  <div>
    <div class="no-space">
      <p>પત્રવ્યવહારનું સરનામું</p>
      <p>(પીનકોડ ટેલીફોન નંબર સાથે)</p>
    </div>
    <textarea bind:value={$data[$index].address} rows="4" cols="50" />
  </div>
  <div>
    GPF Number
    <input
      type="number"
      bind:value={$data[$index].gpfNumber}
      placeholder="જીપીએફ નંબર"
    />
  </div>
  <div>
    <p>કર્મચારી રાજ્યપત્રિત છે કે બિન રાજ્યપત્રિત છે? (તે ટીક કરવું)</p>
    <RajyapatritTick index={$index} />
  </div>

  <!-- KarmchariDarjjo -->
  <KarmchariDarjjo index={$index} />

  <FamilyMembers i={$index} />
  <div>
    <p>જીલ્લા/ પેટા તિજોરીની માહિતી</p>
    <div>
      <input
        type="text"
        bind:value={$data[$index].petaTijori}
        placeholder="જીલ્લા/ પેટા તિજોરી"
      />
      <input
        type="text"
        bind:value={$data[$index].jillo}
        placeholder="જિલ્લો"
      />
      <input
        type="text"
        bind:value={$data[$index].taluko}
        placeholder="તાલુકો"
      />
    </div>
  </div>
  <div>
    <p>મૂડીકૃત રૂપાંતરની માહિતી</p>
    <div>
      <input
        type="number"
        min="0"
        max="100"
        bind:value={$data[$index].mudikrut}
        placeholder="% મૂડીકૃત રૂપાંતર"
      />
    </div>
  </div>
  <div>
    <label for="dateOfSubmission"> રૂપાંતરની તારીખ (આજ રોજ): </label>
    <div>
      <input
        type="number"
        min="1"
        max="31"
        bind:value={$data[$index].mudikrutTarikh[0]}
        placeholder="dd"
      />
      <input
        type="number"
        min="1"
        max="12"
        placeholder="mm"
        bind:value={$data[$index].mudikrutTarikh[1]}
      />
      <input
        type="number"
        min="1900"
        placeholder="yyyy"
        bind:value={$data[$index].mudikrutTarikh[2]}
      />
    </div>
  </div>
  <div>
    <p>અપંગ સભ્ય અને તેના સંબંધીનું માહિતી:</p>
    <div>
      <p>
        મારા પુત્ર / પુત્રી / કુમારી
        <input
          type="text"
          placeholder="અપંગ સભ્ય"
          bind:value={$data[$index].apangSabhya}
        />- અંધ અપંગ/મંદબુદ્ધિના છે તેને લાગતું સિવિલ સર્જનનું દાકતરી પ્રમાણપત્ર
        સામેલ રાખેલ છે, તેઓ જીવન નિર્વાહ પૂરતું કમાવા માટે અશક્તિમાન છે. તેમને
        કુટુંબપેન્શન ચૂકવવાનો પ્રસંગ ઉપસ્થિત થાય ત્યારે તેમના વળી તરીકે
        શ્રી/શ્રીમતિ .
        <input
          type="text"
          placeholder="સંબંધીનું માહિતી"
          bind:value={$data[$index].vali}
        />
        ને ફરજ બજાવવા નીકું છું.
      </p>
    </div>
  </div>
  <div>
    ૧૬.
    <div>
      <hr style="margin-bottom: 0.3em;" />
      નિવૃત્તિ બાદ અવસાન થતાં કુટુંબ પેન્શનને પાત્ર {toString(
        $data[$index].paatrta
      )}નું નામ :
      <!-- પત્ની/ પતિ /સંતાન/ માતા/ પિતા -->
      <div class="no-print">
        <label for="patni">
          <input
            type="radio"
            name="patni"
            value="પત્ની"
            bind:group={$data[$index].paatrta}
          />
          પત્ની
        </label>
        <label for="pati">
          <input
            type="radio"
            name="pati"
            value="પતિ"
            bind:group={$data[$index].paatrta}
          />
          પતિ
        </label>
        <label for="santana">
          <input
            type="radio"
            name="santana"
            value="સંતાન"
            bind:group={$data[$index].paatrta}
          />
          સંતાન
        </label>
        <label for="mata">
          <input
            type="radio"
            name="mata"
            value="માતા"
            bind:group={$data[$index].paatrta}
          />
          માતા
        </label>
        <label for="pita">
          <input
            type="radio"
            name="pita"
            value="પિતા"
            bind:group={$data[$index].paatrta}
          />
          પિતા
        </label>
      </div>
      <div>
        <div>
          <input
            type="text"
            placeholder=" અટક "
            bind:value={$data[$index].paatrataNaam[0][0]}
          />
          <input
            type="text"
            placeholder=" નામ "
            bind:value={$data[$index].paatrataNaam[0][1]}
          />
          <input
            type="text"
            placeholder=" પિતા/ પતિનું નામ "
            bind:value={$data[$index].paatrataNaam[0][2]}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Surname"
            bind:value={$data[$index].paatrataNaam[1][0]}
          />
          <input
            type="text"
            placeholder="First Name"
            bind:value={$data[$index].paatrataNaam[1][1]}
          />
          <input
            type="text"
            placeholder="Middle Name"
            bind:value={$data[$index].paatrataNaam[1][2]}
          />
        </div>
      </div>
      <p>
        (ગુ.મુ.સેવા (પેન્શન) નિયમો -૨૦૦૨ના નિયમ -૯૧ (૫) નિયમ -૯૨ ની શરતો
        પરિપૂર્ણ થતી હોય તો)
      </p>
    </div>
  </div>
  <div>
    <p>જો નિયુક્ત સગીર હોય તો:</p>
    <div>
      <div>
        <label for="sagir"> હા </label>
        <input type="checkbox" bind:checked={$data[$index].sagir} />
      </div>
      {#if $data[$index].sagir}
        <div>
          <label for="nayuktSagir"> જન્મ તારીખ </label>

          <div>
            <input
              type="number"
              min="1"
              max="31"
              bind:value={$data[$index].nayuktSagir[0]}
              placeholder="DD"
            />
            <input
              type="number"
              min="1"
              max="12"
              bind:value={$data[$index].nayuktSagir[1]}
              placeholder="MM"
            />
            <input
              type="number"
              min="1900"
              max="2100"
              bind:value={$data[$index].nayuktSagir[2]}
              placeholder="YYYY"
            />
          </div>
        </div>
        <div>
          <label for="sadarhu">
            સદરહુ રકમ જે વ્યક્તિને વાલી તરીકે આપવાની હોય તેનું નામ
          </label>
          <input type="text" bind:value={$data[$index].sadarhu} />
        </div>
        <textarea
          bind:value={$data[$index].sagirAddress}
          rows="3"
          cols="50"
          placeholder="સરનામું પીનકોડ સહિત"
        />
        <div>
          <label for="pentionerSatheSambandh"> પેન્શનર સાથે સંબંધ </label>

          <input
            type="text"
            bind:value={$data[$index].pentionerSatheSambandh}
            placeholder="પુત્રી"
          />
        </div>
      {/if}
    </div>
  </div>

  <NiyuktiTable index={$index} />
  <div>
    ભાગ - 2: (19)
    <Bhaag_2_19 />
  </div>
  <div>
    ભાગ - 2: (P5)
    <Bhaag_2_P5 />
  </div>
  <div>
    ભાગ - 2: (P7)
    <Bhaag_2_P7 />
  </div>
  <div>
    Age: <Bhaag_2_P8 />
  </div>
  <div>
    લાભોમાથી કપાત કરવાની વિગત
    <Bhaag_2_P9 />
  </div>
</div>

<style>
  .no-print > div {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-gap: 1rem;
    margin: 1rem 0;
  }
  .dark {
    background-color: darkslateblue;
    color: #fff;
    padding: 1rem;
    margin: 1rem 0;
  }
  h1 {
    text-align: center;
    color: rgb(153, 227, 230);
  }
</style>
