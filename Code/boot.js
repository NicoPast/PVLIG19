export default class Boot extends Phaser.Scene{
    constructor(){
        super( { key: 'Boot' } );
    }

    preload(){
        this.load.html('nameform', '/Pages/inputText.html');

        this.load.audio('musicBack', '/Assets/Music/el-canto-gregoriano.mp3');

        this.load.image('room', '/Assets/Images/Room.jpg');

        this.load.image('polaroid', '/Assets/Images/Polaroid.png');
        this.load.image('scroll', '/Assets/Images/oldscroll.png')
        this.load.image('bag', '/Assets/Images/Bag.png');
        this.load.image('rosaryInv', '/Assets/Images/Rosary.png');
        this.load.image('crossInv', '/Assets/Images/Cross.png');
        this.load.image('holyWater', '/Assets/Images/HolyWater.png');
        this.load.image('relic', '/Assets/Images/Relic.png');
        this.load.image('rosaryHUD', '/Assets/Images/RosaryHUD.png');
        this.load.image('pentagram', '/Assets/Images/Pentagram.png');
        this.load.image('victim', '/Assets/Images/Victim.png');

        this.load.image('face', '/Assets/Images/Face.png');
        this.load.image('mouth', '/Assets/Images/Mouth.png');
        this.load.image('nose', '/Assets/Images/Nose.png');
        this.load.image('eyes', '/Assets/Images/Eyes.png');
        this.load.image('ears', '/Assets/Images/Ears.png');
        
        this.load.image('body', '/Assets/Images/Body.png');

        this.load.spritesheet('fire','/Assets/Images/Fire.png', {frameWidth: 1200, frameHeight: 1200});
        this.load.spritesheet('goo', '/Assets/Images/Goo.png', {frameWidth: 1200, frameHeight: 1200})
        this.load.image('tentacle0', '/Assets/Images/Tentacle0.png');
        this.load.image('tentacle1', '/Assets/Images/Tentacle1.png');
        this.load.image('tentacle2', '/Assets/Images/Tentacle2.png');
        this.load.image('worms0', '/Assets/Images/Worms0.png');
        this.load.image('worms1', '/Assets/Images/Worms1.png');
        this.load.image('worms2', '/Assets/Images/Worms2.png');
        this.load.image('smoke0', '/Assets/Images/Smoke0.png');
        this.load.image('smoke1', '/Assets/Images/Smoke1.png');
        this.load.image('smoke2', '/Assets/Images/Smoke2.png');

        this.load.image('square', '/Assets/Images/Button.png');
        this.load.image('black', '/Assets/Images/Black.png');

        /*
        this.load.image('victim', '/Assets/favicon.png');
        this.load.image('red', '/Assets/red.png');
        this.load.image('insectos', '/Assets/white.png');
        this.load.image('green', '/Assets/green.png');
        this.load.image('cthulhu', '/Assets/pink.png');
        this.load.image('yellow', '/Assets/yellow.png');
        this.load.image('arcano', '/Assets/blue.png');
        */
    }

    create(){
        this.scene.start('Game');
    }
}