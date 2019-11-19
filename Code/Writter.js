export default class Writter extends Phaser.GameObjects.Sprite{
    constructor(scene ,x , y, texture){
        super(scene, x, y, texture);

        scene.add.existing(this);        
        this.scaleX = 2.7;
        this.setInteractive();
        this.on('pointerdown', pointer => {
            this.updateTween();
            this.scene.updateUI('t');
        });

        let deactivator = this.scene.add.image(650, 400, 'square').setAlpha(0.3);
        deactivator.scaleY = 2;
        deactivator.scaleX = 3.25;
        deactivator.visible = false;
        deactivator.setInteractive();

        deactivator.on('pointerdown', pointer => {
            this.updateTween();
        });


        let element = scene.add.dom(x,y).createFromCache("nameform");
        
        console.log(element.x + ' ' +  element.y + ' ' + this.x + ' ' +  this.y);

        let activated = false;

        let tween = scene.tweens.add({
            targets: [this,element],
            y: y - 200,
            duration: 100,
            yoyo: true,
            repeat: 0,
            paused: true,
            onYoyo: function() { tween.pause();}
          })

        this.isActive = function(){
            return activated;
        }

        this.updateTween = function(){
            tween.resume();
            if(activated){
                activated = false
                deactivator.visible = false;
            }
            else {
                activated = true;
                deactivator.visible = true;
            }
        }
    }
}