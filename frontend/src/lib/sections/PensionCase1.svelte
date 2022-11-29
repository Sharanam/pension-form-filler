<script>
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
    </table>
</div>

<style>
    .field {
        display: block;
        width: 80%;
        padding: 0 0.5em;
    }
</style>
