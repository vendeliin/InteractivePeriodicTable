<script>
    import {hoveredElementStore} from "$lib/stores.js";

</script>

<div class="grid-container">

    <div class="item mass">
        <div class="key">
            <p>Atomic Mass</p>
        </div>
        <div class="value">
            <p>{$hoveredElementStore.atomic_mass}</p>
        </div>
    </div>

    <div class="item neutrons">
        <div class="key">
            <p>Boil</p>
        </div>
        <div class="value">
            <p>{$hoveredElementStore.boil}</p>
        </div>
    </div>

    <div class="item protons">
        <div class="key">
            <p>Category</p>
        </div>
        <div class="value">
            <p>{$hoveredElementStore.category}</p>
        </div>
    </div>

    <div class="item electrons">
        <div class="key">
            <p>Block</p>
        </div>
        <div class="value">
            <p>{$hoveredElementStore.block}</p>
        </div>
    </div>

    <div class="item period">
        <div class="key">
            <p>Period</p>
        </div>
        <div class="value">
            <p>{$hoveredElementStore.period}</p>
        </div>
    </div>

    <div class="item group">
        <div class="key">
            <p>Group</p>
        </div>
        <div class="value">
            <p>{$hoveredElementStore.group}</p>
        </div>
    </div>

    <div class="item phase">
        <div class="key">
            <p>Phase</p>
        </div>
        <div class="value">
            <p>{$hoveredElementStore.phase}</p>
        </div>
    </div>

</div>


<style>
    .grid-container {
        background-color: #686868;
        border-radius: 5px;
        color: white;

        height: 100%;
        display: grid;

        grid-template-columns: repeat(3, 1fr);
    }

    .item {
        display: grid;
        grid-template-columns: 1fr 1fr;

        align-self: center;
        grid-column: two/three;
    }


    .key {
        margin-left: 5px;
    }
    .value {
        justify-self: end;
        margin-right: 5px;
    }



</style>