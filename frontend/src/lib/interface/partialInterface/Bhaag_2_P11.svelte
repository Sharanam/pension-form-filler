<script>
  // @ts-nocheck
  import { data, index } from "../../globalState/data";
</script>

<div>
  <div>
    ઓળખની અંગત નિશાની:
    <input
      type="text"
      bind:value={$data[$index].personal[0]}
      placeholder="પેટની ઉપર કાળા તલની નિશાની"
    />
  </div>
  <div>
    ઉંચાઇ:
    <input
      type="text"
      bind:value={$data[$index].personal[1]}
      placeholder="5' - 7'"
    />
  </div>
</div>

<style>
  input {
    width: max-content;
    max-width: 100%;
    margin: 0;
    padding: 0;
    border-radius: 0;
  }
</style>
