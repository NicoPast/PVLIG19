import NodePat from "./NodePat.js";

export default class Pattern extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y){
        super(scene, x, y, 'yellow')

        this.scene.add.existing(this).setAlpha(0.1).setScale(4);
        this.visible = false;

        this.on('pointerup', pointer =>{
            console.log(':D');
            this.deactivate();
        })

        let nodes = [];
        nodes.push(new NodePat(scene, 550, 150, 0, this));
        nodes.push(new NodePat(scene, 550, 650, 1, this));
        nodes.push(new NodePat(scene, 1050, 150, 2, this));
        nodes.push(new NodePat(scene, 1050, 650, 3, this));
        nodes.push(new NodePat(scene, 800, 400, 4, this));        

        let sol = []; 

        this.activate = function(){
            this.setInteractive();
            this.visible = true;
            for(let i = 0; i < nodes.length; i++){
                nodes[i].show();
            }
        }

        this.deactivate = function(){
            this.disableInteractive();
            this.visible = false;
            for(let i = 0; i < nodes.length; i++){
                nodes[i].hide();
            }
            for(let i = 0; i < sol.length; i++){
                console.log(sol[i]);
            }
            sol = [];
        }

        this.updateSol = function(val){
            sol.push(val);
        }
    }
}