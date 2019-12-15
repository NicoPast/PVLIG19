import Bead from "./Bead.js";

export default class Pattern extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, inventory) {
        let background = scene.add.image(x - 50, y - 250, 'rosaryHUD');
        background.scaleX = 0.2;
        background.scaleY = 0.2;
        background.visible = false;
        
        let deactivator = scene.add.image(750, 370, 'square').setAlpha(0.1);
        deactivator.scaleY = 1.9;
        deactivator.scaleX = 4;
        deactivator.visible = false;
        deactivator.setInteractive();

        deactivator.on('pointerdown', pointer => {
            this.cancel();
        });

        super(scene, x + 80, y - 20, 'yellow');
        scene.add.existing(this).setAlpha(0.01);
        this.scaleX = 0.35;
        this.scaleY = 0.6;
        this.setInteractive();
        let visible = false;
        this.visible = false;
        this.on('pointerdown', pointer => {
            console.log(':D');
            this.deactivate();
        })
        let nodes = [];
        nodes.push(new Bead(scene, 820, 520, 0, this));
        nodes.push(new Bead(scene, 730, 430, 1, this));
        nodes.push(new Bead(scene, 740, 330, 2, this));
        nodes.push(new Bead(scene, 1130, 440, 3, this));
        nodes.push(new Bead(scene, 885, 145, 4, this));
        nodes.push(new Bead(scene, 525, 215, 5, this));
        nodes.push(new Bead(scene, 540, 640, 6, this));


        let sol = [];

        this.activate = function () {
            visible = true;
            this.visible = true;
            deactivator.visible = true;
            background.visible = true;
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].show();
            }
        }

        this.deactivate = function () {
            visible = false;
            this.visible = false;
            deactivator.visible = false;
            background.visible = false;
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].hide();
            }
            for (let i = 0; i < sol.length; i++) {
                console.log(sol[i]);
            }

            inventory.usePattern(sol);
            sol = [];
        }

        this.cancel = function () {
            visible = false;
            this.visible = false;
            deactivator.visible = false;
            background.visible = false;
            for (let i = 0; i < nodes.length; i++) {
                nodes[i].hide();
            }
            sol = [];
        }

        this.updateSol = function (val) {
            sol.push(val);
        }
    }
}