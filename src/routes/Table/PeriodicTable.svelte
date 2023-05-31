<script>
    import {onMount} from "svelte";
    import {elementsStore} from "$lib/stores.js";

    import Element from "./Element.svelte";
    import tableWithCategories from "./TableWithCategories.svelte";
    import TableWithCategories from "./TableWithCategories.svelte";

    onMount(async () => {
        const response = await fetch("http://127.0.0.1:8000/get/all")
        let elements = await response.json()
        elementsStore.set(elements.elements)
    })

    const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ,16, 17, 18]
    const rows = [1, 2, 3, 4, 5, 6, 7]
    const downRows = [6, 7]
</script>

<div class="periodic-table">
    <!-- creates numbers on the sides -->
    {#each columns as column}
        <div class="num" style="grid-column: {column + 1}; text-align: center; align-self: center;">{column}</div>
    {/each}
    {#each rows as row}
        <div class="num" style="grid-row: {row + 1}; text-align: center; align-self: center;">{row}</div>
    {/each}
    {#each downRows as row}
        <div class="num" style="grid-row: {row + 4}; grid-column: {3};text-align: center; align-self: center;">{row}</div>
    {/each}

    <!-- create table with names of categories -->
    <div class="table">
        <TableWithCategories />
    </div>


<!--     create all elements-->
    {#each $elementsStore as element}
        <Element element = {element} />
    {/each}
</div>


<style>
    .periodic-table {
        background-color: #C6B4B4;

        height: 100%;
        border-radius: 5px;

        display: grid;
        grid-template-columns: repeat(20, 1fr);
        grid-template-rows: repeat(11, 1fr);
    }
    .num {
        height: 3.4rem;
        width: 3.1rem;
    }
    .table {
        grid-row: 3/6;
        grid-column: 5/13;
    }
</style>
