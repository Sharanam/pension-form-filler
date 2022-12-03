<script>
    // @ts-nocheck

    import { dateString } from "../tools/dateString";
    import { toGujarati } from "../tools/toGujarati";
    import { toString } from "../tools/toString";

    export let file, index;

    function updateFamilyMembers(value, member, field) {
        file[index].members[member][field] = value || "";
    }
</script>

<table class="layed-out border center">
    <thead>
        <tr>
            <th>ક્રમ</th>
            <th>કુટુંબના સભ્યોના નામ</th>
            <th>જન્મ તારીખ</th>
            <th>કર્મચારી/ અધિકારી સાથે સંબંધ</th>
            <th>નોંધ</th>
            <th class="no-print"> કાઢી નાખો </th>
        </tr>
    </thead>
    <tbody>
        {#each file[index].members as member, i}
            <tr class="member-row">
                <td>
                    {toGujarati(i + 1)}
                </td>
                <td class="initial">
                    <div class="no-print">
                        <input
                            type="text"
                            value={member[0]}
                            on:change={(e) => {
                                updateFamilyMembers(e.target.value, i, 0);
                            }}
                        />
                    </div>
                    <span class="no-screen">
                        {member[0]}
                    </span>
                </td>
                <td class="initial">
                    <div class="no-print">
                        <input
                            type="date"
                            value={dateString(
                                member[1][2],
                                member[1][1],
                                member[1][0]
                            )}
                            on:change={(e) => {
                                let date = e.target.value.split("-");
                                updateFamilyMembers(
                                    [date[2], date[1], date[0]],
                                    i,
                                    1
                                );
                            }}
                        />
                    </div>
                    <span class="no-screen">
                        {toString(member[1], "/")}
                    </span>
                </td>
                <td class="initial">
                    <div class="no-print">
                        <input
                            type="text"
                            value={member[2]}
                            on:change={(e) => {
                                updateFamilyMembers(e.target.value, i, 2);
                            }}
                        />
                    </div>
                    <span class="no-screen">
                        {member[2]}
                    </span>
                </td>
                <td class="initial">
                    <div class="no-print">
                        <input
                            type="text"
                            value={member[3]}
                            on:change={(e) => {
                                updateFamilyMembers(e.target.value, i, 3);
                            }}
                        />
                    </div>
                    <span class="no-screen">
                        {member[3]}
                    </span>
                </td>
                <td class="no-print usually-hidden">
                    <button
                        on:click={() => {
                            if (
                                confirm(
                                    "Are you sure you want to delete this member?"
                                )
                            ) {
                                file[index].members = file[
                                    index
                                ].members.filter((_, j) => j !== i);
                            }
                        }}
                        class="negative"
                        style="margin: 0;"
                    >
                        X
                    </button>
                </td>
            </tr>
        {/each}
        <tr class="no-print">
            <td colspan="6">
                <button
                    on:click={() => {
                        file[index].members = [
                            ...file[index].members,
                            ["", ["", "", ""], "", ""],
                        ];
                    }}
                    class="positive"
                >
                    કુટુંબના સભ્ય ઉમેરો
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
    input:focus {
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
</style>
