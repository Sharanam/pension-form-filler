<script>
    // @ts-nocheck

    export let index = 0;
    import { data } from "../globalState/data";
    import "./tick.css";
</script>

<div class="tick">
    <table class="tick layed-out border">
        <tr>
            <td>
                <div>
                    <input
                        type="checkbox"
                        class="no-print"
                        checked={$data[index].isRajyaPatrit}
                        on:change={(e) => {
                            data.update((data) => {
                                data[index].isRajyaPatrit =
                                    e.target.checked || undefined;
                                return data;
                            });
                        }}
                        name="isRajyaPatrit"
                    />
                    <label for="isRajyaPatrit"> રાજ્યપત્રિત </label>
                    <span class="tick no-screen">
                        {#if $data[index].isRajyaPatrit}
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
                        checked={$data[index].isNotRajyaPatrit}
                        on:change={(e) => {
                            data.update((data) => {
                                data[index].isNotRajyaPatrit =
                                    e.target.checked || undefined;
                                return data;
                            });
                        }}
                        name="isNotRajyaPatrit"
                    />
                    <label for="isNotRajyaPatrit"> બિન રાજ્યપત્રિત </label>
                    <span class="tick no-screen">
                        {#if $data[index].isNotRajyaPatrit}
                            ✓
                        {/if}
                    </span>
                </div>
            </td>
        </tr>
    </table>
</div>
