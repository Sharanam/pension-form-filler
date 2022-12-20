<script>
    // @ts-nocheck

    import { data, index, preferences } from "../../globalState/data";
    import ShowAllRecords from "../../interface/recordManager/ShowAllRecords.svelte";

    export let file = [];
    let show = false;
</script>

<div class="no-print">
    {#if show}
        <div class="hideable" style="padding: 1rem;">
            <div class="outside">
                <button
                    class="box-controller"
                    on:click={() => {
                        show = false;
                    }}
                >
                    <!-- Close Sign In Unicode which looks like "X" -->
                    &#x2715;
                </button>
            </div>
            {#if file}
                <ShowAllRecords />
                <!-- record navigator starts -->
                <div class=" center">
                    <button
                        class="navigator-button"
                        on:click={() => {
                            index.set(0);
                        }}
                        disabled={$index === 0}
                    >
                        |&lt;
                    </button>
                    <button
                        class="navigator-button"
                        on:click={() => {
                            if ($index > 0) {
                                index.update((n) => n - 1);
                            }
                        }}
                        disabled={$index === 0}
                    >
                        &lt;
                    </button>

                    <div style="display: inline;">
                        Record: {$index + 1}/{$data.length}
                    </div>
                    <button
                        class="navigator-button"
                        on:click={() => {
                            if ($index < $data.length - 1) {
                                index.update((n) => n + 1);
                            }
                        }}
                        disabled={$index === $data.length - 1}
                    >
                        &gt;
                    </button>
                    <button
                        class="navigator-button"
                        on:click={() => {
                            index.set($data.length - 1);
                        }}
                        disabled={$index === $data.length - 1}
                    >
                        &gt;|
                    </button>
                </div>
            {/if}
        </div>
    {:else}
        <button
            class="hideable box-controller"
            on:click={() => {
                show = true;
            }}
        >
            &lt;&lt;
        </button>
    {/if}
</div>

<style>
    .hideable {
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 2;
        background-color: rgb(39 47 84 / 1);
        transition: transform 0.5s;
        transform: translateX(0);
    }
    div.outside {
        position: relative;
    }
    div.outside > button {
        position: absolute;
        right: 0;
        bottom: calc(100% + 0.7rem);
        z-index: 2;
        background-color: rgb(194, 33, 33);
    }
    button.box-controller {
        border: 0;
        background-color: rgb(39 47 84 / 1);
        color: white;
        padding: 0.5rem;
        font-size: 1.5rem;
        cursor: pointer;
        border-radius: 0;
    }
    .navigator-button {
        margin: 0;
        border-radius: 0;
        font-size: 1rem;
    }
</style>
