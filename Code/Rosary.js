import Bead from "./Bead.js";

export default class Pattern extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, inventory) {
        super(scene, x, y, 'yellow')

        scene.add.existing(this).setScale(0.3);
        this.setInteractive();
        let visible = false;
        this.on('pointerdown', pointer => {
            console.log(':D');
            this.deactivate();
        })

        let nodes = [];
        nodes.push(new Bead(scene, 1100, 550, 0, this));
        nodes.push(new Bead(scene, 1200, 350, 1, this));
        nodes.push(new Bead(scene, 1100, 150, 2, this));
        nodes.push(new Bead(scene, 850, 100, 3, this));
        nodes.push(new Bead(scene, 600, 150, 4, this));
        nodes.push(new Bead(scene, 500, 350, 5, this));
        nodes.push(new Bead(scene, 600, 550, 6, this));


        let sol = [];

        this.activate = function () {
            if (visible) {
                this.deactivate();
            }
            else {
                visible = true;
                this.visible = true;
                for (let i = 0; i < nodes.length; i++) {
                    nodes[i].show();
                }
            }
        }

        this.deactivate = function () {
            visible = false;
            this.visible = false;
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].hide();
            }
            for (let i = 0; i < sol.length; i++) {
                console.log(sol[i]);
            }

            inventory.usePattern(sol);
            sol = [];
        }

        this.updateSol = function (val) {
            sol.push(val);
        }
    }
}