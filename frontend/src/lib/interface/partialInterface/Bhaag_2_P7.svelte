<script>
  // @ts-nocheck
  import { data, index } from "../../globalState/data";
</script>

<div>
  <div>
    મોંઘવારીના ટકા
    <input
      type="number"
      bind:value={$data[$index].monghvaariPercentage}
      min="0"
      max="100"
      placeholder="0"
    />
  </div>
  <div>
    પેન્શન પાત્ર નોકરી વર્ષ:
    <input
      type="number"
      bind:value={$data[$index].pensionPatrNokariVarsh}
      min="0"
      placeholder="0"
    />
  </div>
  <div>
    <!-- Bhaag2_25_2 -->
    <p>
      ૨. ચાલુ નોકરીએ અવસાન સમયે : ગુ.મુ. સેવા. (પેન્શન) નિયમો-૨૦૦૨ના નિયમ-૮૧(૧)
      (બી)
    </p>
    <div style="margin-left: 1em;">
      <p>
        <input
          type="radio"
          checked={$data[$index].bhaag2_25_2[0] === ""}
          on:change={() => ($data[$index].bhaag2_25_2[0] = "")}
        />
        <label for="clear">Clear</label>
      </p>
      <p>
        <input
          type="radio"
          checked={$data[$index].bhaag2_25_2[0] === "a"}
          on:change={() => ($data[$index].bhaag2_25_2[0] = "a")}
        />
        <label
          class={$data[$index].bhaag2_25_2[0] === "a" ? "checked" : ""}
          for="a"
        >
          (એ) એક વર્ષ કરતાં ઓછી પેન્શનપાત્ર નોકરી હોય તે પ્રસંગે
        </label>
      </p>
      <p>
        <input
          type="radio"
          checked={$data[$index].bhaag2_25_2[0] === "b"}
          on:change={() => ($data[$index].bhaag2_25_2[0] = "b")}
        />
        <label
          class={$data[$index].bhaag2_25_2[0] === "b" ? "checked" : ""}
          for="b"
        >
          (બી) એક વર્ષ કે તે કરતાં વધુ પરંતુ પાંચ વર્ષ કરતાં ઓછી પેન્શનપાત્ર
          નોકરી હોય તે પ્રસંગે
        </label>
      </p>
      <p>
        <input
          type="radio"
          checked={$data[$index].bhaag2_25_2[0] === "c"}
          on:change={() => ($data[$index].bhaag2_25_2[0] = "c")}
        />
        <label
          class={$data[$index].bhaag2_25_2[0] === "c" ? "checked" : ""}
          for="c"
        >
          (સી) પાંચ વર્ષ કે વધુ પરંતુ ૨૦ વર્ષ કરતાં ઓછી પેન્શનપાત્ર નોકરી હોય તે
          પ્રસંગે
        </label>
      </p>
      <p>
        <input
          type="radio"
          checked={$data[$index].bhaag2_25_2[0] === "d"}
          on:change={() => ($data[$index].bhaag2_25_2[0] = "d")}
        />
        <label
          class={$data[$index].bhaag2_25_2[0] === "d" ? "checked" : ""}
          for="d"
        >
          (ડી) ૨૦ વર્ષ કે તેના કરતાં વધુ નોકરી કરી હોય ત્યાં મહત્તમ હોય મહત્તમ
          ૩૩ વર્ષની મર્યાદામાં જેટલા વર્ષની પેન્શનપાત્ર નોકરી હોય તેટલા પગાર
        </label>
      </p>
    </div>
  </div>
</div>

<style>
  .checked {
    background-color: #4caf50;
  }
</style>
