export default class FaceParts extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, text, part , sick) {
        super(scene, x, y, sick);

        this.scene.add.existing(this);
        this.setInteractive();
        console.log(part + ' createad with ' + sick );
        switch (part) {
            case 'earL':
                this.scaleX = 0.1;
                this.scaleY = 0.25;
                break;
            case 'earR':
                this.scaleX = 0.1;
                this.scaleY = 0.25;
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
            default:
                break;
        }

        this.getPart = function () {
            return part;
        }
    }
}



