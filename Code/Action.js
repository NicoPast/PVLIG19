import Pattern from "./Pattern.js";

export default class Action extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, inventory, type){

        let name = 'blue';
        let use;
        switch(type){
            case 0:
                name = 'blue';
                use = new Pattern(scene, 750, 400);
            break;
            case 1:
                name = 'green';
            break;
            case 2:
                name = 'red';
            break;
            case 3:
                use = false;
                name = 'yellow';
            break;
        }

        super(scene, x, y, name);

        this.scene.add.existing(this);
        this.scaleY = 0.37;
        this.scaleX = 0.6;
        this.setInteractive();

        this.on('pointerdown', pointer => {
            inventory.updateTween();
            if(type == 0)
            use.activate();
            else if(type == 3 && use){
                inventory.removeItem();
                console.log('I use the power of this ancient relic!');
                use = false;
            }
        })

        let tween = scene.tweens.add({
            targets: this,
            x: x - 300,
            duration: 100,
            yoyo: true,
            repeat: 0,
            paused: true,
            onYoyo: function() { tween.pause(); }
        })

        this.updateTween = function(){
            tween.resume();
        }

        this.updateUse = function(newUse){
            use = newUse;
        }
    }
}