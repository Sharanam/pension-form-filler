<script>
    // @ts-nocheck

    import { dateString } from "../tools/dateString";
    import FamilyMembers from "./FamilyMembers.svelte";
    import KarmchariDarjjo from "./KarmchariDarjjo.svelte";
    export let file, index;
</script>

<div class="no-print dark">
    <h1>અહીં વિગતો દાખલ કરો.</h1>
    <div>
        ૧ કર્મચારીનું નામ:
        <div>
            <input
                type="text"
                placeholder=" અટક "
                bind:value={file[index].karmchariNaam[0]}
            />
            <input
                type="text"
                placeholder=" નામ "
                bind:value={file[index].karmchariNaam[1]}
            />
            <input
                type="text"
                placeholder=" પિતા/ પતિનું નામ "
                bind:value={file[index].karmchariNaam[2]}
            />
        </div>
    </div>
    <div>
        ૨ કર્મચારીનો હોદ્દો:
        <input type="text" bind:value={file[index].karmchariHoddo} />
    </div>
    <div>
        ૩ કચેરીનું નામ:
        <input type="text" bind:value={file[index].kacheriNaam} />
    </div>
    <div>
        ૪ ખાતું:
        <input type="text" bind:value={file[index].khaatu} />
    </div>
    <div>
        ૫ વિભાગ:
        <input type="text" bind:value={file[index].vibhaag} />
    </div>
    <div>
        ૬ જન્મ તારીખ : આંકડામાં:
        <input
            type="date"
            value={dateString(
                file[index].janmTarikh[2],
                file[index].janmTarikh[1],
                file[index].janmTarikh[0]
            )}
            on:change={(e) => {
                let date = e.target.value.split("-");
                file[index].janmTarikh = [date[2], date[1], date[0]];
            }}
        />
    </div>
    <div>
        ૭ નોકરીમા દાખલ તારીખ:
        <input
            type="date"
            value={dateString(
                file[index].nokriDakhalTarikh[2],
                file[index].nokriDakhalTarikh[1],
                file[index].nokriDakhalTarikh[0]
            )}
            on:change={(e) => {
                let date = e.target.value.split("-");
                file[index].nokriDakhalTarikh = [date[2], date[1], date[0]];
            }}
        />
    </div>
    <div>
        ૮ નિવૃત્તિનો પ્રકાર:
        <input type="text" bind:value={file[index].nivrutiPrakar} />
    </div>
    <div>
        ૯ નિવૃત્તિની તારીખ:
        <input
            type="date"
            value={dateString(
                file[index].nivrutiTarikh[2],
                file[index].nivrutiTarikh[1],
                file[index].nivrutiTarikh[0]
            )}
            on:change={(e) => {
                let date = e.target.value.split("-");
                file[index].nivrutiTarikh = [date[2], date[1], date[0]];
            }}
        />
    </div>
    <div>
        ૧૦ સંત્રાત તારીખ:
        <input
            type="date"
            value={dateString(
                file[index].santrat[2],
                file[index].santrat[1],
                file[index].santrat[0]
            )}
            on:change={(e) => {
                let date = e.target.value.split("-");
                file[index].santrat = [date[2], date[1], date[0]];
            }}
        />
    </div>
    <div>
        ૧૧ અવસાન તારીખ:
        <input
            type="date"
            value={dateString(
                file[index].avsaanTarik[2],
                file[index].avsaanTarik[1],
                file[index].avsaanTarik[0]
            )}
            on:change={(e) => {
                let date = e.target.value.split("-");
                file[index].avsaanTarik = [date[2], date[1], date[0]];
            }}
        />
    </div>
    <div>
        <div class="no-space">
            <p>પત્રવ્યવહારનું સરનામું</p>
            <p>(પીનકોડ ટેલીફોન નંબર સાથે )</p>
        </div>
        <textarea bind:value={file[index].address} rows="3" cols="50" />
    </div>
    <KarmchariDarjjo bind:file bind:index />
    <FamilyMembers bind:file bind:index />
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
