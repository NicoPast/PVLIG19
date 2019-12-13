import Parts from "./Parts.js";

export default class Face extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x - 10, y, 'face');
        scene.add.existing(this).setScale(0.95);
        this.scaleX = 0.28;
        this.scaleY = 0.28;

        let parts = [];

        parts.push(new Parts(scene, x + 99, y, 'ears'));
        parts.push(new Parts(scene, x, y - 10, 'eyes'));
        parts.push(new Parts(scene, x + 4, y + 15, 'nose'));
        parts.push(new Parts(scene, x + 4, y + 80, 'mouth'));

        this.setInteractive();
        this.on('pointerdown', pointer => {
            scene.changeSelText('Selected: none');
        });

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