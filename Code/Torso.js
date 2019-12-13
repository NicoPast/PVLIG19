import Parts from './Parts.js'
export default class Torso extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene, x - 10, y - 25, 'body');

        scene.add.existing(this);
        this.scaleX = 0.2;
        this.scaleY = 0.22;

        let bodyparts = [];
        bodyparts.push(new Parts(scene, x, y + 80, 'abdomen'));
        bodyparts.push(new Parts(scene, x, y - 120, 'chest'));

        this.setInteractive();
        this.on('pointerdown', pointer => {
            scene.changeSelText('Selected: none');
        });

        let active = false;

        this.render = function () {
            this.visible = true;
            bodyparts.forEach(element => {
                element.puzzle.visible = true;
                element.visible = true;
            });
            active = true;
        }

        this.hide = function () {
            this.visible = false;
            bodyparts.forEach(element => {
                element.puzzle.visible = false;
                element.visible = false;
            });
            active = false;
        }

        this.isShowing = function () {
            return active;
        }

        this.hide();

        this.getCurado = function(){
            if(bodyparts[0].getCurado() && bodyparts[1].getCurado()) return true;
            else return false;
        }
    }
}