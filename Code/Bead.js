export default class Bead extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, num, pattern){
        super(scene, x, y, 'square');
    
        scene.add.existing(this).setScale(0.15);
        this.visible = false;
        this.setInteractive();

        let pressed = false;
        
        let val = num;

        this.on('pointerdown', pointer =>{
            this.alpha = 0.01;
            if(!pressed)
                pattern.updateSol(val);
            pressed = true;
        })

        this.show = function(){
            this.alpha = 0.1;
            this.setInteractive();
            this.visible = true;
            pressed = false;
        }

        this.hide = function(){
            this.visible = false;
        }
    }
}