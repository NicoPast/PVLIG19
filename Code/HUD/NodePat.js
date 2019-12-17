export default class NodePat extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, num, pattern){
        super(scene, x, y, 'square');
    
        scene.add.existing(this).setScale(0.15);
        this.visible = false;
        this.alpha = 0.3;
        this.setInteractive();
        
        let val = num;

        this.on('pointerup', pointer =>{
            console.log(':D');
            pattern.deactivate();
        })

        this.on('pointerover', pointer =>{
            this.alpha = 0.2;
            pattern.updateSol(val);
        })

        this.on('pointerout', pointer =>{
            this.alpha = 0.3;
        })

        this.show = function(){
            this.visible = true;
        }

        this.hide = function(){
            this.visible = false;
        }
    }
}