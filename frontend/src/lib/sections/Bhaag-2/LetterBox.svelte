<script>
    import { toGujarati } from "../../tools/toGujarati";
    import { toString } from "../../tools/toString";

    export let arr = [],
        s = 8;
</script>

<div class="date">
    {#each toGujarati(toString(arr, "") || ".".repeat(s))?.split("") as i}
        <span>
            {i || " "}
        </span>
    {/each}
</div>

<style>
    .date {
        display: flex;
    }

    .date > span {
        border: 1px solid black;
        min-width: 2rem;
        padding: 0.2rem;
        text-align: center;
        text-transform: uppercase;
    }
</style>
