<script>
    import { toString } from "../../tools/toString";

    export let file, index;
</script>

<div>
    <h2 class="center">પ્રમાણપત્રો</h2>
    <p>
        (૧) આથી સમગ્રપણે ખાતરી કરી પ્રમાણિત કરવામાં આવે છે કે આજની તારીખે
        શ્રી/શ્રીમતિ <u
            >{toString(file[index].karmchariNaam, " ") || ".".repeat(40)}
        </u>
        હોદ્દો
        <u>
            {file[index].karmchariHoddo || ".".repeat(40)}
        </u> પાસે કશું લેણું બાકી નથી.
    </p>
    <div style="margin-top: 5em;">
        <table class="layed-out">
            <tr>
                <td />
                <td> પેન્શન મંજુર કરનાર અધિકારીશ્રીની સહી </td>
            </tr>
            <tr>
                <td> કચેરીનું સીલ : </td>
                <td> નામ: </td>
            </tr>
            <tr>
                <td> તારીખ : </td>
                <td>હોદો :</td>
            </tr>
        </table>
    </div>
</div>

<div class="center page-break-before">
    <p>પેન્શનરની ઓળખની નિશાની / ઊંચાઈ | સહીના નમૂના અને ફોટા</p>
    <p>
        (ગુજરાત મુલ્કી સેવા (પેન્શન) નિયમો,૨૦૦૨ના નિયમો-૧૩૬,૧૩૭, અને ૧૩૮ તથા
        ફોર્મ-૨૧) કલર ફોટો, સાઈઝ 4.5 cm x 3.5 cm સાઈઝનો ફોટો જેનું બેકગ્રાઉન્ડ
        સફેદ હોવું જોઈએ
    </p>

    <p>
        ( જો પેન્શનર સગીર કે માનસિક અપંગ હોય તો જ વાલીનો ફોટો ચોટાડવાનો રહેશે)
    </p>
</div>
<div>
    શ્રી/શ્રીમતી
    <u>{toString(file[index].karmchariNaam, " ") || ".".repeat(40)} </u>
    હોદ્દો

    <u>
        {file[index].karmchariHoddo || ".".repeat(40)}
    </u>કચેરી / ખાતુ । વિભાગ
    <u
        >{toString(
            [file[index].kacheriNaam, file[index].khaatu, file[index].vibhaag],
            " "
        ) || ".".repeat(40)}
    </u>
    નિવૃત્તિ તારીખ {toString(file[index].nivrutiTarikh, "/") || ".".repeat(16)}
    <hr />
    <div class="box">
        <div>
            ઓળખની અંગત નિશાની
            <div class="image-box">
                <input class="no-print" type="file" />
            </div>
        </div>
        <div>
            ઉંચાઇ
            <div class="image-box">
                <input class="no-print" type="file" />
            </div>
        </div>
        <div>
            સહીનો નમુનો
            <div class="image-box">
                <input class="no-print" type="file" />
            </div>
        </div>
    </div>
    <div class="box">
        <div>
            સંયુક્ત ફોટો
            <div class="image-box">
                <input class="no-print" type="file" />
            </div>
        </div>
        <div>
            વાલીનો ફોટો
            <div class="image-box">
                <input class="no-print" type="file" />
            </div>
        </div>
    </div>
</div>

<style>
    div.image-box {
        min-width: 4.5cm;
        min-height: 3.5cm;
        border: 1px solid black;
    }
    div.box {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
</style>
