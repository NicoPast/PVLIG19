import Parts from './Parts.js'
export default class Torso extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, text) {
        super(scene, x, y - 20, 'yellow');

        scene.add.existing(this);
        this.scaleX = 0.7;
        this.scaleY = 0.9;

        let bodyparts = [];
        bodyparts.push(new Parts(scene, x, y + 80, 'abdomen', text));
        bodyparts.push(new Parts(scene, x, y - 120, 'chest', text));


        let active = false;

        this.render = function () {
            this.visible = true;
            bodyparts.forEach(element => {
                element.visible = true;
            });
            active = true;
        }

        this.hide = function () {
            this.visible = false;
            bodyparts.forEach(element => {
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