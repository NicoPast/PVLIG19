export default class Puzzle {
    constructor(scene, sick, part) {
        console.log('creada una enfermeda de tipo ' + sick + ' en ' + part);

        //this[sick][part].sol;
        this.fire = {
            eyes: {
                sol: [false, false, false, true]
            },
            ears: {
                sol: [true, false, false, true]
            },
            nose: {
                sol: [true, false, false, true]
            },
            mouth: {
                sol: [true, false, false, true]
            },
            abdomen: {
                sol: [true, false, false, true]
            },
            chest: {
                sol: [true, false, false, true]
            }
        }
    }
}


