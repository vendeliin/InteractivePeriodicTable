<script>
    import {onMount} from "svelte";
    import {element} from "$lib/stores.js";


    let _element = []

    onMount(async () => {
        const response = await fetch("http://127.0.0.1:8000/get/110")
        _element = await response.json()
        element.set(_element)
    })

</script>


<div class="grid-container">
    <div class="symbols item">
        <div class="periodic-symbol">
            <p>{$element.symbol}</p>
        </div>
        <div class="periodic-number">
            <p>{$element.id}</p>
        </div>
    </div>

    <div class="periodic-name item">
        <p>{$element.element}</p>
    </div>
</div>


<style>
    .grid-container {

        background-color: #686868;
        border-radius: 5px;
        color: white;

        height: 100%;
        display: grid;
        grid-template-rows: [first] 1fr [second] 1fr;
    }

    .symbols {
        display: grid;
        grid-template-columns: [first] 1fr [second] 1fr;
    }

    .periodic-symbol p {
        font-size: 64px;
        margin: 2rem 0 0 1rem;
    }
    .periodic-number p {
        text-align: center;
        font-size: 32px;
        margin: 3rem 0 0 0;
    }
    .periodic-name p {
        font-size: 32px;
        margin: 2rem 0 0 1rem;
    }

</style>