<script>
    // @ts-nocheck

    export let file, index;
</script>

<div class="tick">
    <p>નિવૃત્ત થનાર કર્મચારીનો દરજ્જો ( લાગુ પડતું ટીક કરવુ)</p>
    <table class="tick layed-out">
        <tr>
            <td>
                <div>
                    <input
                        type="checkbox"
                        class="no-print"
                        checked={file[index].isSarkariRajyaPatrit}
                        on:change={(e) => {
                            file[index].isSarkariRajyaPatrit =
                                e.target.checked || undefined;
                        }}
                        name="isSarkariRajyaPatrit"
                    />
                    <label for="isSarkariRajyaPatrit">
                        (૧) સરકારી રાજ્ય પત્રિત
                    </label>
                    <span class="tick no-screen">
                        {#if file[index].isSarkariRajyaPatrit}
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
                        checked={file[index].isJillaPanchayatKar}
                        on:change={(e) => {
                            file[index].isJillaPanchayatKar =
                                e.target.checked || undefined;
                        }}
                        name="isJillaPanchayatKar"
                    />
                    <label for="isJillaPanchayatKar">
                        (૪) જીલ્લા પંચાયત કર્મચારી
                    </label>
                    <span class="tick no-screen">
                        {#if file[index].isJillaPanchayatKar}
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
                        checked={file[index].isSarkariBinaRajyaPatrit}
                        on:change={(e) => {
                            file[index].isSarkariBinaRajyaPatrit =
                                e.target.checked || undefined;
                        }}
                        name="isSarkariBinaRajyaPatrit"
                    />
                    <label for="isSarkariBinaRajyaPatrit">
                        (૨) સરકારી બિન રાજ્ય પત્રિત
                    </label>
                    <span class="tick no-screen">
                        {#if file[index].isSarkariBinaRajyaPatrit}
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
                        checked={file[index].isRojamadarKar}
                        on:change={(e) => {
                            file[index].isRojamadarKar =
                                e.target.checked || undefined;
                        }}
                        name="isRojamadarKar"
                    />
                    <label for="isRojamadarKar"> (૫) રોજમદાર કર્મચારી </label>
                    <span class="tick no-screen">
                        {#if file[index].isRojamadarKar}
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
                        checked={file[index].isWorkChargeKar}
                        on:change={(e) => {
                            file[index].isWorkChargeKar =
                                e.target.checked || undefined;
                        }}
                        name="isWorkChargeKar"
                    />
                    <label for="isWorkChargeKar">
                        (૩) વર્ક ચાર્જ કર્મચારી
                    </label>
                    <span class="tick no-screen">
                        {#if file[index].isWorkChargeKar}
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
                        checked={file[index].isPensionPatrGrantInAid}
                        on:change={(e) => {
                            file[index].isPensionPatrGrantInAid =
                                e.target.checked || undefined;
                        }}
                        name="isPensionPatrGrantInAid"
                    />
                    <label for="isPensionPatrGrantInAid">
                        (૬) પેન્શન પાત્ર ગ્રાન્ટ ઇન એઇડ સંસ્થાના કર્મચારી
                    </label>
                    <span class="tick no-screen">
                        {#if file[index].isPensionPatrGrantInAid}
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
        flex-basis: auto;
        font-size: 1.5em;
        font-weight: bold;
        margin-right: max(1em, 20%);
    }
</style>
