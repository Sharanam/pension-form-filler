<script>
  // @ts-nocheck

  import { data, index } from "../../globalState/data";
</script>

<div>
  <div>
    (એ) એકંદર નોકરી તા
    <div class="date">
      <input
        type="number"
        min="1"
        max="31"
        bind:value={$data[$index].pensionPatrNokri[0][0][0]}
        placeholder="DD"
      />
      <input
        type="number"
        min="1"
        max="12"
        bind:value={$data[$index].pensionPatrNokri[0][0][1]}
        placeholder="MM"
      />
      <input
        type="number"
        min="1900"
        max="2100"
        bind:value={$data[$index].pensionPatrNokri[0][0][2]}
        placeholder="YYYY"
      />
    </div>
    થી તા
    <div class="date">
      <input
        type="number"
        min="1"
        max="31"
        bind:value={$data[$index].pensionPatrNokri[0][1][0]}
        placeholder="DD"
      />
      <input
        type="number"
        min="1"
        max="12"
        bind:value={$data[$index].pensionPatrNokri[0][1][1]}
        placeholder="MM"
      />
      <input
        type="number"
        min="1900"
        max="2100"
        bind:value={$data[$index].pensionPatrNokri[0][1][2]}
        placeholder="YYYY"
      />
    </div>
    બાદ પેન્શન માટે ન ગણવાનો સમય
  </div>

  <div>
    (૧) ૩૬ માસથી વધારે અસાધારણ રજા
    <button
      class="positive"
      on:click={() =>
        data.update((data) => {
          data[$index].pensionPatrNokri[1] = [
            ...data[$index].pensionPatrNokri[1],
            [
              ["", "", ""],
              ["", "", ""],
            ],
          ];
          return data;
        })}
    >
      તારીખની પંક્તિ ઉમેરો
    </button>
    <div />
    {#each $data[$index].pensionPatrNokri[1] as item, i}
      <div>
        તા
        <div class="date">
          <input
            type="number"
            min="1"
            max="31"
            bind:value={$data[$index].pensionPatrNokri[1][i][0][0]}
            placeholder="DD"
          />
          <input
            type="number"
            min="1"
            max="12"
            bind:value={$data[$index].pensionPatrNokri[1][i][0][1]}
            placeholder="MM"
          />
          <input
            type="number"
            min="1900"
            max="2100"
            bind:value={$data[$index].pensionPatrNokri[1][i][0][2]}
            placeholder="YYYY"
          />
        </div>
        થી તા
        <div class="date">
          <input
            type="number"
            min="1"
            max="31"
            bind:value={$data[$index].pensionPatrNokri[1][i][1][0]}
            placeholder="DD"
          />
          <input
            type="number"
            min="1"
            max="12"
            bind:value={$data[$index].pensionPatrNokri[1][i][1][1]}
            placeholder="MM"
          />
          <input
            type="number"
            min="1900"
            max="2100"
            bind:value={$data[$index].pensionPatrNokri[1][i][1][2]}
            placeholder="YYYY"
          />
        </div>
        <button
          class="negative"
          on:click={() =>
            data.update((data) => {
              data[$index].pensionPatrNokri[1] = data[
                $index
              ].pensionPatrNokri[1].filter((item, index) => index !== i);
              return data;
            })}
        >
          કાઢી નાખો
        </button>
      </div>
    {/each}
  </div>
  <div>
    (૨) પેન્શનપાત્ર નોકરી તરીકે ન ગણવાના હૂકમો થયા હોય તેવો ફરજ મોકૂફીનો સમય
    <button
      class="positive"
      on:click={() =>
        data.update((data) => {
          data[$index].pensionPatrNokri[2] = [
            ...data[$index].pensionPatrNokri[2],
            [
              ["", "", ""],
              ["", "", ""],
            ],
          ];
          return data;
        })}
    >
      તારીખની પંક્તિ ઉમેરો
    </button>
    <div />
    {#each $data[$index].pensionPatrNokri[2] as item, i}
      <div>
        તા
        <div class="date">
          <input
            type="number"
            min="1"
            max="31"
            bind:value={$data[$index].pensionPatrNokri[2][i][0][0]}
            placeholder="DD"
          />
          <input
            type="number"
            min="1"
            max="12"
            bind:value={$data[$index].pensionPatrNokri[2][i][0][1]}
            placeholder="MM"
          />
          <input
            type="number"
            min="1900"
            max="2100"
            bind:value={$data[$index].pensionPatrNokri[2][i][0][2]}
            placeholder="YYYY"
          />
        </div>
        થી તા
        <div class="date">
          <input
            type="number"
            min="1"
            max="31"
            bind:value={$data[$index].pensionPatrNokri[2][i][1][0]}
            placeholder="DD"
          />
          <input
            type="number"
            min="1"
            max="12"
            bind:value={$data[$index].pensionPatrNokri[2][i][1][1]}
            placeholder="MM"
          />
          <input
            type="number"
            min="1900"
            max="2100"
            bind:value={$data[$index].pensionPatrNokri[2][i][1][2]}
            placeholder="YYYY"
          />
        </div>
        <button
          on:click={() => {
            data.update((data) => {
              data[$index].pensionPatrNokri[2] = data[
                $index
              ].pensionPatrNokri[2].filter((item, index) => index !== i);
              return data;
            });
          }}
          class="negative"
        >
          કાઢી નાખો
        </button>
      </div>
    {/each}
  </div>
  <div>
    (૩) ત્રણ માસ કરતાં વધારે મુદતની તૂટ હોય ત્યાં બે ગાળા વચ્ચેનો તૂટ નો સમયગાળો
    <button
      class="positive"
      on:click={() =>
        data.update((data) => {
          data[$index].pensionPatrNokri[3] = [
            ...data[$index].pensionPatrNokri[3],
            [
              ["", "", ""],
              ["", "", ""],
            ],
          ];
          return data;
        })}
    >
      તારીખની પંક્તિ ઉમેરો
    </button>
    <div />
    {#each $data[$index].pensionPatrNokri[3] as item, i}
      <div>
        તા
        <div class="date">
          <input
            type="number"
            min="1"
            max="31"
            bind:value={$data[$index].pensionPatrNokri[3][i][0][0]}
            placeholder="DD"
          />
          <input
            type="number"
            min="1"
            max="12"
            bind:value={$data[$index].pensionPatrNokri[3][i][0][1]}
            placeholder="MM"
          />
          <input
            type="number"
            min="1900"
            max="2100"
            bind:value={$data[$index].pensionPatrNokri[3][i][0][2]}
            placeholder="YYYY"
          />
        </div>
        થી તા
        <div class="date">
          <input
            type="number"
            min="1"
            max="31"
            bind:value={$data[$index].pensionPatrNokri[3][i][1][0]}
            placeholder="DD"
          />
          <input
            type="number"
            min="1"
            max="12"
            bind:value={$data[$index].pensionPatrNokri[3][i][1][1]}
            placeholder="MM"
          />
          <input
            type="number"
            min="1900"
            max="2100"
            bind:value={$data[$index].pensionPatrNokri[3][i][1][2]}
            placeholder="YYYY"
          />
        </div>
        <button
          on:click={() => {
            data.update((data) => {
              data[$index].pensionPatrNokri[3] = data[
                $index
              ].pensionPatrNokri[3].filter((item, index) => index !== i);
              return data;
            });
          }}
          class="negative"
        >
          કાઢી નાખો
        </button>
      </div>
    {/each}
  </div>
  <div>
    (૪) પેન્શનપાત્ર નહિ ગણાતી અન્ય મુદતો
    <button
      class="positive"
      on:click={() =>
        data.update((data) => {
          data[$index].pensionPatrNokri[4] = [
            ...data[$index].pensionPatrNokri[4],
            [
              ["", "", ""],
              ["", "", ""],
            ],
          ];
          return data;
        })}
    >
      તારીખની પંક્તિ ઉમેરો
    </button>
    <div />
    {#each $data[$index].pensionPatrNokri[4] as item, i}
      <div>
        તા
        <div class="date">
          <input
            type="number"
            min="1"
            max="31"
            bind:value={$data[$index].pensionPatrNokri[4][i][0][0]}
            placeholder="DD"
          />
          <input
            type="number"
            min="1"
            max="12"
            bind:value={$data[$index].pensionPatrNokri[4][i][0][1]}
            placeholder="MM"
          />
          <input
            type="number"
            min="1900"
            max="2100"
            bind:value={$data[$index].pensionPatrNokri[4][i][0][2]}
            placeholder="YYYY"
          />
        </div>
        થી તા
        <div class="date">
          <input
            type="number"
            min="1"
            max="31"
            bind:value={$data[$index].pensionPatrNokri[4][i][1][0]}
            placeholder="DD"
          />
          <input
            type="number"
            min="1"
            max="12"
            bind:value={$data[$index].pensionPatrNokri[4][i][1][1]}
            placeholder="MM"
          />
          <input
            type="number"
            min="1900"
            max="2100"
            bind:value={$data[$index].pensionPatrNokri[4][i][1][2]}
            placeholder="YYYY"
          />
        </div>
        <button
          on:click={() => {
            data.update((data) => {
              data[$index].pensionPatrNokri[4] = data[
                $index
              ].pensionPatrNokri[4].filter((item, index) => index !== i);
              return data;
            });
          }}
          class="negative"
        >
          કાઢી નાખો
        </button>
      </div>
    {/each}
  </div>
  <div>
    <div>
      (સી) ૨૦/૨૫ વર્ષ બાદ સ્વૈચ્છિક નિવૃત્તિ હોય તો નોશનલ નોકરી
      <p class="indent">ગણતરી કરીને વર્ષ, માસ અને દિવસ નાંખવા.</p>
      <div class="date">
        <input
          type="number"
          min="0"
          max="99"
          bind:value={$data[$index].pensionPatrNokri[5][0]}
          placeholder="YY"
        />
        <input
          type="number"
          min="0"
          max="12"
          bind:value={$data[$index].pensionPatrNokri[5][1]}
          placeholder="MM"
        />
        <input
          type="number"
          min="0"
          max="31"
          bind:value={$data[$index].pensionPatrNokri[5][2]}
          placeholder="DD"
        />
      </div>
    </div>
    <div>
      (ડી) ન્યાયિક સેવા ના અધિકારી/ મદદનિશ સરકારી વકીલ માટે:
      <p class="indent">ગણતરી કરીને વર્ષ, માસ અને દિવસ નાંખવા.</p>
      <div class="date">
        <input
          type="number"
          min="0"
          max="99"
          bind:value={$data[$index].pensionPatrNokri[6][0]}
          placeholder="YY"
        />
        <input
          type="number"
          min="0"
          max="12"
          bind:value={$data[$index].pensionPatrNokri[6][1]}
          placeholder="MM"
        />
        <input
          type="number"
          min="0"
          max="31"
          bind:value={$data[$index].pensionPatrNokri[6][2]}
          placeholder="DD"
        />
      </div>
    </div>
  </div>
</div>

<style>
  .date {
    display: inline;
  }

  .date > input {
    width: 4rem;
    margin: 0;
    padding: 0;
    border-radius: 0;
  }
  button {
    margin: auto;
    display: inline-block;
    padding: 0;
    border-radius: 0;
    font-size: medium;
    font-weight: lighter;
  }
</style>
