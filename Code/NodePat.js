export default class NodePat extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, num, pattern){
        super(scene, x, y, 'square');
    
        scene.add.existing(this).setScale(0.15);
        this.visible = false;
        this.setInteractive();
        
        let val = num;

        this.on('pointerup', pointer =>{
            console.log(':D');
            pattern.deactivate();
        })

        this.on('pointerover', pointer =>{
            this.alpha = 0.5;
            pattern.updateSol(val);
        })

        this.on('pointerout', pointer =>{
            this.alpha = 1;
        })

        this.show = function(){
            this.visible = true;
        }

        this.hide = function(){
            this.visible = false;
        }
    }
}