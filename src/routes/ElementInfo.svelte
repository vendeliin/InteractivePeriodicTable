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

    <div class="item mass">
        <div class="key">
            <p>Atomic Mass</p>
        </div>
        <div class="value">
            <p>{$element.atomicMass}</p>
        </div>
    </div>

    <div class="item neutrons">
        <div class="key">
            <p>Number of neutrons</p>
        </div>
        <div class="value">
            <p>{$element.numberOfNeutrons}</p>
        </div>
    </div>

    <div class="item protons">
        <div class="key">
            <p>Number of protons</p>
        </div>
        <div class="value">
            <p>{$element.numberOfProtons}</p>
        </div>
    </div>

    <div class="item electrons">
        <div class="key">
            <p>Number of electrons</p>
        </div>
        <div class="value">
            <p>{$element.numberOfElectrons}</p>
        </div>
    </div>

    <div class="item period">
        <div class="key">
            <p>Period</p>
        </div>
        <div class="value">
            <p>{$element.period}</p>
        </div>
    </div>

    <div class="item group">
        <div class="key">
            <p>Group</p>
        </div>
        <div class="value">
            <p>{$element.group}</p>
        </div>
    </div>

    <div class="item phase">
        <div class="key">
            <p>Phase</p>
        </div>
        <div class="value">
            <p>{$element.phase}</p>
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

        grid-template-columns: [one] 1rem [two] 1fr [three] 1rem;
    }

    .item {
        display: grid;
        grid-template-columns: 1fr 1fr;

        margin: 1rem 0 1rem 0;

        align-self: center;
        grid-column: two/three;
    }

    .value {
        justify-self: end;
    }

    .mass {
    }

    .neutrons {

    }

    .protons {

    }

    .electrons {

    }



</style>