<script>
    import Element from "./MainElement/MainElement.svelte";
    import ElementInfo from "./InfoAboutMainElement/ElementInfo.svelte";
    import PeriodicTable from "./Table/PeriodicTable.svelte";


</script>

<!-- three main grid parts-->
<div class="index">
    <div class="item-a">
        <Element />
    </div>

    <div class="item-b">
        <ElementInfo />
    </div>

    <div class="item-c">
        <PeriodicTable />
    </div>
</div>

<style>

    .index {
        height: 100vh;
        width: 100%;
        display: grid;
        grid-template-columns: [one] 3fr [two] 1fr [three] 13fr [four] 1fr [five] 3fr [six] 64fr [seven] 4fr;
        grid-template-rows:  [one] 4fr [two] 13fr [three] 4fr [four] 30fr [five] 4fr;
    }

    .item-a {

        grid-column-start: three;
        grid-column-end: four;

        grid-row-start: two;
        grid-row-end:   three;
    }

    .item-b {
        grid-column-start: two;
        grid-column-end: five;

        grid-row-start: four;
        grid-row-end: five;
    }

    .item-c {
        grid-column-start: six;
        grid-column-end: seven;

        grid-row-start: two;
        grid-row-end: five;
    }
</style>
