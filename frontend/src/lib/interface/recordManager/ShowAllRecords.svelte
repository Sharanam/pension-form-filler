<script>
    // @ts-nocheck

    import { preferences } from "../../globalState/data";
</script>

<div class="center inline">
    <input type="checkbox" id="showAll" bind:checked={$preferences.showAll} />
    <label for="showAll">Show All Records</label>
</div>

<style>
    .inline {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0.3em;
    }
</style>
