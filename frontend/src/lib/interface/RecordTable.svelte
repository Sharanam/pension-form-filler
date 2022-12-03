<script>
    import { deleteRecord } from "../tools/deleteRecord";
    import { toString } from "../tools/toString";

    export let file, index;
</script>

<div
    style="
max-height: 50vh;
overflow-y: auto;
"
    class="no-print"
>
    {#if file.length > 1}
        <table>
            <thead>
                <th> ક્રમાંક </th>
                <th>કર્મચારીનું નામ</th>
                <th>કર્મચારીનો હોદ્દો</th>
                <th>કચેરીનું નામ</th>
                <th>નિવૃત્તિનો પ્રકાર</th>
                <th>નિવૃત્તિની તારીખ</th>
                <th> રેકોર્ડ કાઢી નાખો </th>
            </thead>
            <tbody>
                {#each file as record, i}
                    <tr class:active={i === index} on:click={() => (index = i)}>
                        <td class="center">{i + 1}</td>
                        <td>{toString(record.karmchariNaam, " ") || ""}</td>
                        <td class="center">{record.karmchariHoddo || ""}</td>
                        <td class="center">{record.kacheriNaam || ""}</td>
                        <td class="center">{record.nivrutiPrakar || ""}</td>
                        <td class="center">
                            {toString(record.nivrutiTarikh, "/") || ""}
                        </td>
                        <td class="center usually-hidden">
                            <button
                                class="negative "
                                style="margin: auto;"
                                on:click={() => {
                                    [file, index] = deleteRecord(file, i);
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}
</div>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
    }
    table,
    th,
    td {
        border: 1px solid black;
    }
    td {
        padding: 0.5rem;
        cursor: pointer;
    }
    .active {
        background-color: darkslategray;
        color: white;
    }
    tr:hover {
        background-color: lightblue;
        color: black;
    }
    .active:hover {
        background-color: darkslateblue;
        color: white;
    }
</style>
