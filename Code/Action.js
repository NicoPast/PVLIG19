import Cross from "./Cross.js";
import Rosary from "./Rosary.js";

export default class Action extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, inventory, type) {

        let name;
        let use;
        switch (type) {
            case 0:
                use = new Cross(scene, 750, 400,  inventory);
                name = 'arcano';
                break;
            case 1:
                use = new Rosary(scene, 850, 650, inventory);
                name = 'goo';
                break;
            case 2:
                use = false;
                name = 'fire';
                break;
            case 3:
                use = false;
                name = 'yellow';
                break;
        }

        super(scene, x, y, name);

        scene.add.existing(this);
        this.scaleY = 0.37;
        this.scaleX = 0.6;
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
                }
                else if (type == 3 && use) {
                    inventory.useRelic();
                    //console.log('I use the power of this ancient relic!');
                    use = false;
                }
            }
            else  window.alert("Selecciona primero una parte");
        });

        let tween = scene.tweens.add({
            targets: this,
            x: x - 300,
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
        }
    }
}