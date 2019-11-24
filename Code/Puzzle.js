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
                sol: [2, 3, 4, 0, 1, 5]
            },
            ears: {
                sol: [0, 2, 3, 5, 4, 1]
            },
            nose: {
                sol: [3, 5, 1, 4, 0, 2]
            },
            mouth: {
                sol: [4, 3, 1, 0, 2, 5]
            },
            abdomen: {
                sol: [1, 0, 5, 4, 2, 3]
            },
            chest: {
                sol: [5, 2, 4, 3, 1, 0]
            }
        }
        this.arcano = {
            eyes: {
                sol: "frase en latin eyes"
            },
            ears: {
                sol: "frase en latin ears"
            },
            nose: {
                sol: "frase en latin nose"
            },
            mouth: {
                sol: "frase en latin mouth"
            },
            abdomen: {
                sol: "frase en latin abdomen"
            },
            chest: {
                sol: "frase en latin chest"
            }
        }
        this.cthulhu = {
            eyes: {
                sol: CrearReliquia()
            },
            ears: {
                sol: CrearReliquia()
            },
            nose: {
                sol: CrearReliquia()
            },
            mouth: {
                sol: CrearReliquia()
            },
            abdomen: {
                sol: CrearReliquia()
            },
            chest: {
                sol: CrearReliquia()
            }
        }
        this.insectos = {
            eyes: {
                sol: [2, 3, 4, 6, 0, 1, 5]
            },
            ears: {
                sol: [0, 2, 6, 3, 5, 4, 1]
            },
            nose: {
                sol: [3, 6, 5, 1, 4, 0, 2]
            },
            mouth: {
                sol: [4, 3, 1, 0, 2, 6, 5]
            },
            abdomen: {
                sol: [6, 1, 0, 5, 4, 2, 3]
            },
            chest: {
                sol: [5, 2, 4, 6, 3, 1, 0]
            }
        }
        this.solution = this[sick][part].sol;


        function CrearReliquia() {
            switch (Math.floor(Math.random() * 3) + 1) {
                case 1:
                    return "Charlemagne's cross";
                case 2:
                    return "Shrine of the Three Kings";
                case 3:
                    return "The Holy Foreskin";

            }
        }
    }
}