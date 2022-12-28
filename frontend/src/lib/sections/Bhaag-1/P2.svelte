<script>
    // @ts-nocheck

    import { data } from "../../globalState/data";
    import FamilyMembers from "../../commonElements/FamilyMembers.svelte";
    import { toGujarati } from "../../tools/toGujarati";
    import { toString } from "../../tools/toString";
    import LocalFooter from "./LocalFooter.svelte";
    export let index;
</script>

<div class="page-break-before">
    <table style="width: 100%;">
        <tr>
            <td>૯ </td>
            <td colspan="5">
                <p>
                    જીલ્લા/ પેટા તિજોરીએથી પેન્શન મેળવવા માંગતા હોય તેનું નામ
                    <b>
                        {$data[index].petaTijori ||
                            $data[index].jillo ||
                            ".".repeat(30)}
                    </b>
                </p>
                <p>
                    જિલ્લો <b>{$data[index].jillo || ".".repeat(30)}</b>
                    તાલુકો <b>{$data[index].taluko || ".".repeat(30)}</b>
                </p>
            </td>
        </tr>
        <tr>
            <td>૧૦</td>
            <td colspan="5">
                <p>
                    હું મારા મળવાપાત્ર પેન્શનના
                    <b>
                        {toGujarati($data[index].mudikrut || "") ||
                            ".".repeat(10)} ટકા
                    </b>
                    ભાગનું મૂડીકૃત રૂપાંતર કરી રૂપાંતરની કિંમત આપવા આજ તા.
                    {toGujarati(
                        toString($data[index].mudikrutTarikh, "/") || ""
                    ) || ".".repeat(40)}
                    ના રોજ વિનંતી કરું છું.
                </p>
                <p>
                    નોંધ: પેન્શનના રૂપાંતરની અરજી નિવૃત્તિની તારીખ પછીના ૧૨ માસ
                    પછી કરવામાં આવે તો મેડીકલ બોર્ડના પ્રમાણપત્ર સાથે ફોર્મ
                    નં.-૧૬માં અરજી સામેલ કરવાની રહેશે.
                </p>
            </td>
        </tr>
        <tr>
            <td>૧૧</td>
            <td colspan="5">
                <p>
                    કુટુંબની વિગતો :ગુ.મુ.સેવા (પેન્શન) નિયમો-૨૦૦૨ ના નિયમ-૮૯
                    મુજબ તા. {toGujarati(
                        toString($data[index].mudikrutTarikh, "/") || ""
                    ) || ".".repeat(40)}
                    ના દીવસે મરા કુટુંબના સભ્યોની વિગત નીચે પ્રમાણે છે.
                </p>
            </td>
        </tr>
    </table>
    <FamilyMembers i={index} />
    <table style="width: 100%;">
        <tr>
            <td />
            <td colspan="5">
                <p>
                    હું બાહેંધરીપૂર્વક જાહેર કરું છું કે, મારા કુટુંબની વિગતો
                    આજની તારીખે ઉપર મુજબ છે. તેમાં કોઈ પણ ફેરફાર થશે તો કચેરીના/
                    ખાતાના વડાને તેની જાણ કરીશ.
                </p>
            </td>
        </tr>
        <tr>
            <td> ૧૨ </td>
            <td colspan="5">
                <p>
                    સરકારશ્રીના નાણા વિભાગના તા.૨૩-૬-૨૦૦૦ ના ઠરાવ ક્રમાંકઃ
                    ડીપીપી/૧૦૯૯/૪૯૬/૬૪૫(૪)પી મુજબ નિયત નમૂનામાં વારસ નિયુક્તિ
                    ફોર્મની પ્રમાણિત નકલ આ સાથે સામેલ રાખું છું.
                </p>
            </td>
        </tr>
        <tr>
            <td> ૧૩ </td>
            <td colspan="5">
                <p>
                    મારા પુત્ર / પુત્રી / કુમારી
                    <b>
                        {$data[index].apangSabhya || ".".repeat(40)}
                    </b>- અંધ અપંગ/મંદબુદ્ધિના છે તેને લાગતું સિવિલ સર્જનનું
                    દાકતરી પ્રમાણપત્ર સામેલ રાખેલ છે, તેઓ જીવન નિર્વાહ પૂરતું
                    કમાવા માટે અશક્તિમાન છે. તેમને કુટુંબપેન્શન ચૂકવવાનો પ્રસંગ
                    ઉપસ્થિત થાય ત્યારે તેમના વળી તરીકે શ્રી/શ્રીમતિ .
                    <b>
                        {$data[index].vali || ".".repeat(123)}
                    </b>
                    ને ફરજ બજાવવા નીકું છું.
                </p>
                <p>ગુ,મુ.સેવા (પેન્શન) નિયમોના નિયમ-૯૩</p>
            </td>
        </tr>
        <tr>
            <td> ૧૪ </td>
            <td colspan="5">
                <p>
                    ઉપર જણાવેલ નિયમોમાં ફેરફાર કે સુધારા વધારા થાય તેવા પ્રસંગે
                    પેન્શન એન પ્રોવિડંડ ફંડ નિયામકશ્રી/કચેરીના વડા તેમજ
                    સંબંધકર્તાને જાણ કરી અદ્યતન રાખવાની બાહેંધરી આપું છું. ઉપરની
                    વિગતો મારી કચેરીના વડા સમક્ષ આજ તારીખ {new Date(
                        $data[index].mudikrutTarikh[2],
                        $data[index].mudikrutTarikh[1] - 1,
                        $data[index].mudikrutTarikh[0]
                    ).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                    })} ઉપસ્થિત થઇ પેન્શનની કાર્યવાહી અર્થે આપું છું. (કર્મચારીની
                    માંદગી પ્રસંગે કે બહારગામ ગયા હોય તેવા પ્રસંગે પ્રતિનિધિ અથવા
                    ટપાલ મારફતે ઉપરની વિગતો મોકલી આવી શકાશે)
                </p>
            </td>
        </tr>
    </table>
    <LocalFooter {index} />
</div>

<style>
    td {
        vertical-align: top;
    }
</style>
