<script>
    // @ts-nocheck

    export let index;
    import { data } from "../globalState/data";
    $: d = $data[index];
</script>

<div class="tick">
    <p>નિવૃત્ત થનાર કર્મચારીનો દરજ્જો ( લાગુ પડતું ટીક કરવુ)</p>
    <table class="tick layed-out">
        <tr>
            <td>
                <div>
                    <input
                        class="no-print"
                        type="checkbox"
                        checked={$data[index].isSarkariRajyaPatrit}
                        on:change={(e) => {
                            data.update((data) => {
                                data[index].isSarkariRajyaPatrit =
                                    e.target.checked || undefined;
                                return data;
                            });
                        }}
                        name="isSarkariRajyaPatrit"
                    />

                    <label for="isSarkariRajyaPatrit">
                        (૧) સરકારી રાજ્ય પત્રિત
                    </label>
                    <span class="tick no-screen">
                        {#if d.isSarkariRajyaPatrit}
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
                        checked={$data[index].isJillaPanchayatKar}
                        on:change={(e) => {
                            $data[index].isJillaPanchayatKar =
                                e.target.checked || undefined;
                        }}
                        name="isJillaPanchayatKar"
                    />
                    <label for="isJillaPanchayatKar">
                        (૪) જીલ્લા પંચાયત કર્મચારી
                    </label>
                    <span class="tick no-screen">
                        {#if d.isJillaPanchayatKar}
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
                        checked={$data[index].isSarkariBinaRajyaPatrit}
                        on:change={(e) => {
                            $data[index].isSarkariBinaRajyaPatrit =
                                e.target.checked || undefined;
                        }}
                        name="isSarkariBinaRajyaPatrit"
                    />
                    <label for="isSarkariBinaRajyaPatrit">
                        (૨) સરકારી બિન રાજ્ય પત્રિત
                    </label>
                    <span class="tick no-screen">
                        {#if d.isSarkariBinaRajyaPatrit}
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
                        checked={$data[index].isRojamadarKar}
                        on:change={(e) => {
                            $data[index].isRojamadarKar =
                                e.target.checked || undefined;
                        }}
                        name="isRojamadarKar"
                    />
                    <label for="isRojamadarKar"> (૫) રોજમદાર કર્મચારી </label>
                    <span class="tick no-screen">
                        {#if d.isRojamadarKar}
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
                        checked={$data[index].isWorkChargeKar}
                        on:change={(e) => {
                            $data[index].isWorkChargeKar =
                                e.target.checked || undefined;
                        }}
                        name="isWorkChargeKar"
                    />
                    <label for="isWorkChargeKar">
                        (૩) વર્ક ચાર્જ કર્મચારી
                    </label>
                    <span class="tick no-screen">
                        {#if d.isWorkChargeKar}
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
                        checked={$data[index].isPensionPatrGrantInAid}
                        on:change={(e) => {
                            $data[index].isPensionPatrGrantInAid =
                                e.target.checked || undefined;
                        }}
                        name="isPensionPatrGrantInAid"
                    />
                    <label for="isPensionPatrGrantInAid">
                        (૬) પેન્શન પાત્ર ગ્રાન્ટ ઇન એઇડ સંસ્થાના કર્મચારી
                    </label>
                    <span class="tick no-screen">
                        {#if d.isPensionPatrGrantInAid}
                            ✓
                        {/if}
                    </span>
                </div>
            </td>
        </tr>
    </table>
</div>

<style>
    table.tick > tr > td > div {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: space-between;
        gap: 0.5em;
    }
    table.tick > tr > td > div > label {
        flex-grow: 1;
    }
    table.tick > tr > td > div > span.tick {
        flex-grow: 0;
        flex-shrink: 0;
        text-align: center;
        padding: 0;
        flex-basis: auto;
        font-size: 1.5em;
        font-weight: bold;
        margin-right: min(1em, 20%);
        min-width: 1.9em;
        height: clamp(1em, 1.2em, 1.5em);
    }
</style>
