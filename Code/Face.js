import Parts from "./Parts.js";

export default class Face extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, text) {
        super(scene, x, y + 10, 'yellow');

        scene.add.existing(this).setScale(0.95);
        this.scaleX = 0.6;
        this.scaleY = 0.85;
        this.setInteractive();
        this.on('pointerdown', pointer => {
            text.setText('Selected: None');
        });

        let parts = [];


        parts.push(new Parts(scene, x + 140, y , 'ears' , CreateSick()));
        parts.push(new Parts(scene, x, y + 15,  'nose', CreateSick()));
        parts.push(new Parts(scene, x, y + 80, 'mouth', CreateSick()));
        parts.push(new Parts(scene, x, y - 40, 'eyes', CreateSick()));

        parts.forEach( element => {
            if(element.getPart() == 'ears'){
                element.other.on('pointerdown', pointer =>{
                    text.setText('Selected: ' + element.getPart());
                });
            }
            element.on('pointerdown', pointer =>{
                text.setText('Selected: ' + element.getPart());
            });
        });

        let active = false;

        this.render = function () {
            this.visible = true;
            parts.forEach(element => {
                if(element.getPart() == 'ears'){
                    element.other.visible = true;
                }
                element.visible = true;
            });
            active = true;
        }

        this.hide = function () {
            this.visible = false;
            parts.forEach(element => {
                if(element.getPart() == 'ears'){
                    element.other.visible = false;
                }
                element.visible = false;
            });
            active = false;
        }

        this.isShowing = function () {
            return active;
        }

        this.getActualPart = function(){
                parts.forEach(element => {
                element.getActualPart();
            })

        }

        function CreateSick(){
            
            switch (Math.floor(Math.random() * 5) + 1) {
                case 1:
                    return'green';
                case 2: 
                    return 'red';
                case 3: 
                    return 'pink';
                case 4:
                    return 'blue';
                case 5:
                    return 'white';
            }
        }

        this.hide();
    }
    
}