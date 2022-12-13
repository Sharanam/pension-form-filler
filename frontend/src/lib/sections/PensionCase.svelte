<script>
    // @ts-nocheck
    import KarmchariDarjjo from "../interface/KarmchariDarjjo.svelte";
    import { toGujarati } from "../tools/toGujarati";
    import { toString } from "../tools/toString";
    export let file, index;
    $: kNaam = toString(file[index].karmchariNaam, " ");
</script>

<div class="page border">
    <div class="center no-spacing">
        <h2>પેન્શન કેસ</h2>
        <p>ગુજરાત સરકાર, નાણા વિભાગ, ઠરાવ ક્રમાંક : ડીપીપી/૨૦૦૬/ડી-૨૦૧/પી,</p>
        <p>સચિવાલય, ગાંધીનગર, તા.૦૩-૦૩-૨૦૦૭</p>
    </div>

    <table class="layed-out" style="width:100%;">
        <tr>
            <td>
                <div class="border p-1" style="width:fit-content;">
                    <div>સાતમા પગાર પંચ મુજબના છેલ્લા સુધારા સાથે</div>
                </div>
            </td>
            <td>
                <div style="width:fit-content; margin-left:auto;">
                    <p>ડીપીપીએફની કચેરીએ ભરવાનું</p>
                    <table class="layed-out border">
                        <thead>
                            <tr>
                                <th class="p-1">માસ્ટર ક્રમાંક</th>
                                <th class="p-1">શાખા</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </td>
        </tr>
    </table>

    <div class="center no-spacing">
        <p>
            સરકારી રાજ્ય પત્રિત, સરકારી બિન રાજ્ય પત્રિત, વર્ક ચાર્જ કર્મચારી,
            જીલ્લા પંચાયત કર્મચારી,
        </p>
        <p>રોજમદાર કર્મચારી, પેન્શન પાત્ર ગ્રાન્ટ ઇન સંસ્થાના કર્મચારી</p>
    </div>
    <table class="layed-out">
        <tr>
            <td class="field-head"> ૧ કર્મચારીનું નામ </td>
            <td class="border">
                <p class="field">
                    <b>{kNaam || " "}</b>
                </p>
            </td>
        </tr>
        <tr>
            <td class="field-head">૨ કર્મચારીનો હોદ્દો</td>
            <td class="border">
                <p class="field">
                    <b>{file[index].karmchariHoddo || " "}</b>
                </p>
            </td>
        </tr>
        <tr>
            <td class="field-head">૩ કચેરીનું નામ</td>
            <td class="border">
                <p class="field" style="min-height:60px;">
                    <b>{file[index].kacheriNaam || " "}</b>
                </p>
            </td>
        </tr>
        <tr>
            <td class="field-head">૪ ખાતું</td>
            <td class="border">
                <p class="field">
                    <b>{file[index].khaatu || " "}</b>
                </p>
            </td>
        </tr>
        <tr>
            <td class="field-head">૫ વિભાગ</td>
            <td class="border">
                <p class="field">
                    <b>{file[index].vibhaag || " "}</b>
                </p>
            </td>
        </tr>

        <tr>
            <td class="field-head">૬ જન્મ તારીખ : આંકડામાં</td>
            <td>
                <p class="field">
                    <span class="border field-padding">
                        <b>{file[index].janmTarikh[0] || "."}</b>
                    </span>
                    <span class="border field-padding">
                        <b>{file[index].janmTarikh[1] || "."}</b>
                    </span>
                    <span class="border field-padding">
                        <b>{file[index].janmTarikh[2] || "."}</b>
                    </span>
                </p>
            </td>
        </tr>

        <tr>
            <td class="field-head">૭ નોકરીમા દાખલ તારીખ</td>

            <td>
                <p class="field">
                    <span class="border field-padding">
                        <b>{file[index].nokriDakhalTarikh[0] || "."}</b>
                    </span>
                    <span class="border field-padding">
                        <b>{file[index].nokriDakhalTarikh[1] || "."}</b>
                    </span>
                    <span class="border field-padding">
                        <b>{file[index].nokriDakhalTarikh[2] || "."}</b>
                    </span>
                </p>
            </td></tr
        >

        <tr>
            <td class="field-head">૮ નિવૃત્તિનો પ્રકાર</td>
            <td class="border">
                <p class="field">
                    <b>{file[index].nivrutiPrakar || " "}</b>
                </p>
            </td>
        </tr>

        <tr>
            <td class="field-head">૯ નિવૃત્તિની તારીખ</td>

            <td>
                <p class="field">
                    <span class="border field-padding">
                        <b>{file[index].nivrutiTarikh[0] || "."}</b>
                    </span>
                    <span class="border field-padding">
                        <b>{file[index].nivrutiTarikh[1] || "."}</b>
                    </span>
                    <span class="border field-padding">
                        <b>{file[index].nivrutiTarikh[2] || "."}</b>
                    </span>
                </p>
            </td>
        </tr>

        <tr>
            <td class="field-head">
                <p style="margin:auto; margin-left:2em;">સંત્રાત</p>
            </td>
            <td>
                <p class="field">
                    <span class="border field-padding">
                        <b>{file[index].santrat[0] || "."}</b>
                    </span>
                    <span class="border field-padding">
                        <b>{file[index].santrat[1] || "."}</b>
                    </span>
                    <span class="border field-padding">
                        <b>{file[index].santrat[2] || "."}</b>
                    </span>
                </p>
            </td>
        </tr>

        <tr>
            <td> ૧૦ અવસાન પામેલા કર્મચારીના કિસ્સામા અવસાન તારીખ </td>
            <td>
                <p class="field">
                    <span class="border field-padding">
                        <b>{file[index].avsaanTarik[0] || "."}</b>
                    </span>
                    <span class="border field-padding">
                        <b>{file[index].avsaanTarik[1] || "."}</b>
                    </span>
                    <span class="border field-padding">
                        <b>{file[index].avsaanTarik[2] || "."}</b>
                    </span>
                </p>
            </td>
        </tr>
    </table>
    <div>
        <p>
            ભાગ - ૧ નિવૃત્ત થતાં કર્મચારીએ નિવૃત્તિના ૨૪ માસ પહેલાં આપવાની વિગતો
        </p>
        <p>ભાગ-૨ કચેરી / ખાતાના વડે આપવાની વિગતો</p>
        <p>ભાગ-૩ અવસાન પામેલ કર્મચારીઓના કિસ્સામાં કુટુંબ પેન્શન માટેની અરજી</p>
        <p>ભાગ-૪ કચેરીના વડા દ્વારા કુટુંબ પેન્શન મંજૂરી</p>

        <div class="center no-spacing">
            <p>ભાગ-૫ પેન્શનપાત્ર બિન સરકારી કર્મચારીઓ માટેનું ફોર્મ</p>
            <p>
                નાણાં વિભાગના તા.૩-૩-૨૦૦૭ના ઠરાવ ક્રમાંક ડીપીપી/૨૦૦૬/ડી-૨૦૧/પી
                નં પરિશિષ્ટ
            </p>
        </div>
        <div class="bhaag-5-pachhi">
            <div>
                <p>રજી.પી.એ.ડી</p>
                <p>રુબરુ</p>
                <p>પત્ર નં :</p>
                <p>મોકલનાર કચેરીનું નામ :</p>
            </div>
            <div>
                <p>ડીપીપીએફ કચેરીના ઉપયોગ માટે માસ્ટર કોડ નં</p>
                <p class="border">.</p>
                <p>ઉચ્ચ શિક્ષણ કમિશનરશ્રી,</p>
                <p>જુના સચિવાલય</p>
                <p>ગાંધીનગર.</p>
            </div>
        </div>
        <div class="no-spacing">
            <p>પ્રતિ,</p>
            <p>પેન્શન અને પ્રોવિડન્ડ ફંડ નિયામકશ્રીની કચેરી</p>
            <p>વિમાં અને લેખા ભવન, બ્લોક ન,૧૮, જીવરાજ મહેતા ભવન,</p>
            <p>ગાંધીનગર ૩૮૨૦૧૦</p>
        </div>
        <div class="center">
            <p>
                વિષય : તારીખ
                <b>
                    {toString(file[index].nivrutiTarikh, "/") || ".".repeat(16)}
                </b>
                ના રોજ નિવૃત્ત થનાર/ થયેલ/અવસાન પામેલ શ્રી/શ્રીમતિ/સ્વ.
                <b>
                    {kNaam || ".".repeat(45)}
                </b>
                ને મળવાપાત્ર પેન્શનની અધિકૃતિ કરવા બાબત
            </p>
        </div>
        <p>મહાશય,</p>
        <p class="indent">
            ઉપરોક્ત વિષયે આ સાથે શ્રી/શ્રીમતિ/સ્વ.
            {kNaam || ".".repeat(45)}
            કે જેઓ તારીખ {toString(file[index].nivrutiTarikh, "/") ||
                toString(file[index].avsaanTarik, "/") ||
                "".repeat(45)}
            ના રોજ નિવૃત્ત થનાર/ થયેલ/ અવસાન પામેલ છે. તેમની નિયમાનુસારની માહિતી
            મેળવી પૈનાન પેપર્સ ભાગ-૧ કર્મચારીની વિગતો, ભાગ-૨ કચેરી સ્તરની વિગતો,
            ભાગ ૩ અવસાનના કેસ માટે ભાગ ૪ અવસાન કેસ માટે કચેરી સ્તરની વિગત ભાગ ૫ ગ્રાન્ટ
            ઇન એઇડ સંસ્થાના કર્મચારી માટે તૈયાર કરી (લાગુ ના પડતું છેંકી નાખવું)
            ગુ.મ.સેવા (પેન્શન)ના નિયમો-૨૦૦૯ ના નિયમ - (50) અનુસાર પેન્શન મંજૂર કરી
            સેવાપોથી સાથે મોકલેલ છે. તેઓને મળવાપાત્ર પેન્શન/કુટુંબ પેન્શન ગ્રેજ્યુઈટી,
            પેન્શનનું મૂડીકૃત રૂપાતર વગેરે રકમો અંગે ગુ.મુ,સેવા (પેન્શન) નિયમો-૨૦૦૨ના
            નિયમો ૧૨૮(૩) અન્વયે તિજોરી અધિકારીશ્રીને આપવાપાત્ર થતી અધિકૃતિઓ આપવા
            વિનંતી છે.
        </p>
    </div>
    <KarmchariDarjjo bind:file bind:index />

    <div style="margin-left:auto; width:fit-content;">
        <p style="margin: auto; width:fit-content">સહી</p>
        <p style="margin-top: 3em;">પેન્શન મંજુર કરનાર અધિકારી</p>
    </div>
    <div>
        <p>સ્થળ : {".".repeat(23)}</p>
        <p>
            તારીખ :
            <span
                on:click={(e) => {
                    e.target.contentEditable = true;
                    e.target.focus();
                }}
                on:blur={(e) => {
                    e.target.contentEditable = false;
                }}
                on:keydown={(e) => {
                    if (e.key === "Enter") {
                        e.target.contentEditable = false;
                        e.target.blur();
                    }
                }}
            >
                {toGujarati(new Date().toLocaleDateString("en-CA") || "")
                    .split("-")
                    .reverse()
                    .join("-")}
            </span>
        </p>
    </div>
    <div>
        <p>
            નોંધ : પ્રતિનિયુક્ત ઉપરના કર્મચારીનો કેસ તેના મુળ ખાતે/કચેરી
            મોકલવાનો રહે છે.
        </p>
        <p>
            રાજ્ય સરકાર ગ્રાન્ટ ઇન એઇડ શાળા કોલેજના કમચારીઓના કેસ ડીપીપીએફને
            મોકલવાના રહેશે. અને જીલ્લા પંચાયત કર્મચારીઓ સંવર્ઘના કેસ જીલ્લા
            સહાયક નિરિક્ષકશ્રીને મોકલવાના રહેશે.
        </p>
    </div>
</div>

<style>
    .field {
        display: block;
        margin: 0.2em;
        width: 100%;
    }
    .field-padding {
        padding: 0.2em;
        display: inline-block;
        min-width: 15em;
        min-height: 100%;
    }
    .field-head {
        width: 20%;
    }

    .bhaag-5-pachhi > * {
        display: inline-block;
        width: 50%;
    }
    .bhaag-5-pachhi {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex: 1 1 100%;
    }
</style>
