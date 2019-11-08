export default class Boot extends Phaser.Scene{
    constructor(){
        super( { key: 'Boot' } );
    }

    preload(){
        this.load.image('victim', 'favicon.png');
        this.load.image('square', 'Button.png');
        this.load.image('red', 'red.png');
        this.load.image('white', 'white.png');
        this.load.image('green', 'green.png');
        this.load.image('pink', 'pink.png');
        this.load.image('yellow', 'yellow.png');
        this.load.image('blue', 'blue.png');
    }

    create(){
        this.scene.start('Game');
    }
}