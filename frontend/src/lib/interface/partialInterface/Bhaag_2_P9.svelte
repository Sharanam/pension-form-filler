<script>
  // @ts-nocheck
  import { data, index } from "../../globalState/data";
</script>

<div>
  <div>
    <div>
      પેન્શનમાંથી કપાત રુ.
      <input
        type="number"
        bind:value={$data[$index].Kapaat[0][0]}
        placeholder="0"
      />
      તા.
      <div class="date">
        <input
          type="number"
          min="1"
          max="31"
          bind:value={$data[$index].Kapaat[0][1][0]}
          placeholder="DD"
        />
        <input
          type="number"
          min="1"
          max="12"
          bind:value={$data[$index].Kapaat[0][1][1]}
          placeholder="MM"
        />
        <input
          type="number"
          min="1900"
          max="2100"
          bind:value={$data[$index].Kapaat[0][1][2]}
          placeholder="YYYY"
        />
      </div>
      થી તા

      <div class="date">
        <input
          type="number"
          min="1"
          max="31"
          bind:value={$data[$index].Kapaat[0][2][0]}
          placeholder="DD"
        />
        <input
          type="number"
          min="1"
          max="12"
          bind:value={$data[$index].Kapaat[0][2][1]}
          placeholder="MM"
        />
        <input
          type="number"
          min="1900"
          max="2100"
          bind:value={$data[$index].Kapaat[0][2][2]}
          placeholder="YYYY"
        />
      </div>
      સુધી રુ
      <input
        type="number"
        placeholder="0"
        bind:value={$data[$index].Kapaat[0][3]}
      />
      તા
      <div class="date">
        <input
          type="number"
          min="1"
          max="31"
          bind:value={$data[$index].Kapaat[0][4][0]}
          placeholder="DD"
        />
        <input
          type="number"
          min="1"
          max="12"
          bind:value={$data[$index].Kapaat[0][4][1]}
          placeholder="MM"
        />
        <input
          type="number"
          min="1900"
          max="2100"
          bind:value={$data[$index].Kapaat[0][4][2]}
          placeholder="YYYY"
        />
      </div>
      થી કાયમી કપાત
    </div>
    પેન્શનમાંથી કપાત કરવાના સિક્ષા હુકમ નંબર
    <input
      type="number"
      placeholder="0"
      bind:value={$data[$index].Kapaat[1][0]}
    />
    તા

    <div class="date">
      <input
        type="number"
        min="1"
        max="31"
        bind:value={$data[$index].Kapaat[1][1][0]}
        placeholder="DD"
      />
      <input
        type="number"
        min="1"
        max="12"
        bind:value={$data[$index].Kapaat[1][1][1]}
        placeholder="MM"
      />
      <input
        type="number"
        min="1900"
        max="2100"
        bind:value={$data[$index].Kapaat[1][1][2]}
        placeholder="YYYY"
      />
    </div>
    પેન્શન કાપના શિક્ષાના હુકમની નકલ સામેલ છે.
  </div>
  <div>
    વસુલાત બાકી છે?

    <input
      type="checkbox"
      style="margin: 0; padding:0;"
      checked={$data[$index].leniRakamNiVigato[0] === ""}
      on:change={(e) =>
        ($data[$index].leniRakamNiVigato[0] = e.target.checked ? 1 : 0)}
    />
    <label for="leniRakam">હા</label>
    {#if $data[$index].leniRakamNiVigato[0]}
      <table class="border padding center layed-out">
        <thead>
          <tr>
            <td> ક્રમ </td>
            <td> વિગત </td>
            <td>ખાતા નંબર</td>
            <td> મુદ્દલ </td>
            <td> વ્યાજ </td>
            <td> કુલ </td>
            <td> જમા કરાવવાનું અંદાજપત્ર સદર </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>૧</td>
            <td> મકાન પેશગી </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][0][0]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][0][1]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][0][2]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][0][3]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][0][4]}
              />
            </td>
          </tr>
          <tr>
            <td>૨</td>
            <td> વાહન પેશગી </td>

            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][1][0]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][1][1]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][1][2]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][1][3]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][1][4]}
              />
            </td>
          </tr>
          <tr>
            <td>૩</td>
            <td> પગાર ભથ્થાની વસુલાત </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][2][0]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][2][1]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][2][2]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][2][3]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][2][4]}
              />
            </td>
          </tr>
          <tr>
            <td>૪</td>
            <td> અન્ય વસુલાત </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][3][0]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][3][1]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][3][2]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][3][3]}
              />
            </td>
            <td>
              <input
                type="text"
                bind:value={$data[$index].leniRakamNiVigato[1][3][4]}
              />
            </td>
          </tr>
          <tr>
            <td />
            <td> કુલ વસુલાત </td>
          </tr>
        </tbody>
      </table>
    {/if}
  </div>
</div>

<style>
  .date {
    display: inline;
    background-color: white;
    display: inline-block;
    width: fit-content;
  }

  input {
    width: max-content;
    max-width: 100%;
    margin: 0;
    padding: 0;
    border-radius: 0;
  }
</style>
