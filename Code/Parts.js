import Puzzle from "./Puzzle.js";

export default class Parts extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, part) {
        let sick = CreateSick();
        if(part == 'mouth')
            super(scene, x, y, 'mouth');
        else if(part == 'nose')
            super(scene, x, y, 'nose');
        else if(part == 'eyes')
            super(scene, x, y, 'eyes');
        else if(part == 'ears'){
            super(scene, x, y, 'ears');
        }
        else super(scene, x, y, sick);

        scene.add.existing(this);
        this.setInteractive();
        let curado = false;
        switch (part) {
            case 'ears':
                this.scaleX = -0.4;
                this.scaleY = 0.25;
                this.other = scene.add.image(x - 202, y, 'ears');
                this.other.scaleX = 0.4;
                this.other.scaleY = 0.25;
                this.other.setInteractive();
                break;
            case 'nose':
                this.scaleX = 0.3;
                this.scaleY = 0.3;
                break;
            case 'mouth':
                this.scaleX = 0.3;
                this.scaleY = 0.3;
                break;
            case 'eyes':
                this.scaleX = 0.1;
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
            scene.changeSelText('Selected: ' + part);
            scene.vic.setPart(this);
            console.log(this.puzzle.solution);
        });
        if (part == 'ears') {
            this.other.on('pointerdown', pointer => {
                scene.changeSelText('Selected: ' + part);
                scene.vic.setPart(this);
                console.log(part + " " + this.puzzle.solution);
            });
        }
        this.Curar = function (bool) {
            if (bool) {
                console.log("Curado");
                curado = true;
                this.setTexture('square');
                this.disableInteractive();
                if(part == 'ears'){
                    this.other.setTexture('square');
                    this.other.disableInteractive();
                }
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



