<script>
  // @ts-nocheck

  import { toGujarati } from "../tools/toGujarati";
  import { toString } from "../tools/toString";
  import { data } from "../globalState/data";

  export let i = 0;
  function updateFamilyMembers(value, member, field) {
    $data[i].members[member][field] = value || "";
  }
  function updateDobOfFamilyMembers(value, member, field, j) {
    $data[i].members[member][field][j] = value || "";
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
    {#each $data[i].members as member, i}
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
            <div class="dob">
              <input
                type="text"
                placeholder="dd"
                value={member[1][0]}
                on:change={(e) => {
                  updateDobOfFamilyMembers(e.target.value, i, 1, 0);
                }}
              />
              <input
                type="text"
                placeholder="mm"
                value={member[1][1]}
                on:change={(e) => {
                  updateDobOfFamilyMembers(e.target.value, i, 1, 1);
                }}
              />
              <input
                type="text"
                placeholder="yyyy"
                value={member[1][2]}
                on:change={(e) => {
                  updateDobOfFamilyMembers(e.target.value, i, 1, 2);
                }}
              />
            </div>
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
              if (confirm("Are you sure you want to delete this member?")) {
                $data[i].members = $data[i].members.filter((_, j) => j !== i);
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
            $data[i].members = [
              ...$data[i].members,
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
