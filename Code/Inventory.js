import Action from "./Action.js";

export default class Inventary extends Phaser.GameObjects.Sprite{
    constructor(scene ,x , y, texture){
        super(scene, x, y, texture);

        this.scene.add.existing(this);
        this.scaleY = 2;
        this.setInteractive();

        this.on('pointerdown', pointer => {
            this.updateTween();
            this.scene.updateUI('i');
        });

        this.deactivator = this.scene.add.image(750, 370, 'square').setAlpha(0.3);
        this.deactivator.scaleY = 1.9;
        this.deactivator.scaleX = 4;
        this.deactivator.visible = false;
        this.deactivator.setInteractive();

        this.deactivator.on('pointerdown', pointer => {
            this.updateTween();
        });

        let activated = false;

        let buts = [];
        for(let i = 0; i < 4; i++){
            buts.push(new Action(scene, x + 50, 100 + i * 200, this, i));
        }

        let tween = scene.tweens.add({
            targets: this,
            x: x - 250,
            duration: 100,
            yoyo: true,
            repeat: 0,
            paused: true,
            onYoyo: function() { tween.pause(); }
        })

        this.isActive = function(){
            return activated;
        }

        this.updateTween = function(){
            tween.resume();
            for(let i = 0; i < buts.length; i++){
                buts[i].updateTween();
            }
            if(activated){
                activated = false
                this.deactivator.visible = false;
            }
            else {
                activated = true;
                this.deactivator.visible = true;
            }
        }
    }
}