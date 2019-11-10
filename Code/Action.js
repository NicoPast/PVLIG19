import Pattern from "./Pattern.js";

export default class Action extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, inventary, type){

        let name = 'blue';
        let use = {};
        switch(type){
            case 0:
                name = 'blue';
                use = new Pattern(scene, 750, 400);
            break;
            case 1:
                name = 'pink';
            break;
            case 2:
                name = 'red';
            break;
            case 3:
                name = 'yellow';
            break;
        }

        super(scene, x, y, name);

        this.scene.add.existing(this);
        this.scaleY = 0.37;
        this.scaleX = 0.6;
        this.setInteractive();

        this.on('pointerdown', pointer => {
            inventary.updateTween();
            if(type == 0)
            use.activate();
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
    }
}