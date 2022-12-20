<script>
    // @ts-nocheck

    import { dateString } from "../tools/dateString";
    import FamilyMembers from "../commonElements/FamilyMembers.svelte";
    import KarmchariDarjjo from "../commonElements/KarmchariDarjjo.svelte";
    import { data, index } from "../globalState/data";
</script>

<div class="no-print dark">
    <h1>અહીં વિગતો દાખલ કરો.</h1>
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
        <input type="text" bind:value={$data[$index].karmchariHoddo} />
    </div>
    <div>
        ૩ કચેરીનું નામ સરનામું અને ફોન નંબર : (પીન કોડ નંબર સાથે)
        <textarea
            bind:value={$data[$index].kacheriNaam}
            placeholder="કચેરીનું નામ સરનામું અને ફોન નંબર : (પીન કોડ નંબર સાથે)"
        />
    </div>
    <div>
        ૪ ખાતું:
        <input type="text" bind:value={$data[$index].khaatu} />
    </div>
    <div>
        ૫ વિભાગ:
        <input type="text" bind:value={$data[$index].vibhaag} />
    </div>
    <div>
        ૬ જન્મ તારીખ : આંકડામાં:
        <div>
            <input
                type="text"
                placeholder="dd"
                bind:value={$data[$index].janmTarikh[0]}
            />
            <input
                type="text"
                placeholder="mm"
                bind:value={$data[$index].janmTarikh[1]}
            />
            <input
                type="text"
                placeholder="yyyy"
                bind:value={$data[$index].janmTarikh[2]}
            />
        </div>
    </div>
    <div>
        ૭ નોકરીમા દાખલ તારીખ:
        <div>
            <input
                type="text"
                placeholder="dd"
                bind:value={$data[$index].nokriDakhalTarikh[0]}
            />
            <input
                type="text"
                placeholder="mm"
                bind:value={$data[$index].nokriDakhalTarikh[1]}
            />
            <input
                type="text"
                placeholder="yyyy"
                bind:value={$data[$index].nokriDakhalTarikh[2]}
            />
        </div>
    </div>
    <div>
        ૮ નિવૃત્તિનો પ્રકાર:
        <input type="text" bind:value={$data[$index].nivrutiPrakar} />
    </div>
    <div>
        ૯ નિવૃત્તિની તારીખ:
        <div>
            <input
                type="text"
                placeholder="dd"
                bind:value={$data[$index].nivrutiTarikh[0]}
            />
            <input
                type="text"
                placeholder="mm"
                bind:value={$data[$index].nivrutiTarikh[1]}
            />
            <input
                type="text"
                placeholder="yyyy"
                bind:value={$data[$index].nivrutiTarikh[2]}
            />
        </div>
    </div>
    <div>
        ૧૦ સંત્રાત તારીખ:
        <input
            type="date"
            value={dateString(
                $data[$index].santrat[2],
                $data[$index].santrat[1],
                $data[$index].santrat[0]
            )}
            on:change={(e) => {
                let date = e.target.value.split("-");
                $data[$index].santrat = [date[2], date[1], date[0]];
            }}
        />
    </div>
    <div>
        ૧૧ અવસાન તારીખ:
        <input
            type="date"
            value={dateString(
                $data[$index].avsaanTarik[2],
                $data[$index].avsaanTarik[1],
                $data[$index].avsaanTarik[0]
            )}
            on:change={(e) => {
                let date = e.target.value.split("-");
                $data[$index].avsaanTarik = [date[2], date[1], date[0]];
            }}
        />
    </div>
    <div>
        <div class="no-space">
            <p>પત્રવ્યવહારનું સરનામું</p>
            <p>(પીનકોડ ટેલીફોન નંબર સાથે )</p>
        </div>
        <textarea bind:value={$data[$index].address} rows="3" cols="50" />
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
                type="text"
                bind:value={$data[$index].mudikrut}
                placeholder="% મૂડીકૃત રૂપાંતર"
            />
        </div>
    </div>
    <div>
        <label for="dateOfSubmission"> રૂપાંતરની તારીખ (આજ રોજ): </label>
        <div>
            <input
                type="text"
                bind:value={$data[$index].mudikrutTarikh[0]}
                placeholder="dd"
            />
            <input
                type="text"
                placeholder="mm"
                bind:value={$data[$index].mudikrutTarikh[1]}
            />
            <input
                type="text"
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
                />- અંધ અપંગ/મંદબુદ્ધિના છે તેને લાગતું સિવિલ સર્જનનું દાકતરી
                પ્રમાણપત્ર સામેલ રાખેલ છે, તેઓ જીવન નિર્વાહ પૂરતું કમાવા માટે
                અશક્તિમાન છે. તેમને કુટુંબપેન્શન ચૂકવવાનો પ્રસંગ ઉપસ્થિત થાય
                ત્યારે તેમના વળી તરીકે શ્રી/શ્રીમતિ .
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
        <p>જો નિયુક્ત સગીર હોય તો:</p>
        <div>
            <div>
                <label for="sagir"> હા </label>
                <input type="checkbox" bind:checked={$data[$index].sagir} />
            </div>
            {#if $data[$index].sagir}
                <div>
                    <label for="nayuktSagir"> જન્મ તારીખ </label>
                    <!-- <input
                        type="date"
                        value={dateString(
                            $data[$index].nayuktSagir[2],
                            $data[$index].nayuktSagir[1],
                            $data[$index].nayuktSagir[0]
                        )}
                        on:change={(e) => {
                            let date = e.target.value.split("-");
                            $data[$index].nayuktSagir = [
                                date[2],
                                date[1],
                                date[0],
                            ];
                        }}
                    /> -->
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
                    <label for="pentionerSatheSambandh">
                        પેન્શનર સાથે સંબંધ
                    </label>

                    <input
                        type="text"
                        bind:value={$data[$index].pentionerSatheSambandh}
                        placeholder="પુત્રી"
                    />
                </div>
            {/if}
        </div>
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
