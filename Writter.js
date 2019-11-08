export default class Writter extends Phaser.GameObjects.Sprite{
    constructor(scene ,x , y, texture){
        super(scene, x, y, texture);

        this.scene.add.existing(this);
        this.scaleX = 2.7;

        this.setInteractive();
        this.on('pointerdown', pointer => {
            if(!tween.isPaused())
                tween.play();
            else tween.resume();
        });

        let tween = scene.tweens.add({
            targets: this,
            y: y - 100,
            duration: 100,
            yoyo: true,
            repeat: 0,
            paused: true,
            onYoyo: function() { tween.pause(); }
          })
    }
}