export default class Inventario extends Phaser.GameObjects.Sprite{
    constructor(scene ,x , y, texture){
        super(scene, x, y, texture);

        this.scene.add.existing(this);
        this.scaleY = 2;

        this.setInteractive();
        this.on('pointerdown', pointer => {
            if(!tween.isPaused())
                tween.play();
            else tween.resume();
        });

        let tween = scene.tweens.add({
            targets: this,
            x: x - 250,
            duration: 100,
            yoyo: true,
            repeat: 0,
            paused: true,
            onYoyo: function() { tween.pause(); }
          })
    }
}