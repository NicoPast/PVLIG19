import Puzzle from "./Puzzle.js";

export default class Parts extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, part) {
        let sick = CreateSick();
        let name = part;
        if(part == 'abdomen' || part == 'chest'){
            name = 'square';
        }
        super(scene, x, y, name);
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
                this.alpha = 0.001;
                break;
            case 'abdomen':
                this.scaleX = 0.7;
                this.scaleY = 0.4;
                this.alpha = 0.001;
                break;
            default:
                console.log('Como cojones has llegado aquí');
                break;
        }

        this.puzzle = new Puzzle(scene,  x, y - 10, sick, part);

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
                this.puzzle.visible = false;
                this.disableInteractive();
                if(part == 'ears'){
                    this.puzzle.other.visible = false;
                    this.other.disableInteractive();
                }
                scene.vic.ComCuracion();
            }
            else {
                scene.attackPlayer(sick);
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
        
        this.hide = function(){
            if(part == 'ears'){
                this.puzzle.other.visible = false;
                this.other.disableInteractive();
            }
            this.puzzle.visible = false;
        }
    }

}



