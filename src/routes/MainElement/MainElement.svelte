<script>
    import {hoveredElementStore} from "$lib/stores.js";
</script>


<div class="grid-container">
    <div class="symbols item">
        <div class="periodic-symbol">
            <p>{$hoveredElementStore.symbol}</p>
        </div>
        <div class="periodic-number">
            <p>{$hoveredElementStore.number}</p>
        </div>
    </div>

    <div class="periodic-name item">
        <p>{$hoveredElementStore.name}</p>
    </div>
</div>


<style>
    .grid-container {

        background-color: #686868;
        border-radius: 5px;
        color: white;

        height: 100%;
        display: grid;
        grid-template-rows: 1fr 1fr;
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