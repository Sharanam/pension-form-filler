<script>
    export let index;
    import { data } from "../../globalState/data";
    import { toString } from "../../tools/toString";
    import LocalFooter from "./LocalFooter.svelte";
</script>

<div class="page-break-before">
    <div class="center" style="margin-top: 10px;">
        <h2>પેન્શન કેસ</h2>
        <h3>ભાગ - ૧</h3>
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
        હું
        <u
            >
            {toString($data[index]?.karmchariNaam[0], " ") ||
                toString($data[index]?.karmchariNaam[1], " ") ||
                ".".repeat(50)}
                </u
        >
        હોદ્દો
        <u>{$data[index].karmchariHoddo[1] || ".".repeat(44)}</u> તારીખ
        <u>
            {toString($data[index].nivrutiTarikh, "/") || ".".repeat(54)}
        </u>
        ના રોજ વય નિવૃત્ત/સ્વૈચ્છિક નિવૃત્તિના કારણે નિવૃત્ત થાઉં છુ. મારા પેન્શન
        મંજુરી અર્થે નીચે મુજબની માહીતે ગુ.મુ.સેવા (પેન્શન) નિયમોના નિયમો ૧૨૮(૧)
        મુજબ રજું કરુ છું.
    </p>
    <table style="width: 100%;">
        <tr>
            <td style="width: min-content;">૧</td>
            <td colspan="2">
                <span style="display: block">
                    સરકારી કર્મચારીનું નામ :
                </span>(સેવાપોથીમાં નોંધ્યા પ્રમાણે જો સુધારેલ હોય તો ગેઝેટનો
                આધાર રાખવો)
            </td>
            <td>
                <span style="display:block"> અટક </span>
                <b>{$data[index].karmchariNaam[0][1] || ".".repeat(20)}</b>
            </td>
            <td>
                <span style="display:block"> નામ </span>
                <b>{$data[index].karmchariNaam[0][2] || ".".repeat(20)}</b>
            </td>
            <td>
                <span style="display:block"> પિતા/ પતિનું નામ </span>
                <b>{$data[index].karmchariNaam[0][3] || ".".repeat(20)}</b>
            </td>
        </tr>
        <tr>
            <td>૨</td>
            <td> હોદ્દો </td>
            <td colspan="5">
                {$data[index].karmchariHoddo[1] || ".".repeat(44)}
            </td>
        </tr>
        <tr>
            <td>૩</td>
            <td colspan="2">
                <div class="no-spacing">
                    <p>કચેરીનું નામ સરનામું અને ફોન નંબર :</p>
                    <p>(પીન કોડ નંબર સાથે)</p>
                </div>
            </td>
            <td colspan="5" class="no-spacing">
                {#if $data[index].kacheriNaam[0]}
                    {#each $data[index].kacheriNaam[0]?.split("\n") as kacheri}
                        <span style="display: block;">
                            {kacheri || ".".repeat(100)}
                        </span>
                    {/each}
                {/if}
            </td>
        </tr>
        <tr>
            <td>૪</td>
            <td>જન્મ તારીખ </td>
            <td>
                <span> DD </span>
                <b class="border field">
                    {$data[index].janmTarikh[0] || "."}
                </b>
            </td>
            <td>
                <span style="display:block"> MM </span>
                <b class="border field">
                    {$data[index].janmTarikh[1] || "."}
                </b>
            </td>
            <td>
                <span style="display:block"> YYYY </span>
                <b class="border field">
                    {$data[index].janmTarikh[2] || "."}
                </b>
            </td>
        </tr>
        <tr>
            <td>૫</td>
            <td> નોકરીમા દાખલ તારીખ </td>

            <td colspan="4">
                <b class="border field">
                    {toString($data[index].nokriDakhalTarikh, "/") || "."}
                </b>
            </td>
        </tr>
        <tr>
            <td>૬</td>
            <td> સત્રાંત નિવૃત્તિની તારીખ : </td>
            <td colspan="4">
                <b class="border field">
                    {toString($data[index].nivrutiTarikh, "/") || "."}
                </b>
            </td>
        </tr>
        <tr>
            <td>૭</td>
            <td colspan="5">
                <div class="no-spacing">
                    <p>
                        મારા યોગ્ય રીતે શાખ કરાવેલ / પ્રમાણિત કરાવેલા નીચેના
                        દસ્તાવેજોની ત્રણ નકલ સામેલ છે.
                    </p>
                    <p class="indent">
                        (૧) ગુજરાતી તેમજ અંગ્રેજીમાં સહીના ત્રણ નમૂના
                    </p>
                    <p class="indent">
                        (૨) પતિ પત્નીના પાસપોર્ટ સાઈઝના ત્રણ સંયુક્ત ફોટોગ્રાફસ
                    </p>
                    <p class="indent">(3) ઊંચાઈ - અંગત ઓળખચિહ્ન</p>
                </div>
            </td>
        </tr>

        <tr>
            <td>૮</td>
            <td>
                <p>પત્રવ્યવહારનું સરનામું</p>
                (પીનકોડ ટેલીફોન નંબર સાથે)
            </td>
            <td colspan="5">
            
                <b>
                {toString($data[index]?.karmchariNaam[0], " ") ||
                toString($data[index]?.karmchariNaam[1], " ") ||
                ".".repeat(50)}
                    {#if $data[index].address}
                        {#each $data[index].address.split("\n") as line}
                            <span style="display:block">{line}</span>
                        {/each}
                    {:else}
                        {`${".".repeat(100)}\n`.repeat(4)}
                    {/if}
                </b>
            </td>
        </tr>
    </table>
    <LocalFooter {index} />
</div>

<style>
    .field {
        display: block;
        margin: 0.2em;
        min-width: min(4rem, 3ch);
    }
    td {
        vertical-align: top;
    }
</style>
