import Parts from "./Parts.js";

export default class Face extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, text) {
        super(scene, x, y + 10, 'yellow');

        scene.add.existing(this).setScale(0.95);
        this.scaleX = 0.6;
        this.scaleY = 0.85;
        this.setInteractive();
        this.on('pointerdown', pointer => {
            text.setText('Selected: None');
        });

        let parts = [];


        parts.push(new Parts(scene, x + 140, y, 'ears', text));
        parts.push(new Parts(scene, x, y + 15, 'nose', text));
        parts.push(new Parts(scene, x, y + 80, 'mouth', text));
        parts.push(new Parts(scene, x, y - 40, 'eyes', text));


        let active = false;

        this.render = function () {
            this.visible = true;
            parts.forEach(element => {
                if (element.getPart() == 'ears') {
                    element.other.visible = true;
                }
                element.visible = true;
            });
            active = true;
        }

        this.hide = function () {
            this.visible = false;
            parts.forEach(element => {
                if (element.getPart() == 'ears') {
                    element.other.visible = false;
                }
                element.visible = false;
            });
            active = false;
        }

        this.isShowing = function () {
            return active;
        }

        this.hide();

        this.getCurado = function(){
            for(let i = 0 ; i < parts.length; i++){
                if(!parts[i].getCurado()) return false;
            }
            return true;
        }
    }

}