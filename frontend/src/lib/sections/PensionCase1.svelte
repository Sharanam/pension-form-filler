<script>
    // @ts-nocheck
    import FamilyMembers from "../interface/FamilyMembers.svelte";
    import { dateString } from "../tools/dateString";
    import { toGujarati } from "../tools/toGujarati";
    import { toString } from "../tools/toString";

    export let file, index;
    $: kNaam = toString(file[index].karmchariNaam, " ");
</script>

<div class="page border">
    <div class="center no-spacing">
        <h2>પેન્શન કેસ - ૧</h2>
        <h2><u>ભાગ - ૧</u></h2>
        <p>
            વય નિવૃત્તિને કારણે નિવૃત્ત થતાં કર્મચારીએ ૨૪ માસ પહેલાં અને
            સ્વૈચ્છિક નિવૃત્તિ લેતાં કર્મચારીએ સ્વૈચ્છિક નિવૃત્તિ તારીખ પછી
            તુરતજ તેમની કચેરીના વડાને નિવૃત્તિના લાભો મેળવવા માટે આપવાનું અરજી
            ફોર્મ
        </p>
    </div>
    <div class="no-spacing">
        <p>પ્રતિ,</p>
        <p>ઉચ્ચ શિક્ષણ કમિશ્નરશ્રી, જુના સચિવાલય,</p>
        <p>ગાંધીનગર.</p>
    </div>
    <p class="indent">
        હું શ્રી/શ્રીમતી
        {kNaam || ".".repeat(60)}
        હોદ્દો
        {file[index].karmchariHoddo || ".".repeat(44)} તારીખ {file[
            index
        ].avsaanTarik
            ?.filter((v) => v.trim())
            ?.join("/") || ".".repeat(54)}
        ના રોજ વય નિવૃત્ત/સ્વૈચ્છિક નિવૃત્તિના કારણે નિવૃત્ત થાઉં છુ. મારા પેન્શન
        મંજુરી અર્થે નીચે મુજબની માહીતે ગુ.મુ.સેવા (પેન્શન) નિયમોના નિયમો ૧૨૮(૧)
        મુજબ રજું કરુ છું.
    </p>
    <table class="layed-out">
        <tr>
            <td>
                <span style="display: block">
                    ૧ સરકારી કર્મચારીનું નામ :
                </span>(સેવાપોથીમાં નોંધ્યા પ્રમાણે જો સુધારેલ હોય તો ગેઝેટનો
                આધાર રાખવો)
            </td>
            <td>
                <span style="display:block"> અટક </span>
                <b>{file[index].karmchariNaam[0] || ".".repeat(48)}</b>
            </td>
            <td>
                <span style="display:block"> નામ </span>
                <b>{file[index].karmchariNaam[1] || ".".repeat(48)}</b>
            </td>
            <td>
                <span style="display:block"> પિતા/ પતિનું નામ </span>
                <b>{file[index].karmchariNaam[2] || ".".repeat(48)}</b>
            </td>
        </tr>
        <tr>
            <td>૨ હોદ્દો </td>
            <td colspan="3">
                {file[index].karmchariHoddo || ".".repeat(44)}
            </td>
        </tr>
        <tr>
            <td>
                ૩ કચેરીનું નામ સરનામું અને ફોન નંબર : (પીન કોડ નંબર સાથે )
            </td>
            <td colspan="3">
                <b
                    >{file[index].kachariNaam ||
                        `${".".repeat(100)}\n`.repeat(3)}</b
                >
            </td>
        </tr>
        <tr>
            <td>૪ જન્મ તારીખ </td>
            <td>
                <span> DD </span>
                <b class="border field">
                    {file[index].janmTarikh[0] || "."}
                </b>
            </td>
            <td>
                <span style="display:block"> MM </span>
                <b class="border field">
                    {file[index].janmTarikh[1] || "."}
                </b>
            </td>
            <td>
                <span style="display:block"> YYYY </span>
                <b class="border field">
                    {file[index].janmTarikh[2] || "."}
                </b>
            </td>
        </tr>
        <tr>
            <td> ૫ નોકરીમા દાખલ તારીખ </td>

            <td colspan="3">
                <b class="border field">
                    {toString(file[index].nokriDakhalTarikh, "/") || "."}
                </b>
            </td>
        </tr>
        <tr>
            <td> ૬ નિવૃત્તિની તારીખ : </td>
            <td colspan="3">
                <b class="border field">
                    {toString(file[index].nivrutiTarikh, "/") || "."}
                </b>
            </td>
        </tr>
        <tr>
            <td>
                <p class="indent">સત્રાંત</p>
            </td>
            <td colspan="3">
                <b class="border field">
                    {toString(file[index].santrat, "/") || "."}
                </b>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <p>
                    ૭ મારા યોગ્યરીતે શાખ કરાવેલ / પ્રમાણિત કરાવેલા નીચેના
                    દસ્તાવેજોની ત્રણ નકલ સામેલ છે.
                </p>
                <p class="indent">
                    (૧) ગુજરાતી તેમજ અંગ્રેજીમાં સહીના ત્રણ નમૂના
                </p>

                <p class="indent">
                    (૨) પતિ પત્નીના પાસપોર્ટ સાઈઝના ત્રણ સંયુક્ત ફોટોગ્રાફસ
                </p>

                <p class="indent">(3) ઊંચાઈ - અંગત ઓળખચિહ્ન</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>૮ પત્રવ્યવહારનું સરનામું</p>
                (પીનકોડ ટેલીફોન નંબર સાથે )
            </td>
            <td colspan="3">
                <b>
                    {file[index].address || `${".".repeat(100)}\n`.repeat(3)}
                </b>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <p style="margin-top: 5em;">કચેરીનું સીલ :</p>
            </td>
            <td colspan="2">
                <p style="margin-top: 5em;">કર્મચારીની સહી :</p>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <p>
                    ૯ જીલ્લા/ પેટા તિજોરીએથી પેન્શન મેળવવા માંગતા હોય તેનું નામ
                    <b>
                        {file[index].petaTijori ||
                            file[index].jillo ||
                            ".".repeat(40)}
                    </b>
                </p>
                <p>
                    જિલ્લો <b>{file[index].jillo || ".".repeat(40)}</b>
                    તાલુકો <b>{file[index].taluko || ".".repeat(40)}</b>
                </p>
            </td>
        </tr>

        <!-- needs to be discussed  -->
        <tr>
            <td colspan="4">
                <p>
                    ૧૦ હું મારા મળવાપાત્ર પેન્શનના
                    <b>
                        {toGujarati(file[index].mudikrut || "") ||
                            ".".repeat(10)} ટકા
                    </b>
                    ભાગનું મૂડીકૃત રૂપાંતર કરી રૂપાંતરની કિંમત આપવા આજ તા.
                    {toGujarati(
                        dateString(
                            file[index].mudikrutTarikh[2],
                            file[index].mudikrutTarikh[1],
                            file[index].mudikrutTarikh[0]
                        ) || ""
                    )
                        .split("-")
                        .reverse()
                        .join("-") || ".".repeat(40)}
                    ના રોજ વિનંતી કરું છું.
                </p>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <p>
                    નોંધ: પેન્શનના રૂપાંતરની અરજી નિવૃત્તિની તારીખ પછીના ૧૨ માસ
                    પછી કરવામાં આવે તો મેડીકલ બોર્ડના પ્રમાણપત્ર સાથે ફોર્મ
                    નં.-૧૬માં અરજી સામેલ કરવાની રહેશે.
                </p>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <p>
                    ૧૧ કુટુંબની વિગતો :ગુ.મુ.સેવા (પેન્શન) નિયમો-૨૦૦૨ ના નિયમ-૮૯
                    મુજબ
                </p>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                તા. {toGujarati(
                    dateString(
                        file[index].mudikrutTarikh[2],
                        file[index].mudikrutTarikh[1],
                        file[index].mudikrutTarikh[0]
                    ) || ""
                )
                    .split("-")
                    .reverse()
                    .join("-") || ".".repeat(40)}
                ના દીવસે મરા કુટુંબના સભ્યોની વિગત નીચે પ્રમાણે છે.
            </td>
        </tr>
    </table>
    <FamilyMembers bind:index bind:file />
    <p>
        હું બાહેંધરીપૂર્વક જાહેર કરું છું કે, મારા કુટુંબની વિગતો આજની તારીખે
        ઉપર મુજબ છે. તેમાં કોઈ પણ ફેરફાર થશે તો કચેરીના/ ખાતાના વડાને તેની જાણ
        કરીશ.
    </p>
    <p>
        ૧૨ સરકારશ્રીના નાણા વિભાગના તા.૨૩-૬-૨૦૦૦ ના ઠરાવ ક્રમાંકઃ
        ડીપીપી/૧૦૯૯/૪૯૬/૬૪૫(૪)પી મુજબ નિયત નમૂનામાં વારસ નિયુક્તિ ફોર્મની
        પ્રમાણિત નકલ આ સાથે સામેલ રાખું છું.
    </p>
    <p>
        ૧૩ મારા પુત્ર / પુત્રી / કુમારી
        <b>
            {file[index].apangSabhya || ".".repeat(40)}
        </b>- અંધ અપંગ/મંદબુદ્ધિના છે તેને લાગતું સિવિલ સર્જનનું દાકતરી
        પ્રમાણપત્ર સામેલ રાખેલ છે, તેઓ જીવન નિર્વાહ પૂરતું કમાવા માટે અશક્તિમાન
        છે. તેમને કુટુંબપેન્શન ચૂકવવાનો પ્રસંગ ઉપસ્થિત થાય ત્યારે તેમના વળી
        તરીકે શ્રી/શ્રીમતિ .
        <b>
            {file[index].vali || ".".repeat(123)}
        </b>
        ને ફરજ બજાવવા નીકું છું.
    </p>
    <p>ગુ,મુ.સેવા (પેન્શન) નિયમોના નિયમ-૯૩</p>
    <p>
        ૧૪ ઉપર જણાવેલ નિયમોમાં ફેરફાર કે સુધારા વધારા થાય તેવા પ્રસંગે પેન્શન એન
        પ્રોવિડંડ ફંડ નિયામકશ્રી/કચેરીના વડા તેમજ સંબંધકર્તાને જાણ કરી અદ્યતન
        રાખવાની બાહેંધરી આપું છું. ઉપરની વિગતો મારી કચેરીના વડા સમક્ષ આજ તારીખ {new Date(
            file[index].mudikrutTarikh[2],
            file[index].mudikrutTarikh[1] - 1,
            file[index].mudikrutTarikh[0]
        ).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
        })} ઉપસ્થિત થઇ પેન્શનની કાર્યવાહી અર્થે આપું છું. (કર્મચારીની માંદગી પ્રસંગે
        કે બહારગામ ગયા હોય તેવા પ્રસંગે પ્રતિનિધિ અથવા ટપાલ મારફતે ઉપરની વિગતો મોકલી
        આવી શકાશે)
    </p>

    <table class="layed-out" style="margin: 4em 0;">
        <tr>
            <td>
                <p>સ્થળ :</p>
            </td>
            <td>
                <p>કચેરીના વડાની સહી :</p>
            </td>
            <td>
                <p>કર્મચારીની સહી :</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>તારીખ :</p>
            </td>
            <td>
                <p>નામ અને હોદ્દો :</p>
            </td>
            <td>
                <p>નામ અને હોદ્દો :</p>
            </td>
        </tr>
    </table>
    <p>૧૫ વારસ નિયુક્તિ</p>

    <div class="indent">
        <p>
            (૧) મારા અવસાનના તુરત પહેલાના પેન્શન અંગેના લાભો સંબંધેની તમામ
            પ્રકારની ચડત લેણી રકમ જેવી કે પેન્શનની નકી લેણી રકમ, પેનાનની મૂડીકૃત
            રૂપાંતરની રકમ, મૃત્યુ-સહ-નિવૃત્તિ ગ્રેચ્યુઈટીની ચૂકવણી માટે તેમજ
            નિવૃત્તિ બાદ મારા અવસાન પ્રસંગે મારા કુટુંબને સહત તરીકેની રકમ ચૂકવણી
            માટે હું આ સાથેની મારી નિયુક્તિની પ્રમાણિત નકલ મુજબ ચુકવણી કરવા
            વિનંતી કરે છે, નકલ સામેલ છે)
        </p>
        <p>(૨) જો નિયુક્ત સગીર હોય તો</p>
        <p class="indent">
            (ક) જન્મ તારીખ :
            {(file[index].sagir &&
                dateString(
                    file[index].nayuktSagir[2],
                    file[index].nayuktSagir[1],
                    file[index].nayuktSagir[0],
                    true
                )) ||
                ".".repeat(10)}
        </p>
        <p class="indent">
            (ખ) સગીર વય દરમ્યાન સદરહુ રકમ જે વ્યક્તિને વાલી તરીકે આપવાની હોય
            તેનું નામ: {file[index].sadarhu || ".".repeat(30)}
        </p>
        <p class="center">વાલી તરીકે નિયુક્તિનો</p>
        <p>
            (સરનામું પીનકોડ સહિત):
            {file[index].sagirAddress || ".".repeat(50)}
        </p>
        <p>
            (ગ) વાલી તરીકે નિયુક્તિનો પેન્શનર સાથે સંબંધ :
            {file[index].pentionerSatheSambandh || ".".repeat(30)}
        </p>
    </div>
    <div>
        <p>
            ૧૬ બાહેંધરીપત્ર : ગુ.યુ.સેવા (પેન્શન) નિયમોના નિયમ ( ૧૩૪ / ૧૩૫ ) આથી
            હું
            <u>{toString(file[index].karmchariNaam, " ") || ".".repeat(40)} </u>
            હોદ્દો
            <u>
                {file[index].karmchariHoddo || ".".repeat(40)}
            </u>
            બાહેંધરી ખત આપું છું કે, હું તા. {toString(
                file[index].nivrutiTarikh,
                "/"
            ) || ".".repeat(40)} ના રોજ નિવૃત્ત થાઉ છું. તે પછીથી મારી પાસેથી કોઈ
            પણ સરકારી લેણું જેવું કે, પગાર, રજા પગાર ભથ્થાં, લીધેલ પેશગીઓ, લોન, ઘરભાડા
            અંગે થયેલ અધિક ચૂકવણીઓ સામે બાકી રહેતી રકમ પગારધોરણની સુધારણા કરતા થયેલ
            અધિક ચુકવણી અથવા અન્ય સરકારી લેણુ બાકી જણાય તો તે મારા પેન્શના મૃત્યુ
            સાહ ગ્રેજયુઈટીમાંથી ભરપાઈ કરવા બાહેંધરી સંમતિ આપું છું. નિવૃત્તિ બાદ
            સરકારી રહેણાંક ચાલુ રહેવાની મંજુરી આપવામાં આવે તો વસૂલ કરવાપાત્ર થતું
            મકાનભાડું મને મંજૂર કરવામાં આવેલ પેન્શના કુટુંબ પેન્શન અને તે પર મળવાપાત્ર
            ટી.આઈ.નથી તિજોરી કક્ષાએ વસુલાત કરવા બાહેંધરી તેમજ સંમતિ આપું છું.
        </p>
        <table class="layed-out">
            <tr>
                <td> સ્થળ : </td>
                <td> કર્મચારીની સહી : </td>
            </tr>
            <tr>
                <td> તારીખ : </td>
                <td> નામ અને હોદ્દો : </td>
            </tr>

            <tr>
                <td> કચેરીના વડાની સહી : </td>
            </tr>
            <tr>
                <td> નામ અને હોદ્દો : . </td>
            </tr>
        </table>
    </div>
    <div>
        <p>
            ૧૯
            ....................................................................................
        </p>
    </div>
</div>

<style>
    .field {
        display: block;
        width: 80%;
        padding: 0 0.5em;
    }
</style>
