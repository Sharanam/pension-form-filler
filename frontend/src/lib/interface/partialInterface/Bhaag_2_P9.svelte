<script>
  // @ts-nocheck
  import { data, index } from "../../globalState/data";
  import { ageCalculator } from "../../tools/ageCalculator";
  $: age = ageCalculator(
    $data[$index].janmTarikh,
    $data[$index].mudikrutTarikh
  );
</script>

<div>
  <div>
    Age: {age || "------"}
  </div>
  <div>
    {age && `Replace ${age} with: `}
    <input
      type="number"
      min="0"
      bind:value={$data[$index].mudikrutRakamAge}
      placeholder={age++ || "63"}
    />
  </div>
</div>
