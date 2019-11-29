export default class Puzzle {
    constructor(scene, sick, part) {
        console.log('creado un demonio de tipo ' + sick + ' en ' + part);
        this.fire = {
            eyes: [
                { sol: [false, false, false, true]},
                { sol: [false, true, true, false]},
                { sol: [false, true, true, true]}
            ],
            ears: [
                { sol: [false, false, true, false]},
                { sol: [true, false, false, false]},
                { sol: [true, false, false, true]}
            ],
            nose: [
                { sol: [false, false, true, true]},
                { sol: [true, false, true, false]},
                { sol: [true, false, true, true]}
            ],
            mouth: [
                { sol: [false, true, false, false]},
                { sol: [true, true, false, false]},
                { sol: [true, true, false, true]}
            ],
            abdomen: [
                { sol: [false, true, false, true]},
                { sol: [true, true, true, false]},
                { sol: [true, false, true, true]}
            ],
            chest: [
                { sol: [false, true, false, true]},
                { sol: [true, true, true, true]},
                { sol: [true, false, false, false]}
            ]
        }
        this.goo = {
            eyes: [
                { sol: [1, 0, 2, 5, 1, 4, 2, 3, 1, 5, 3]},
                { sol: [5, 2, 0, 4, 2]},
                { sol: [3, 4, 3, 2, 4, 0, 3, 0, 5]}
            ],
            ears: [
                { sol: [4, 3, 0, 4, 1, 2]},
                { sol: [3, 4, 2, 0, 4]},
                { sol: [4, 1, 3, 1, 2, 4, 3, 2, 5, 0]}
            ],
            nose: [
                { sol: [2, 4, 0, 1, 3, 5]},
                { sol: [0, 1, 2, 3, 4, 5]},
                { sol: [5, 1, 2, 0, 3, 5]}
            ],
            mouth: [
                { sol: [3, 0, 1, 3, 5, 1, 4, 5, 2, 4, 3]},
                { sol: [1, 5, 3, 0, 2, 1]},
                { sol: [1, 2, 5, 0, 3, 5, 4, 0, 1, 3]}
            ],
            abdomen: [
                { sol: [4, 2, 3, 4, 0, 1, 4, 5, 2, 4]},
                { sol: [2, 3, 2, 5, 2, 4, 3, 1, 0, 2]},
                { sol: [4, 0, 1, 4, 3, 2, 4, 5, 4]}
            ],
            chest: [
                { sol: [2, 4, 3, 2, 0, 1, 2, 5, 4, 0]},
                { sol: [5, 4, 1, 3, 4]},
                { sol: [1, 2, 3, 1, 4, 2, 5, 3, 4, 5, 0, 4]}
            ]
        }
        this.arcano = {
            eyes: [
                { sol: ""},
                { sol: ""},
                { sol: ""}
            ],
            ears: [
                { sol: ""},
                { sol: ""},
                { sol: ""}
            ],
            nose: [
                { sol: ""},
                { sol: ""},
                { sol: ""}
            ],
            mouth: [
                { sol: ""},
                { sol: ""},
                { sol: ""}
            ],
            abdomen: [
                { sol: ""},
                { sol: ""},
                { sol: ""}
            ],
            chest: [
                { sol: ""},
                { sol: ""},
                { sol: ""}
            ]
        }
        this.cthulhu = {
            eyes: [
                { sol: "Charlemagne's cross"},
                { sol: "Shrine of the Three Kings"},
                { sol: "The Eye of Simon"}
            ],
            ears: [
                { sol: "The Holy Foreskin"},
                { sol: ""},
                { sol: ""}
            ],
            nose: [
                { sol: "Jesus's Booger"},
                { sol: ""},
                { sol: ""}
            ],
            mouth: [
                { sol: ""},
                { sol: ""},
                { sol: ""}
            ],
            abdomen: [
                { sol: "Jhon's Pancreas"},
                { sol: ""},
                { sol: ""}
            ],
            chest: [
                { sol: "Judas's Heart"},
                { sol: ""},
                { sol: ""}
            ]
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
        this.solution = this[sick][part][Math.floor(Math.random() * 3) + 1].sol;
    }
}