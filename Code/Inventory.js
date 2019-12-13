import Action from "./Action.js";

export default class Inventory extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x + 30, y - 50, texture);

        scene.add.existing(this);
        this.scaleY = 0.8;
        this.scaleX = 0.7;
        this.setInteractive();

        this.on('pointerdown', pointer => {
            this.updateTween();
            scene.updateUI('i');
        });

        let deactivator = scene.add.image(750, 370, 'square').setAlpha(0.1);
        deactivator.scaleY = 1.9;
        deactivator.scaleX = 4;
        deactivator.visible = false;
        deactivator.setInteractive();

        deactivator.on('pointerdown', pointer => {
            this.updateTween();
        });

        let activated = false;

        let buts = [];
        for (let i = 0; i < 4; i++) {
            buts.push(new Action(scene, x + 50, 100 + i * 200, this, i));
        }

        let item = this.scene.add.image(x + 50, 700, 'square');
        item.scaleY = 0.37;
        item.scaleX = 0.6;
        item.visible = false;
        item.name = 'empty';

        let holyWater = this.scene.add.image(x + 50, 500, 'square');
        holyWater.scaleY = 0.37;
        holyWater.scaleX = 0.6;
        holyWater.visible = false;

        let tween = this.scene.tweens.add({
            targets: [this, item, holyWater],
            x: x - 250,
            duration: 100,
            yoyo: true,
            repeat: 0,
            paused: true,
            onYoyo: function () { tween.pause(); }
        })

        this.isActive = function () {
            return activated;
        }

        this.updateTween = function () {
            tween.resume();
            for (let i = 0; i < buts.length; i++) {
                buts[i].updateTween();
            }
            if (activated) {
                activated = false
                deactivator.visible = false;
            }
            else {
                activated = true;
                deactivator.visible = true;
            }
        }

        this.addItem = function (name) {
            item.setTexture('cthulhu');
            item.visible = true;
            item.name = name;
            console.log(item.name);
            buts[3].updateUse(true);
        }
        this.addHolyWater = function (HolyWater) {
            this.HolyWater = HolyWater;
            holyWater.setTexture('cthulhu');
            holyWater.visible = true;
            buts[2].updateUse(true);
            console.log("I have a Holy Water with this configuration " + this.HolyWater.sol[0] + " " + this.HolyWater.sol[1] + " " + this.HolyWater.sol[2] + " " + this.HolyWater.sol[3]);
        }
        this.useHolyWater = function () {
            let correct = true;
            let i = 0;
            while (i < scene.vic.actualpart.puzzle.solution.length && correct) {
                if (this.HolyWater.sol[i] != scene.vic.actualpart.puzzle.solution[i]) correct = false;
                i++
            }
            scene.vic.actualpart.Curar(correct);
            holyWater.visible = false;
        }

        this.usePattern = function (sol) {
            let correct = true;
            if (sol.length != scene.vic.actualpart.puzzle.solution.length)
                correct = false;
            else {
                let i = 0;
                while (i < scene.vic.actualpart.puzzle.solution.length && correct) {
                    if (sol[i] != scene.vic.actualpart.puzzle.solution[i]) correct = false;
                    i++
                }
            }
            if (sol.length != 0) scene.vic.actualpart.Curar(correct);
        }

        this.useRelic = function () {

            if (scene.vic.actualpart.puzzle.solution == item.name) scene.vic.actualpart.Curar(true);
            else scene.vic.actualpart.Curar(false);
            item.visible = false;
        }
    }
}