<script>
    import {onMount} from "svelte";

    import {elements} from "$lib/stores.js";



    let headNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    let sideMainNumbers = [1, 2, 3, 4, 5, 6, 7]
    let downSideNumbers = [6, 7]
        let _elements = []


    onMount(async () => {
        const response = await fetch("http://127.0.0.1:8000/get/all")
        _elements = await response.json()
        elements.set(_elements)
    })

</script>

<div class="grid-container">

    {#each headNumbers as num}
        <div class="numbers" style="grid-column: {num+1}/{num+2}; grid-row: 2/3">{num}</div>
    {/each}

    <!--    <div class="element">-->
    <!--        {#each elements as element}-->
    <!--            <Element />-->
    <!--        {/each}-->
    <!--    </div>-->

    {#each sideMainNumbers as num}
        <div class="numbers" style="grid-column: 1/2; grid-row: {num+2}/{num+3}">{num}</div>
    {/each}

    {#each downSideNumbers as num}
        <div class="numbers" style="grid-column: 3/4; grid-row: {num+4}/{num+5}">{num}</div>
    {/each}
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

    .numbers {
        font-size: 20px;
        text-align: center;
        align-self: center;
    }

</style>
