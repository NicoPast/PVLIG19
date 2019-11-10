export default class Face extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, text){
        super(scene, x, y + 10, 'yellow');

        this.scene.add.existing(this).setScale(0.95);
        this.scaleX = 0.6;
        this.scaleY = 0.85;

        let parts = [];

        // ears
        parts.push(this.scene.add.image(x - 140, y, 'red'));
        parts.push(this.scene.add.image(x + 140, y, 'red'));
        parts[0].scaleX = 0.1;
        parts[0].scaleY = 0.25;
        parts[0].name = 'Ears';
        parts[0].setInteractive();
        parts[1].scaleX = 0.1;
        parts[1].scaleY = 0.25;
        parts[1].name = 'Ears';
        parts[1].setInteractive();
        
        // eyes
        parts.push(this.scene.add.image(x, y - 40, 'green'));
        parts[2].scaleX = 0.35;
        parts[2].scaleY = 0.1;
        parts[2].name = 'Eyes';
        parts[2].setInteractive();

        // mouth
        parts.push(this.scene.add.image(x, y + 80, 'pink'));
        parts[3].scaleX = 0.25;
        parts[3].scaleY = 0.1;
        parts[3].name = 'Mouth';
        parts[3].setInteractive();

        // nose
        parts.push(this.scene.add.image(x, y + 15, 'blue'));
        parts[4].scaleX = 0.1;
        parts[4].scaleY = 0.2;
        parts[4].name = 'Nose';
        parts[4].setInteractive();

        parts.forEach(element =>{
            element.on('pointerdown', pointer =>{
                console.log(element.name);
                text.setText('Selected: ' + element.name);
            });
        })

        let active = false;

        this.render = function(){
            this.visible = true;
            parts.forEach(element => {
                element.visible = true;
            });
            active = true;
        }

        this.hide = function(){
            this.visible = false;
            parts.forEach(element => {
                element.visible = false;
            });
            active = false;
        }

        this.isShowing = function() {
            return active;
        }

        this.hide();
    }
}