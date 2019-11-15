import Puzzle from "./Puzzle.js";

export default class Parts extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y,  part , sick) {
        super(scene, x, y, sick);

        scene.add.existing(this);
        this.setInteractive();
        let curado = false;
        switch (part) {
            case 'ears':
                this.scaleX = 0.1;
                this.scaleY = 0.25;
                this.other = scene.add.image(x - 280 , y ,sick);
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

        let puzzle = new Puzzle(scene , sick , part);
        this.getPart = function () {
            return part;
        }
        this.getCurado = function(){
            return curado;
        }
    }
}



