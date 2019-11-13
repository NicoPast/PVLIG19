export default class Torso extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, text){
        super(scene, x, y - 20, CreateSick());
        
        this.scene.add.existing(this);
        this.scaleX = 0.7;
        this.scaleY = 0.9;
        this.name = 'Abdomen';
        this.setInteractive();

        this.chest = this.scene.add.image(x, y - 120, CreateSick());
        this.chest.scaleX = 0.7;
        this.chest.scaleY = 0.4;
        this.chest.name = 'Chest';
        this.chest.setInteractive();

        this.on('pointerdown', pointer =>{
            text.setText('Selected: ' + this.name);
        })

        this.chest.on('pointerdown', pointer =>{
            text.setText('Selected: ' + this.chest.name);

        })

        let active = false;

        this.render = function(){
            this.visible = true;
            this.chest.visible = true;
            active = true;
        }

        this.hide = function(){
            this.visible = false;
            this.chest.visible = false;
            active = false;
        }

        this.isShowing = function() {
            return active;
        }

        this.hide();

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
    }
}