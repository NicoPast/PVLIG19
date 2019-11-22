export default class Writter extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);
        this.scaleX = 2.7;
        this.setInteractive();
        this.on('pointerdown', pointer => {
            if (!element.clic && !activated) {
                this.updateTween();
                this.scene.updateUI('t');
            }
        });

        let deactivator = this.scene.add.image(650, 200, 'square').setAlpha(0.3);
        deactivator.scaleY = 2;
        deactivator.scaleX = 3.25;
        deactivator.visible = false;
        deactivator.setInteractive();

        deactivator.on('pointerdown', pointer => {
            this.updateTween();
            element.visible = false;
        });

        let element = scene.add.dom(x, y - 200).createFromCache("nameform");
        element.clic = false;
        element.visible = false;
        let submit = scene.input.keyboard.addKey('Enter');

        submit.on('down', () => {
            if (!element.clic && activated) {

                let inputText = element.getChildByName('nameField');
                //  Have they entered anything?
                if (inputText.value !== '' && scene.vic.actualpart != undefined) {
                    //  Populate the text with whatever they typed in
                    //text.setText('Welcome ' + inputText.value);
                    console.log(inputText.value);
                    
                    scene.vic.actualpart.Curar(inputText.value == scene.vic.actualpart.puzzle.solution);

                } else console.log('EMPTY o nopart');
                inputText.value = '';
                this.updateTween();
                this.scene.updateUI('t');
            }
        })


        let activated = false;

        let tween = scene.tweens.add({
            targets: [this],
            y: y - 100,
            duration: 100,
            yoyo: true,
            repeat: 0,
            paused: true,
            onYoyo: function () { tween.pause(); element.visible = true },
            onComplete: function () { element.visible = false; }
        })

        this.isActive = function () {
            return activated;
        }

        this.updateTween = function () {
            tween.resume();
            if (activated) {
                activated = false
                deactivator.visible = false;
            }
            else {
                activated = true;
                deactivator.visible = true;
            }
        }
    }
}