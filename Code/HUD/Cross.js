import NodePat from "./NodePat.js";

export default class Pattern extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y , inventory){
        let background = scene.add.image(x + 50, y, 'pentagram').setScale(0.8).setAngle(180);
        background.visible = false;

        super(scene, x, y, 'square')
        let last = -1;

        scene.add.existing(this).setAlpha(0.01).setScale(4);
        this.visible = false;
        this.setInteractive();

        this.on('pointerup', pointer =>{
            console.log(':D');
            this.deactivate();
        })

        let nodes = [];
        
        nodes.push(new NodePat(scene, 600, 650, 1, this));
        nodes.push(new NodePat(scene, 1000, 650, 3, this));
        nodes.push(new NodePat(scene, 1100, 300, 2, this));
        nodes.push(new NodePat(scene, 500, 300, 0, this));
        nodes.push(new NodePat(scene, 800, 400, 4, this));        
        nodes.push(new NodePat(scene, 800, 70, 5, this));

        let sol = []; 

        this.activate = function(){
            this.visible = true;
            background.visible = true;
            for(let i = 0; i < nodes.length; i++){
                nodes[i].show();
            }
        }

        this.deactivate = function(){
            this.visible = false;
            background.visible = false;
            for(let i = 0; i < nodes.length; i++){
                nodes[i].hide();
            }
            for(let i = 0; i < sol.length; i++){
                console.log(sol[i]);
            }
            inventory.usePattern(sol);
            sol = [];
        }

        this.updateSol = function(val){
            if(last != val){
                sol.push(val);
                last = val;
            }
        }
    }
}