export default class Boot extends Phaser.Scene{
    constructor(){
        super( { key: 'Boot' } );
    }

    preload(){
        this.load.html('nameform', '/Pages/inputText.html');

        this.load.image('room', '/Assets/Finales/Room.jpg');

        this.load.image('polaroid', '/Assets/Finales/Polaroid.png');
        this.load.image('scroll', '/Assets/Finales/oldscroll.png')
        this.load.image('bag', '/Assets/Finales/Bag.png');
        this.load.image('rosaryInv', '/Assets/Finales/Rosary.png');
        this.load.image('crossInv', '/Assets/Finales/Cross.png');
        this.load.image('holyWater', '/Assets/Finales/HolyWater.png');
        this.load.image('relic', '/Assets/Finales/Relic.png');
        this.load.image('rosaryHUD', '/Assets/Finales/RosaryHUD.png');
        this.load.image('pentagram', '/Assets/Finales/Pentagram.png');
        this.load.image('victim', '/Assets/Finales/Victim.png');

        this.load.image('face', '/Assets/Finales/Face.png');
        this.load.image('mouth', '/Assets/Finales/Mouth.png');
        this.load.image('nose', '/Assets/Finales/Nose.png');
        this.load.image('eyes', '/Assets/Finales/Eyes.png');
        this.load.image('ears', '/Assets/Finales/Ears.png');
        
        this.load.image('body', '/Assets/Finales/Body.png');

        this.load.spritesheet('fire','/Assets/Finales/Fire.png', {frameWidth: 768, frameHeight: 1824});
        this.load.spritesheet('goo', '/Assets/Finales/Goo.png', {frameWidth: 960, frameHeight: 1824})
        this.load.image('tentacle0', '/Assets/Finales/Tentacle0.png');
        this.load.image('tentacle1', '/Assets/Finales/Tentacle1.png');
        this.load.image('tentacle2', '/Assets/Finales/Tentacle2.png');
        this.load.image('worms0', '/Assets/Finales/Worms0.png');
        this.load.image('worms1', '/Assets/Finales/Worms1.png');
        this.load.image('worms2', '/Assets/Finales/Worms2.png');
        this.load.image('smoke0', '/Assets/Finales/Smoke0.png');
        this.load.image('smoke1', '/Assets/Finales/Smoke1.png');
        this.load.image('smoke2', '/Assets/Finales/Smoke2.png');

        //this.load.image('victim', '/Assets/favicon.png');
        this.load.image('square', '/Assets/Button.png');
        this.load.image('red', '/Assets/red.png');
        this.load.image('insectos', '/Assets/white.png');
        this.load.image('green', '/Assets/green.png');
        this.load.image('cthulhu', '/Assets/pink.png');
        this.load.image('yellow', '/Assets/yellow.png');
        this.load.image('arcano', '/Assets/blue.png');
        this.load.image('black', '/Assets/black.png');
    }

    create(){
        this.scene.start('Game');
    }
}