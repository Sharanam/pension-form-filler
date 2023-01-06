<script>
    // @ts-nocheck
    import KarmchariDarjjo from "../commonElements/KarmchariDarjjo.svelte";
    import { toGujarati } from "../tools/toGujarati";
    import { toString } from "../tools/toString";
    export let index;
    import { data } from "../globalState/data";
</script>

<div class="page-break-before ">
    <div class="center" style="margin-top: 10px;">
        <h2>પેન્શન કેસ</h2>
        <p>
            નાણાં વિભાગના તા.૩-૩-૨૦૦૭ના ઠરાવ ક્રમાંક ડીપીપી/૨૦૦૬/ડી-૨૦૧/પી નં
            પરિશિષ્ટ
        </p>
    </div>

    <table class="layed-out" style="width:100%;">
        <tr>
            <td>
                <div class="p-1 no-spacing" style="width:fit-content;">
                    <p>રજી.પી.એ.ડી / રુબરુ</p>
                    <p>પત્ર નં :____________________</p>
                    <p>મોકલનાર કચેરીનું નામ:</p>
                    <p class="indent">ઉચ્ચ શિક્ષણ કમિશનરશ્રી,</p>
                    <p class="indent">જુના સચિવાલય,ગાંધીનગર.</p>
                    <p>પ્રતિ,</p>
                    <p>પેન્શન અને પ્રોવિડન્ડ ફંડ નિયામકશ્રીની કચેરી</p>
                    <p>વિમાં અને લેખા ભવન, બ્લોક ન,૧૮, જીવરાજ મહેતા ભવન,</p>
                    <p>ગાંધીનગર ૩૮૨૦૧૦</p>
                </div>
            </td>
            <td>
                <div style="width:fit-content;  margin-top:0;">
                    <p>ડીપીપીએફ કચેરીના ઉપયોગ માટે માસ્ટર કોડ નં</p>
                    <div class="border" style="width: 100%; height:2em;" />
                </div>
            </td>
        </tr>
    </table>

    <div class="center no-spacin">
        <p>
            વિષય : તારીખ {toString($data[index]?.nivrutiTarikh, "/") ||
                ".".repeat(20)} ના રોજ નિવૃત્ત થનાર/ થયેલ/અવસાન પામેલ
            {toString($data[index]?.karmchariNaam[0], " ") ||
                toString($data[index]?.karmchariNaam[1], " ") ||
                ".".repeat(50)} ને મળવાપાત્ર પેન્શનની અધિકૃતિ કરવા બાબત
        </p>
    </div>
    <div>
        <p>મહાશય,</p>
        <p class="indent">
            ઉપરોક્ત વિષયે આ સાથે {toString(
                $data[index]?.karmchariNaam[0],
                " "
            ) ||
                toString($data[index]?.karmchariNaam[1], " ") ||
                ".".repeat(50)}
            કે જેઓ તારીખ {toGujarati(
                toString($data[index]?.nivrutiTarikh, "/") || ".".repeat(20)
            )} ના રોજ નિવૃત્ત થનાર/ થયેલ/ અવસાન પામેલ છે. તેમની નિયમાનુસારની માહિતી
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
    <KarmchariDarjjo {index} />
    <table class="layed-out">
        <tr>
            <td>
                <p>તારીખ :  {toString(new Date().toLocaleDateString("en-GB").split("/"), "/")}</p>
                <p>સ્થળ: વલ્લભ વિદ્યાનગર</p>
            </td>
            <td class="center">
                <p>કુલસચિવ</p>
                <p>સરદાર પટેલ યુનિવર્સિટી</p>
                <p>વલ્લભ વિદ્યાનગર</p>
            </td>
        </tr>
    </table>
    <p>
        નોંધ : પ્રતિનિયુક્ત ઉપરના કર્મચારીનો કેસ તેના મુળ ખાતે/કચેરી મોકલવાનો
        રહે છે. રાજ્ય સરકાર ગ્રાન્ટ ઇન એઇડ શાળા કોલેજના કમચારીઓના કેસ ડીપીપીએફને
        મોકલવાના રહેશે. અને જીલ્લા પંચાયત કર્મચારીઓ સંવર્ઘના કેસ જીલ્લા સહાયક
        નિરિક્ષકશ્રીને મોકલવાના રહેશે.
    </p>
</div>
