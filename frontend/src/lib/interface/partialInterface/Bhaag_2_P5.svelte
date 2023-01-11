<script>
  // @ts-nocheck

  //   layout = {
  //     bandData: {
  //       nivrutiSamayNo: {
  //         lastPayBand: "",
  //         lastPayGrade: "",
  //       },
  //       swaichitNivrutiSamayNo: {
  //         lastPayBand: "",
  //         lastPayGrade: "",
  //       },
  //       pensionPatrPagar: {
  //         pensionDateFrom: ["24", "11", "1986"],
  //         pensionDateTo: ["14", "06", "2022"],
  //       },
  //       pensionPatrPagarNiVigato: {
  //         payBand: Array(10).fill(""),
  //         gradePay: Array(10).fill(""),
  //         kulPagaar: "",
  //         sarvaadoDasMaas: "",
  //         masikSarerashPpp: "",
  //       },
  //     },
  //   };

  import { data, index } from "../../globalState/data";
  import { toGujarati } from "../../tools/toGujarati";
  import { dasMaas } from "../../tools/ymd";

  function calculate() {
    data.update((data) => {
      //   data[$index].bandData

      // table:
      data[$index].bandData.pensionPatrPagarNiVigato.payBand = Array(10).fill(
        (+data[$index].bandData.nivrutiSamayNo.lastPayBand || 0) +
          +data[$index].bandData.swaichitNivrutiSamayNo.lastPayBand || 0
      );

      data[$index].bandData.pensionPatrPagarNiVigato.gradePay = Array(10).fill(
        (+data[$index].bandData.nivrutiSamayNo.lastPayGrade || 0) +
          +data[$index].bandData.swaichitNivrutiSamayNo.lastPayGrade || 0
      );

      // last 3-1 rows
      data = calculateLastThree(data);
      return data;
    });
  }
  function calculateLastThree(data) {
    data[$index].bandData.pensionPatrPagarNiVigato.kulPagaar =
      (+data[$index].bandData.pensionPatrPagarNiVigato.payBand.reduce(
        (a, b) => parseInt(a) + parseInt(b),
        0
      ) || 0) +
      (+data[$index].bandData.pensionPatrPagarNiVigato.gradePay.reduce(
        (a, b) => parseInt(a) + parseInt(b),
        0
      ) || 0);

    data[$index].bandData.pensionPatrPagarNiVigato.sarvaadoDasMaas =
      +data[$index].bandData.pensionPatrPagarNiVigato.kulPagaar || 0;

    data[$index].bandData.pensionPatrPagarNiVigato.chhelloPagaar =
      (+data[$index].bandData?.nivrutiSamayNo?.lastPayBand ||
        +data[$index].bandData?.swaichitNivrutiSamayNo?.lastPayBand) +
        (+data[$index].bandData?.nivrutiSamayNo?.lastPayGrade ||
          +data[$index].bandData?.swaichitNivrutiSamayNo?.lastPayGrade) || 0;
    data[$index].bandData.pensionPatrPagarNiVigato.masikSarerashPpp =
      data[$index].bandData.pensionPatrPagarNiVigato.chhelloPagaar / 2;

    return data;
  }
</script>

<div>
  <div>
    <div>૨૦. નિવૃત્તિ સમયનો છેલ્લો પગાર:</div>
    <div>
      પે બેન્ડ
      <input
        type="number"
        bind:value={$data[$index].bandData.nivrutiSamayNo.lastPayBand}
        on:change={calculate}
        min="0"
        placeholder="0"
      />

      + ગ્રેડ પે
      <input
        type="number"
        bind:value={$data[$index].bandData.nivrutiSamayNo.lastPayGrade}
        on:change={calculate}
        min="0"
        placeholder="0"
      />
    </div>
  </div>
  <div>
    ૨૧. સ્વૈચ્છિક નિવૃત્તિ હોય નોકરીનો છેલ્લી તારીખે સંભવિત મુળ પગાર:
    <div>
      પે બેન્ડ
      <input
        type="number"
        bind:value={$data[$index].bandData.swaichitNivrutiSamayNo.lastPayBand}
        on:change={calculate}
        min="0"
        placeholder="0"
      />

      + ગ્રેડ પે
      <input
        type="number"
        bind:value={$data[$index].bandData.swaichitNivrutiSamayNo.lastPayGrade}
        on:change={calculate}
        min="0"
        placeholder="0"
      />
    </div>
  </div>
  <div>
    ૨૨. ખરેખર મેળવેલ પેન્શાનપાત્ર પગારની વિગતો (મુ.સેવા (પેન્શન) નિયમોના
    નિયમ-૪૩)
    <div>
      તા.
      <div class="date">
        <input
          type="number"
          min="1"
          max="31"
          bind:value={$data[$index].bandData.pensionPatrPagar
            .pensionDateFrom[0]}
          placeholder="dd"
        />
        <input
          type="number"
          min="1"
          max="12"
          bind:value={$data[$index].bandData.pensionPatrPagar
            .pensionDateFrom[1]}
          placeholder="mm"
        />
        <input
          type="number"
          min="1900"
          max="2099"
          bind:value={$data[$index].bandData.pensionPatrPagar
            .pensionDateFrom[2]}
          placeholder="yyyy"
        />
      </div>

      થી તા.
      <div class="date">
        <input
          type="number"
          min="1"
          max="31"
          bind:value={$data[$index].bandData.pensionPatrPagar.pensionDateTo[0]}
          placeholder="dd"
        />
        <input
          type="number"
          min="1"
          max="12"
          bind:value={$data[$index].bandData.pensionPatrPagar.pensionDateTo[1]}
          placeholder="mm"
        />
        <input
          type="number"
          min="1900"
          max="2099"
          bind:value={$data[$index].bandData.pensionPatrPagar.pensionDateTo[2]}
          placeholder="yyyy"
        />
      </div>
    </div>
    <p>(૨૫ વર્ષ બાદની સ્વૈચ્છિક નિવૃત્તિ હોય તો નોશનલ પગાર ધ્યાને લેવો)</p>
  </div>

  <div>
    <table class="border padding center" style="min-width: 70%;">
      <thead>
        <th> ક્રમ </th>
        <th> માસ </th>
        <th> પે બેન્ડ </th>
        <th> ગ્રેડ પે </th>
      </thead>
      <tbody>
        {#each dasMaas($data[$index]?.bandData?.pensionPatrPagar?.pensionDateTo) || [] as item, i}
          <tr>
            <td>
              {toGujarati(i + 1)}
            </td>
            <td>
              {toGujarati(`${item[0]} થી ${item[1]}`)}
            </td>
            <td>
              <input
                type="number"
                min="0"
                value={$data[$index].bandData.pensionPatrPagarNiVigato.payBand[
                  i
                ]}
                on:change={(e) =>
                  data.update((data) => {
                    data[$index].bandData.pensionPatrPagarNiVigato.payBand[i] =
                      e.target.value;
                    return calculateLastThree(data);
                  })}
              />
            </td>
            <td>
              <input
                type="number"
                min="0"
                value={$data[$index].bandData.pensionPatrPagarNiVigato.gradePay[
                  i
                ]}
                on:change={(e) =>
                  data.update((data) => {
                    data[$index].bandData.pensionPatrPagarNiVigato.gradePay[i] =
                      e.target.value;
                    return calculateLastThree(data);
                  })}
              />
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  div.date > input {
    border-radius: 0;
  }
  div.date {
    display: inline;
    background-color: white;
    padding-block: 0.5em;
  }
</style>
