import Puzzle from "./Puzzle.js";

export default class Parts extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, part, text) {
        let sick = CreateSick();
        super(scene, x, y, sick);

        scene.add.existing(this);
        this.setInteractive();
        let curado = false;
        switch (part) {
            case 'ears':
                this.scaleX = 0.1;
                this.scaleY = 0.25;
                this.other = scene.add.image(x - 280, y, sick);
                this.other.scaleX = 0.1;
                this.other.scaleY = 0.25;
                this.other.setInteractive();
                break;
            case 'nose':
                this.scaleX = 0.1;
                this.scaleY = 0.2;
                break;
            case 'mouth':
                this.scaleX = 0.25;
                this.scaleY = 0.1;
                break;
            case 'eyes':
                this.scaleX = 0.35;
                this.scaleY = 0.1;
                break;
            case 'chest':
                this.scaleX = 0.7;
                this.scaleY = 0.4;
                break;
            case 'abdomen':
                this.scaleX = 0.7;
                this.scaleY = 0.4;
                break;
            default:
                console.log('Como cojones has llegado aquí');
                break;
        }

        this.puzzle = new Puzzle(scene, sick, part);

        this.getPart = function () {
            return part;
        }
        this.getCurado = function () {
            return curado;
        }
        this.getPuzzle = function () {
            return this.puzzle.solution;
        }
        this.on('pointerdown', pointer => {
            text.setText('Selected: ' + part);
            scene.vic.setPart(this);
            console.log(this.puzzle.solution);
        });
        if (part == 'ears') {
            this.other.on('pointerdown', pointer => {
                text.setText('Selected: ' + part);
                scene.vic.setPart(this);
                console.log(part + " " + this.puzzle.solution);
            });
        }
        this.Curar = function (bool) {
            if (bool) {
                console.log("Curado");
                curado = true;
                this.setTexture('square');
                if(part == 'ears')this.other.visible = false;
                this.visible = false;
                scene.vic.ComCuracion();
            }

            else {
                console.log("Fallo");
            }
        }
        function CreateSick() {

            switch (Math.floor(Math.random() * 5) + 1) {
                case 1:
                    return 'goo';
                case 2:
                    return 'fire';
                case 3:
                    return 'cthulhu';
                case 4:
                    return 'arcano';
                case 5:
                    return 'insectos';
            }
        }
    }

}



