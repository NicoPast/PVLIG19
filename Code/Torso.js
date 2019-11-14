import Parts from './Parts.js'
export default class Torso extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, text){
        super(scene, x, y - 20, 'yellow');
        
        this.scene.add.existing(this);
        this.scaleX = 0.7;
        this.scaleY = 0.9;
        
        let bodyparts = [];
        bodyparts.push( new Parts( scene , x, y + 80, 'abdomen' , CreateSick()));
        bodyparts.push(new Parts( scene , x, y - 120, 'chest' , CreateSick()));
       
        bodyparts.forEach( element => {
            element.on('pointerdown', pointer =>{
                text.setText('Selected: ' + element.getPart());
            });
        });

        let active = false;

        this.render = function(){
            this.visible = true;
            bodyparts.forEach( element => {
                element.visible = true;
            });
            active = true;
        }

        this.hide = function(){
            this.visible = false;
            bodyparts.forEach( element => {
                element.visible = false;
            });
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