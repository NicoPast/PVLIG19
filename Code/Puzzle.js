export default class Puzzle {
    constructor(scene, sick, part) {
        console.log('creado un demonio de tipo ' + sick + ' en ' + part);
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
        this.goo = {
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
        this.arcano = {
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
        this.cthulhu = {
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
        this.insectos = {
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
        this.solution = this[sick][part].sol;
    }
}


