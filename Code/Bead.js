export default class Bead extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, num, pattern){
        super(scene, x, y, 'square');
    
        scene.add.existing(this).setScale(0.15);
        this.visible = false;
        this.setInteractive();
        
        let val = num;

        this.on('pointerdown', pointer =>{
            this.alpha = 0.5;
            pattern.updateSol(val);
            this.disableInteractive();
        })

        this.show = function(){
            this.alpha = 1;
            this.setInteractive();
            this.visible = true;
        }

        this.hide = function(){
            this.visible = false;
        }
    }
}