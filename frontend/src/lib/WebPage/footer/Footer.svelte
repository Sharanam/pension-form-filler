<script>
    let y = 0;
</script>

<footer class="no-print">
    &copy; 2022 PG Department of Computer Science & Technology, Sardar Patel
    University, Vallabh Vidyanagar, Gujarat, India
    {#if y}
        <button
            class="back-to-top"
            on:click={() => {
                window.scrollTo(0, 0);
            }}
        >
            Back to top
        </button>
    {/if}
</footer>

<svelte:window bind:scrollY={y} />

<style>
    footer {
        text-align: center;
        padding: 1rem;
        background-color: #444;
        color: #fff;
    }
    .back-to-top {
        position: fixed;
        left: 1rem;
        bottom: 1rem;
        z-index: 3;

        border: none;
        width: min-content;
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        margin: 0 0.5rem;
        opacity: 0.5;
        transition: opacity 0.5s;
    }
    .back-to-top:hover {
        opacity: 1;
    }
</style>
