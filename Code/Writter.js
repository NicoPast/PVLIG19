export default class Writter extends Phaser.GameObjects.Sprite{
    constructor(scene ,x , y, texture){
        super(scene, x, y, texture);

        this.scene.add.existing(this);        
        this.scaleX = 2.7;
        this.setInteractive();
        this.on('pointerdown', pointer => {
            this.updateTween();
            this.scene.updateUI('t');
        });

        this.deactivator = this.scene.add.image(650, 400, 'square').setAlpha(0.3);
        this.deactivator.scaleY = 2;
        this.deactivator.scaleX = 3.25;
        this.deactivator.visible = false;
        this.deactivator.setInteractive();

        this.deactivator.on('pointerdown', pointer => {
            this.updateTween();
        });

        let activated = false;

        let tween = scene.tweens.add({
            targets: this,
            y: y - 100,
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