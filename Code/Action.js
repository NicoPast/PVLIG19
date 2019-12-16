import Cross from "./Cross.js";
import Rosary from "./Rosary.js";

export default class Action extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, sX, sY, tweenXMove, inventory, type) {

        let name;
        let use;
        switch (type) {
            case 0:
                use = new Cross(scene, 750, 400,  inventory);
                name = 'crossInv';
                break;
            case 1:
                use = new Rosary(scene, 850, 650, inventory);
                name = 'rosaryInv';
                break;
            case 2:
                use = false;
                name = 'holyWater';
                break;
            case 3:
                use = false;
                name = 'relic';
                break;
        }

        super(scene, x, y, name);

        scene.add.existing(this);
        this.scaleX = sX;
        this.scaleY = sY;
        if(type > 1)
            this.visible = false;
        this.setInteractive();

        this.on('pointerdown', pointer => {
            inventory.updateTween();
            if (scene.vic.actualpart != undefined) {
                if (type == 0)
                    use.activate();
                else if(type == 1){
                    use.activate();
                }
                else if (type == 2 && use) {
                    inventory.useHolyWater('holyWater');
                    //console.log('I use the power of this Holy Water');
                    use = false;
                    this.visible = false;
                }
                else if (type == 3 && use) {
                    inventory.useRelic();
                    //console.log('I use the power of this ancient relic!');
                    use = false;
                    this.visible = false;
                }
            }
        });

        let tween = scene.tweens.add({
            targets: this,
            x: x - tweenXMove,
            duration: 100,
            yoyo: true,
            repeat: 0,
            paused: true,
            onYoyo: function () { tween.pause(); }
        })

        this.updateTween = function () {
            tween.resume();
        }

        this.updateUse = function (newUse) {
            use = newUse;
            if(type > 1)
                this.visible = true;
        }
    }
}