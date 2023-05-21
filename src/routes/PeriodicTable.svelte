<script>
    import {onMount} from "svelte";
    import {elements} from "$lib/stores.js";


    let _elements = []
    let list1 = [1, 2 , 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

    for (let i = 0; i < 18; i++) {
        list1.push(i)
    }

    onMount(async () => {
        const response = await fetch("http://127.0.0.1:8000/get/all")
        _elements = await response.json()
        elements.set(_elements)
    })
</script>

<div class="grid-container">
    <div class="row-number">
        {#each list1 as num}
            <div class="num">{num}</div>
        {/each}
    </div>

    <!--{#each $elements as element}-->
    <!--    <h1>a</h1>-->
    <!--{/each}-->
</div>


<style>
    .grid-container {
        background-color: #C6B4B4;
        height: 100%;
        border-radius: 5px;

        display: grid;
        grid-template-columns: repeat(20, 1fr);
        grid-gap: 3px;
        grid-template-rows: repeat(12, 1fr);
    }

    .num {
        grid-row: 2/3;
        grid-column: 2/5;
    }
</style>
