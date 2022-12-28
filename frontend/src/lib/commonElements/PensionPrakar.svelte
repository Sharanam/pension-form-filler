<script>
    // @ts-nocheck

    import "./tick.css";
    export let i = 0;
    import { data } from "../globalState/data";
    import { pensionPrakar } from "../tools/constantValues";
    $: d = $data[i].nivrutiPrakar;

    function updateData(checked, prakar) {
        data.update((data) => {
            if (checked) {
                data[i].nivrutiPrakar.push(prakar);
            } else {
                data[i].nivrutiPrakar = data[i].nivrutiPrakar.filter(
                    (p) => p !== prakar
                );
            }
            return data;
        });
    }
</script>

<div class="tick">
    <p>
        પેન્શનનો પ્રકાર (ગુ. મુ. સેવા પેન્શન નિયમો -૨૦૦૨ મુજબ) (લાગુ પડતું હોય
        તે ટીક કરવું)
    </p>
    <table class="tick layed-out">
        <tr>
            <td>
                <div>
                    <input
                        type="checkbox"
                        class="no-print"
                        checked={d.includes("0")}
                        on:change={(e) => {
                            updateData(e.target.checked, "0");
                        }}
                        name="isPensionPrakar0"
                    />
                    <label for="isPensionPrakar0">
                        (૧) {pensionPrakar[0]}
                    </label>
                    <span class="tick no-screen">
                        {#if d.includes("0")}
                            ✓
                        {/if}
                    </span>
                </div>
            </td>
            <td>
                <div>
                    <input
                        type="checkbox"
                        class="no-print"
                        checked={d.includes("1")}
                        on:change={(e) => {
                            updateData(e.target.checked, "1");
                        }}
                        name="isPensionPrakar1"
                    />
                    <label for="isPensionPrakar1">
                        (૨) {pensionPrakar[1]}
                    </label>
                    <span class="tick no-screen">
                        {#if d.includes("1")}
                            ✓
                        {/if}
                    </span>
                </div>
            </td></tr
        >
        <tr>
            <td>
                <div>
                    <input
                        type="checkbox"
                        class="no-print"
                        checked={d.includes("2")}
                        on:change={(e) => {
                            updateData(e.target.checked, "2");
                        }}
                        name="isPensionPrakar2"
                    />
                    <label for="isPensionPrakar2">
                        (૩) {pensionPrakar[2]}
                    </label>
                    <span class="tick no-screen">
                        {#if d.includes("2")}
                            ✓
                        {/if}
                    </span>
                </div>
            </td>
            <td>
                <div>
                    <input
                        type="checkbox"
                        class="no-print"
                        checked={d.includes("3")}
                        on:change={(e) => {
                            updateData(e.target.checked, "3");
                        }}
                        name="isPensionPrakar3"
                    />
                    <label for="isPensionPrakar3">
                        (૪) {pensionPrakar[3]}
                    </label>
                    <span class="tick no-screen">
                        {#if d.includes("3")}
                            ✓
                        {/if}
                    </span>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                    <input
                        type="checkbox"
                        class="no-print"
                        checked={d.includes("4")}
                        on:change={(e) => {
                            updateData(e.target.checked, "4");
                        }}
                        name="isPensionPrakar4"
                    />
                    <label for="isPensionPrakar4">
                        (૫) {pensionPrakar[4]}
                    </label>
                    <span class="tick no-screen">
                        {#if d.includes("4")}
                            ✓
                        {/if}
                    </span>
                </div>
            </td>
            <td>
                <div>
                    <input
                        type="checkbox"
                        class="no-print"
                        checked={d.includes("5")}
                        on:change={(e) => {
                            updateData(e.target.checked, "5");
                        }}
                        name="isPensionPrakar5"
                    />
                    <label for="isPensionPrakar5">
                        (૬) {pensionPrakar[5]}
                    </label>
                    <span class="tick no-screen">
                        {#if d.includes("5")}
                            ✓
                        {/if}
                    </span>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                    <input
                        type="checkbox"
                        class="no-print"
                        checked={d.includes("6")}
                        on:change={(e) => {
                            updateData(e.target.checked, "6");
                        }}
                        name="isPensionPrakar6"
                    />
                    <label for="isPensionPrakar6">
                        (૭) {pensionPrakar[6]}
                    </label>
                    <span class="tick no-screen">
                        {#if d.includes("6")}
                            ✓
                        {/if}
                    </span>
                </div>
            </td>
            <td>
                <div>
                    <input
                        type="checkbox"
                        class="no-print"
                        checked={d.includes("7")}
                        on:change={(e) => {
                            updateData(e.target.checked, "7");
                        }}
                        name="isPensionPrakar7"
                    />
                    <label for="isPensionPrakar7">
                        (૮) {pensionPrakar[7]}
                    </label>
                    <span class="tick no-screen">
                        {#if d.includes("7")}
                            ✓
                        {/if}
                    </span>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div>
                    <input
                        type="checkbox"
                        class="no-print"
                        checked={d.includes("8")}
                        on:change={(e) => {
                            updateData(e.target.checked, "8");
                        }}
                        name="isPensionPrakar8"
                    />
                    <label for="isPensionPrakar8">
                        (૯) {pensionPrakar[8]}
                    </label>
                    <span class="tick no-screen">
                        {#if d.includes("8")}
                            ✓
                        {/if}
                    </span>
                </div>
            </td>
            <td>
                <div>
                    <input
                        type="checkbox"
                        class="no-print"
                        checked={d.includes("9")}
                        on:change={(e) => {
                            updateData(e.target.checked, "9");
                        }}
                        name="isPensionPrakar9"
                    />
                    <label for="isPensionPrakar9">
                        (૧૦) {pensionPrakar[9]}
                    </label>
                    <span class="tick no-screen">
                        {#if d.includes("9")}
                            ✓
                        {/if}
                    </span>
                </div>
            </td>
        </tr>
    </table>
</div>
