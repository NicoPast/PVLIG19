export default class Puzzle {
    constructor(scene, sick, part) {
        console.log('creada una enfermeda de tipo ' + sick + ' en ' + part);
        this.fire = {
            eyes: {
                sol: [false, false, false, true]
            },
            ears: {
                sol: [false, false, true, false]
            },
            nose: {
                sol: [false, false, true, true]
            },
            mouth: {
                sol: [false, true, false, false]
            },
            abdomen: {
                sol: [false, true, false, true]
            },
            chest: {
                sol: [true, false, false, true]
            }
        }

        this.solution = this.fire[part].sol;
    }
}


