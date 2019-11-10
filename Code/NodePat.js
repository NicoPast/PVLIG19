export default class NodePat extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, num, pattern){
        super(scene, x, y, 'square');
    
        this.scene.add.existing(this).setScale(0.15);
        this.visible = false;
        this.setInteractive();
        
        let val = num;

        this.on('pointerup', pointer =>{
            console.log(':D');
            pattern.deactivate();
        })

        this.on('pointerover', pointer =>{
            pattern.updateSol(val);
        })

        this.show = function(){
            this.visible = true;
        }

        this.hide = function(){
            this.visible = false;
        }
    }
}