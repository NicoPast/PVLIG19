export default class Boot extends Phaser.Scene{
    constructor(){
        super( { key: 'Boot' } );
        let but = document.getElementById('P1');

        but.onclick = () => this.scene.start('Game');;
    }

    preload(){
        this.load.image('victim', './Assets/favicon.png');
        this.load.image('square', './Assets/Button.png');
        this.load.image('red', './Assets/red.png');
        this.load.image('white', './Assets/white.png');
        this.load.image('green', './Assets/green.png');
        this.load.image('pink', './Assets/pink.png');
        this.load.image('yellow', './Assets/yellow.png');
        this.load.image('blue', './Assets/blue.png');
        this.load.image('room', './Assets/Room.jpg');
    }

    create(){
    }
}