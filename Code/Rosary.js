import Bead from "./Bead.js";

export default class Pattern extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y , inventory){
        super(scene, x, y, 'yellow')

        scene.add.existing(this).setScale(0.3);
        this.visible = false;
        this.setInteractive();

        this.on('pointerdown', pointer => {
            console.log(':D');
            this.deactivate();
        })

        let nodes = [];
        nodes.push(new Bead(scene, 550, 150, 0, this));
        nodes.push(new Bead(scene, 550, 650, 1, this));
        nodes.push(new Bead(scene, 1050, 150, 2, this));
        nodes.push(new Bead(scene, 1050, 650, 3, this));
        nodes.push(new Bead(scene, 800, 400, 4, this));        

        let sol = []; 

        this.activate = function(){
            this.visible = true;
            for(let i = 0; i < nodes.length; i++){
                nodes[i].show();
            }
        }

        this.deactivate = function(){
            this.visible = false;
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
            sol.push(val);
        }
    }
}