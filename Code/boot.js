export default class Boot extends Phaser.Scene{
    constructor(){
        super( { key: 'Boot' } );
    }

    preload(){
        this.load.html('nameform', '/Pages/inputText.html');

        this.load.image('room', '/Assets/Finales/Room.jpg');

        this.load.image('polaroid', '/Assets/Finales/Polaroid.png')
        this.load.image('face', '/Assets/Finales/Face.png');
        this.load.image('mouth', '/Assets/Finales/Mouth.png');
        this.load.image('nose', '/Assets/Finales/Nose.png');
        this.load.image('eyes', '/Assets/Finales/Eyes.png');
        this.load.image('ears', '/Assets/Finales/Ears.png');
        
        this.load.image('body', '/Assets/Finales/Body.png');

        this.load.image('scroll', '/Assets/Finales/oldscroll.png')
        this.load.image('bag', '/Assets/Finales/Bag.png');

        this.load.image('victim', '/Assets/favicon.png');
        this.load.image('square', '/Assets/Button.png');
        this.load.image('fire', '/Assets/red.png');
        this.load.image('insectos', '/Assets/white.png');
        this.load.image('goo', '/Assets/green.png');
        this.load.image('cthulhu', '/Assets/pink.png');
        this.load.image('yellow', '/Assets/yellow.png');
        this.load.image('arcano', '/Assets/blue.png');
        this.load.image('balck', '/Assets/black.png');
    }

    create(){
        this.scene.start('Game');
    }
}