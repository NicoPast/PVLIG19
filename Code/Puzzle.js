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
                sol: [2, 3, 4, 0 ,1 ]
            },
            ears: {
                sol: [0, 2, 3, 4 , 1]
            },
            nose: {
                sol: [3, 1, 4, 0 , 2]
            },
            mouth: {
                sol: [4, 3, 1, 0 , 2]
            },
            abdomen: {
                sol: [1, 0, 4, 2 , 3]
            },
            chest: {
                sol: [2, 4, 3, 1 , 0]
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


