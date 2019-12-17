export default class Boot extends Phaser.Scene{
    constructor(){
        super( { key: 'Boot' } );
    }

    preload(){
        this.load.html('nameform', '/Pages/inputText.html');

        this.load.audio('musicBack', '/Assets/Music/el-canto-gregoriano.mp3');

        this.load.image('room', '/Assets/Finals/Room.jpg');

        this.load.image('polaroid', '/Assets/Finals/Polaroid.png');
        this.load.image('scroll', '/Assets/Finals/oldscroll.png')
        this.load.image('bag', '/Assets/Finals/Bag.png');
        this.load.image('rosaryInv', '/Assets/Finals/Rosary.png');
        this.load.image('crossInv', '/Assets/Finals/Cross.png');
        this.load.image('holyWater', '/Assets/Finals/HolyWater.png');
        this.load.image('relic', '/Assets/Finals/Relic.png');
        this.load.image('rosaryHUD', '/Assets/Finals/RosaryHUD.png');
        this.load.image('pentagram', '/Assets/Finals/Pentagram.png');
        this.load.image('victim', '/Assets/Finals/Victim.png');

        this.load.image('face', '/Assets/Finals/Face.png');
        this.load.image('mouth', '/Assets/Finals/Mouth.png');
        this.load.image('nose', '/Assets/Finals/Nose.png');
        this.load.image('eyes', '/Assets/Finals/Eyes.png');
        this.load.image('ears', '/Assets/Finals/Ears.png');
        
        this.load.image('body', '/Assets/Finals/Body.png');

        this.load.spritesheet('fire','/Assets/Finals/Fire.png', {frameWidth: 1200, frameHeight: 1200});
        this.load.spritesheet('goo', '/Assets/Finals/Goo.png', {frameWidth: 1200, frameHeight: 1200})
        this.load.image('tentacle0', '/Assets/Finals/Tentacle0.png');
        this.load.image('tentacle1', '/Assets/Finals/Tentacle1.png');
        this.load.image('tentacle2', '/Assets/Finals/Tentacle2.png');
        this.load.image('worms0', '/Assets/Finals/Worms0.png');
        this.load.image('worms1', '/Assets/Finals/Worms1.png');
        this.load.image('worms2', '/Assets/Finals/Worms2.png');
        this.load.image('smoke0', '/Assets/Finals/Smoke0.png');
        this.load.image('smoke1', '/Assets/Finals/Smoke1.png');
        this.load.image('smoke2', '/Assets/Finals/Smoke2.png');

        
        //this.load.image('victim', '/Assets/favicon.png');
        this.load.image('square', '/Assets/Button.png');
        /*
        this.load.image('red', '/Assets/red.png');
        this.load.image('insectos', '/Assets/white.png');
        this.load.image('green', '/Assets/green.png');
        this.load.image('cthulhu', '/Assets/pink.png');
        this.load.image('yellow', '/Assets/yellow.png');
        this.load.image('arcano', '/Assets/blue.png');
        */
        this.load.image('black', '/Assets/black.png');
    }

    create(){
        this.scene.start('Game');
    }
}