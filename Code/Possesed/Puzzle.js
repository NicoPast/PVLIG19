export default class Puzzle extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, sick, part) {
        super(scene, x, y, sick + 'Anim');
        scene.add.existing(this);
        this.play(sick + 'Key');
        this.alpha = 0.6;
        console.log('creado un demonio de tipo ' + sick + ' en ' + part);

        this.fire = {
            eyes: [
                { sol: [false, false, false, true] },
                { sol: [false, true, true, false] },
                { sol: [false, true, true, true] }
            ],
            ears: [
                { sol: [false, false, true, false] },
                { sol: [true, false, false, false] },
                { sol: [true, false, false, true] }
            ],
            nose: [
                { sol: [false, false, true, true] },
                { sol: [true, false, true, false] },
                { sol: [true, false, true, true] }
            ],
            mouth: [
                { sol: [false, true, false, false] },
                { sol: [true, true, false, false] },
                { sol: [true, true, false, true] }
            ],
            abdomen: [
                { sol: [false, true, false, true] },
                { sol: [true, true, true, false] },
                { sol: [true, false, true, true] }
            ],
            chest: [
                { sol: [false, true, false, true] },
                { sol: [true, true, true, true] },
                { sol: [true, false, false, false] }
            ]
        }
        this.goo = {
            eyes: [
                { sol: [1, 0, 2, 5, 1, 4, 2, 3, 1, 5, 3] },
                { sol: [5, 2, 0, 4, 2] },
                { sol: [3, 4, 3, 2, 4, 0, 3, 0, 5] }
            ],
            ears: [
                { sol: [4, 3, 0, 4, 1, 2] },
                { sol: [3, 4, 2, 0, 4] },
                { sol: [4, 1, 3, 1, 2, 4, 3, 2, 5, 0] }
            ],
            nose: [
                { sol: [2, 4, 0, 1, 3, 5] },
                { sol: [0, 1, 2, 3, 4, 5] },
                { sol: [5, 1, 2, 0, 3, 5] }
            ],
            mouth: [
                { sol: [3, 0, 1, 3, 5, 1, 4, 5, 2, 4, 3] },
                { sol: [1, 5, 3, 0, 2, 1] },
                { sol: [1, 2, 5, 0, 3, 5, 4, 0, 1, 3] }
            ],
            abdomen: [
                { sol: [4, 2, 3, 4, 0, 1, 4, 5, 2, 4] },
                { sol: [2, 3, 2, 5, 2, 4, 3, 1, 0, 2] },
                { sol: [4, 0, 1, 4, 3, 2, 4, 5, 4] }
            ],
            chest: [
                { sol: [2, 4, 3, 2, 0, 1, 2, 5, 4, 0] },
                { sol: [5, 4, 1, 3, 4] },
                { sol: [1, 2, 3, 1, 4, 2, 5, 3, 4, 5, 0, 4] }
            ]
        }
        this.arcano = {
            eyes: [
                { sol: "Mater mea in oculis meis et prurigine" },
                { sol: "Opus est aliquo oculum guttae" },
                { sol: "Habeo ruber oculis meis" }
            ],
            ears: [
                { sol: "Habeo cera aures repleti" },
                { sol: "Et Audiologist est iens ad induendum ad tabernus" },
                { sol: "Non audiunt quicquam" }
            ],
            nose: [
                { sol: "Num occidere me allergies sunt" },
                { sol: "Ego puto captus a frigus" },
                { sol: "Ut plerumque intra me Diglet" }
            ],
            mouth: [
                { sol: "Et in spiritum olfacies ad landfill" },
                { sol: "Debes ire ad dentist saepius" },
                { sol: "Non enim solemnitas pandere secessus" }
            ],
            abdomen: [
                { sol: "Venter satis nocent" },
                { sol: "Ne tam prohibere manducans panem purus" },
                { sol: "Ego vastata est in escam" }
            ],
            chest: [
                { sol: "Gigeria et Pecs sunt" },
                { sol: "Et hoc est quod facit ferro naviculam" },
                { sol: "Ego should satus tondenti" }
            ]
        }
        this.cthulhu = {
            eyes: [
                { sol: "Charlemagne's cross" },
                { sol: "Shrine of the Three Kings" },
                { sol: "The Eye of Simon" }
            ],
            ears: [
                { sol: "The Holy Foreskin" },
                { sol: "Crown of thorns" },
                { sol: "Saint Catherine's Head" }
            ],
            nose: [
                { sol: "Jesus's Booger" },
                { sol: "Holy Spirit Sneeze" },
                { sol: "Saint Andrew's hair" }
            ],
            mouth: [
                { sol: "Shroud of Turin" },
                { sol: "St. Anthony's Tongue" },
                { sol: "Jesus's Teeth" }
            ],
            abdomen: [
                { sol: "Jhon's Pancreas" },
                { sol: "Holy Nail" },
                { sol: "Jesus's Umbilical cord" }
            ],
            chest: [
                { sol: "Judas's Heart" },
                { sol: "Lance of Longinus" },
                { sol: "Saint Joshep's Bones" }
            ]
        }
        this.insectos = {
            eyes: [
                { sol: [2, 3, 4, 6, 0, 1, 5] },
                { sol: [6, 0, 5, 1, 2, 4, 3] },
                { sol: [1, 6, 3, 5, 2, 0, 4] }
            ],
            ears: [
                { sol: [0, 2, 6, 3, 5, 4, 1] },
                { sol: [6, 2, 1, 4, 0, 3, 5] },
                { sol: [2, 0, 5, 1, 6, 4, 3] }
            ],
            nose: [
                { sol: [3, 6, 5, 1, 4, 0, 2] },
                { sol: [4, 3, 2, 5, 0, 6, 1] },
                { sol: [6, 2, 0, 3, 1, 4, 5] }
            ],
            mouth: [
                { sol: [2, 3, 5, 0, 1, 4, 6] },
                { sol: [4, 3, 1, 0, 2, 6, 5] },
                { sol: [4, 3, 2, 5, 0, 1, 6] }
            ],
            abdomen: [
                { sol: [6, 1, 0, 5, 4, 2, 3] },
                { sol: [0, 2, 4, 5, 3, 1, 6] },
                { sol: [1, 6, 3, 5, 2, 0, 4] }
            ],
            chest: [
                { sol: [5, 2, 4, 6, 3, 1, 0] },
                { sol: [3, 5, 1, 2, 4, 0, 6] },
                { sol: [4, 3, 2, 5, 0, 6, 1] }
            ]
        }
        let rand = Math.floor(Math.random() * 3);
        this.solution = this[sick][part][rand].sol;

        switch (part) {
            case 'ears':
                this.scaleX = -0.03;
                this.scaleY = 0.07;
                this.y = this.y + 5;
                this.other = scene.add.sprite(x - 202, y, sick + 'Anim');
                this.other.play(sick + 'Key');

                switch (rand) {
                    case 0:
                        this.other.tint = 0x00FF00;
                        break;
                    case 1:
                        this.other.tint = 0xFFFFFF;
                        break;
                    case 2:
                        this.other.tint = 0xFF0000;
                        break;
                }
                this.other.scaleX = 0.03;
                this.other.scaleY = 0.07;
                this.other.alpha = 0.6;
                this.other.y = this.other.y + 5;
                break;
            case 'nose':
                this.scaleX = 0.04;
                this.scaleY = 0.09;
                break;
            case 'mouth':
                this.scaleX = 0.07;
                this.scaleY = 0.025;
                this.y = this.y + 10;
                break;
            case 'eyes':
                this.scaleX = 0.12;
                this.scaleY = 0.04;
                this.y = this.y + 10;
                break;
            case 'chest':
                this.scaleX = 0.2;
                this.scaleY = 0.15;
                break;
            case 'abdomen':
                this.scaleX = 0.2;
                this.scaleY = 0.1;
                this.y = this.y - 10;
                this.x = this.x + 5;
                break;
            default:
                console.log('Como cojones has llegado aquí');
                break;
        }

        switch (rand) {
            case 0:
                this.tint = 0x00FF00;
                break;
            case 1:
                if (sick == 'arcano')
                    this.tint = 0x000000;
                else
                    this.tint = 0xFFFFFF;
                break;
            case 2:
                this.tint = 0xFF0000;
                break;
        }
    }
}