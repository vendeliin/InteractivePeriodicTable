import {writable} from "svelte/store";
export let elementsStore = writable([])
export let colorsStore = writable( {
        "alkali metal": "#DB2B2B",
        "actinide": "#E43D3D",
        "metalloid": "#E43D3D",
        "alkaline earth metal": "#DF5858",
        "transition metal": "#847CE4",
        "diatomic nonmetal": "#A5A0E1",
        "lanthanide": "#A3CB4D",
        "post-transition metal": "#B7DA6D",
        "noble gas": "#C4DD8E"
        })
export let hoveredElementStore = writable({
    "id": 1,
    "phase": "gas",
    "group": 1,
    "numberOfElectrons": 1,
    "numberOfNeutrons": 0,
    "symbol": "H",
    "period": 1,
    "numberOfProtons": 1,
    "atomicMass": 1.007,
    "element": "Hydrogen" })
