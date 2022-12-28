<script>
    // @ts-nocheck
    import { toGujarati } from "../tools/toGujarati";
    import { toString } from "../tools/toString";
    import { data } from "../globalState/data";

    export let index = 0;
    function updateAge(i) {
        let [dd, mm, yyyy] = $data[index].niyuktiTable[i][2][1];
        if (dd && mm && yyyy) {
            let dob = new Date(yyyy, mm - 1, dd);
            let today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            let m = today.getMonth() - dob.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                age--;
            }
            $data[index].niyuktiTable[i][2][0] = age;
        }
    }
</script>

<table class="border">
    <thead>
        <tr>
            <th> ક્રમ </th>
            <th> નિયુક્ત / નીયુક્તોનું નામ અને પૂરું સરનામું </th>
            <th> બચત દાર સાથેનું સગપણ </th>
            <th> નિયુક્તની ઉમર અને જન્મ તારીખ </th>
            <th>દરેક નિયુક્તિ ને આપવા પાત્ર હિસ્સો (%)</th>
            <th
                >જે આકસ્મિક ધટના બનતા નિયુક્તિ પાત્ર અમાન્ય ઠરે તે આકસ્મિક ઘટના</th
            >
            <th
                >બચ્તદાર ની પહેલા નિયુક્તિનું મૃત્યુ થાય તેવા પ્રસંગે નિયુક્તિ
                નો હક જે વ્યક્તિ /વ્યક્તિઓને મળે તેમના નામ , સરનામાં અને સગપણ</th
            >
            <th>દરેક નિયુક્તિને મળવાપાત્ર હિસ્સો </th>
            <th class="no-print"> કાઢી નાખો </th>
        </tr>
    </thead>
    <tbody class="center">
        <tr>
            {#each Array(8).fill("") as i, j (j)}
                <td>{toGujarati(j + 1)}</td>
            {/each}
        </tr>
        {#each $data[index].niyuktiTable as tmp, i (i)}
            <tr class="member-row">
                <td>
                    {toGujarati(i + 1)}
                </td>
                <td class="initial">
                    <div class="no-print">
                        <textarea
                            rows="4"
                            value={tmp[0]}
                            on:change={(e) => {
                                $data[index].niyuktiTable[i][0] =
                                    e.target.value;
                            }}
                        />
                    </div>
                    <span class="no-screen">
                        <p>
                            {#if tmp[0]}
                                {#each tmp[0].split("\n") as line}
                                    <span style="display:block">{line}</span>
                                {/each}
                            {/if}
                        </p>
                    </span>
                </td>
                <td class="initial">
                    <div class="no-print">
                        <input
                            type="text"
                            value={tmp[1]}
                            on:change={(e) => {
                                $data[index].niyuktiTable[i][1] =
                                    e.target.value;
                            }}
                            placeholder="wife"
                        />
                    </div>
                    <span class="no-screen">
                        {tmp[1]}
                    </span>
                </td>
                <td class="initial">
                    <div class="no-print">
                        <div>
                            <input
                                type="number"
                                value={tmp[2][0]}
                                on:change={(e) => {
                                    $data[index].niyuktiTable[i][2] =
                                        e.target.value;
                                }}
                                placeholder="58"
                            />
                        </div>
                        <div class="dob">
                            <input
                                type="number"
                                value={tmp[2][1][0]}
                                on:change={(e) => {
                                    $data[index].niyuktiTable[i][2][1][0] =
                                        e.target.value;
                                    updateAge(i);
                                }}
                                placeholder="dd"
                            />
                            <input
                                type="number"
                                value={tmp[2][1][1]}
                                on:change={(e) => {
                                    $data[index].niyuktiTable[i][2][1][1] =
                                        e.target.value;
                                    updateAge(i);
                                }}
                                placeholder="mm"
                            />
                            <input
                                type="number"
                                value={tmp[2][1][2]}
                                on:change={(e) => {
                                    $data[index].niyuktiTable[i][2][1][2] =
                                        e.target.value;
                                    updateAge(i);
                                }}
                                placeholder="yyyy"
                            />
                        </div>
                    </div>
                    <span class="no-screen">
                        <p>
                            {toGujarati(tmp[2][0] || "")}
                        </p>
                        <p>{toGujarati(toString(tmp[2][1], "/"))}</p>
                    </span>
                </td>
                <td class="initial">
                    <div class="no-print">
                        <input
                            type="number"
                            value={tmp[3]}
                            on:change={(e) => {
                                $data[index].niyuktiTable[i][3] =
                                    e.target.value;
                            }}
                            placeholder="100%"
                        />
                    </div>
                    <span class="no-screen">
                        {toGujarati(tmp[3])}%
                    </span>
                </td>
                <td class="initial">
                    <div class="no-print">
                        <input
                            type="text"
                            value={tmp[4]}
                            on:change={(e) => {
                                $data[index].niyuktiTable[i][4] =
                                    e.target.value;
                            }}
                        />
                    </div>
                    <span class="no-screen">
                        {toGujarati(tmp[4])}
                    </span>
                </td>
                <td class="initial">
                    <div class="no-print">
                        <textarea
                            rows="4"
                            value={tmp[5]}
                            on:change={(e) => {
                                $data[index].niyuktiTable[i][5] =
                                    e.target.value;
                            }}
                        />
                    </div>
                    <span class="no-screen">
                        {#if tmp[5]}
                            {#each tmp[5].split("\n") as line}
                                <span style="display:block"
                                    >{toGujarati(line)}</span
                                >
                            {/each}
                        {/if}
                    </span>
                </td>
                <td class="initial">
                    <div class="no-print">
                        <input
                            type="text"
                            value={tmp[6]}
                            on:change={(e) => {
                                $data[index].niyuktiTable[i][6] =
                                    e.target.value;
                            }}
                        />
                    </div>
                    <span class="no-screen">
                        {toGujarati(tmp[6])}
                    </span>
                </td>
                <td class="no-print usually-hidden">
                    <div class="no-print">
                        <button
                            on:click={() => {
                                if (
                                    confirm(
                                        "Are you sure you want to delete this row?"
                                    )
                                ) {
                                    $data[index].niyuktiTable = $data[
                                        index
                                    ].niyuktiTable.filter((_, j) => j !== i);
                                }
                            }}
                            class="negative"
                            style="margin: 0;"
                        >
                            X
                        </button>
                    </div>
                </td>
            </tr>
        {/each}
        <tr class="no-print">
            <td colspan="9">
                <button
                    on:click={() => {
                        $data[index].niyuktiTable = [
                            ...$data[index].niyuktiTable,
                            ["", "", [0, [0, 0, 0]], "", "", "", ""],
                        ];
                    }}
                    class="positive"
                >
                    Add Row
                </button>
            </td>
        </tr>
    </tbody>
</table>

<style>
    table {
        background-color: white;
        color: black;
    }
    table:hover {
        border: 2px solid darkgoldenrod;
        box-shadow: 0 0 10px darkgoldenrod;
    }
    .member-row:hover > .initial > div > input,
    input:focus,
    .member-row:hover > .initial > div > div > input {
        border: 1px solid darkmagenta;
        color: aliceblue;
        background: darkmagenta;
    }
    .initial > div > input,
    .initial input {
        width: min(80%, 200px);
        display: initial;
        border: 0;
        margin: 0;
        border-radius: 0;
    }
    .initial {
        padding: 0;
    }
    .dob {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .dob > * {
        width: 30%;
        font-size: 0.8em;
    }
</style>
