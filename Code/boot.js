export default class Boot extends Phaser.Scene{
    constructor(){
        super( { key: 'Boot' } );
    }

    preload(){
        this.load.html('nameform', '/Pages/inputText.html');

        this.load.image('victim', '/Assets/favicon.png');
        this.load.image('square', '/Assets/Button.png');
        this.load.image('fire', '/Assets/red.png');
        this.load.image('insectos', '/Assets/white.png');
        this.load.image('goo', '/Assets/green.png');
        this.load.image('cthulhu', '/Assets/pink.png');
        this.load.image('yellow', '/Assets/yellow.png');
        this.load.image('arcano', '/Assets/blue.png');
        this.load.image('room', '/Assets/Room.jpg');
    }

    create(){
        this.scene.start('Game');
    }
}