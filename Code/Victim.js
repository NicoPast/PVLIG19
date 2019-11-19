import GeneralBP from "./GeneralBodyPart.js";

export default class Victim extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, zoom){
        super(scene, x, y, 'victim');

        let generalBodyParts = [];
        scene.add.existing(this).setScale(10).setAngle(90);
        generalBodyParts.push(new GeneralBP(scene, x - 120, y, 0.3, 0, zoom, this, 'arcano'));
        generalBodyParts.push(new GeneralBP(scene, x + 30, y, 0.4, 1, zoom, this, 'yellow'));
        this.actualpart;

        let levitate = scene.tweens.add({
            targets: [this, generalBodyParts[0], generalBodyParts[1]],
            y: y - 50,
            duration: 2000,
            yoyo: true,
            repeat: -1,
            //onStart: function () { console.log('onStart');},
            //onComplete: function() { console.log('se akabo'); },
        })

        let levitatePos = scene.tweens.add({
            targets: [this, generalBodyParts[0], generalBodyParts[1]],
            y: y - 200,
            duration: 2000,
            yoyo: true,
            repeat: -1,
            paused: true
        })

        let possesed = scene.tweens.add({
            targets: [this, generalBodyParts[0], generalBodyParts[1]],
            y: y - 150,
            angle: 0,
            duration: 3000,
            paused: true,
            completeDelay: 1,
        })

        this.updateZoom = function(){
            generalBodyParts.forEach(element => {
                if(element.isActive()) 
                element.hide();
            });     
        }

        this.loose = function(){
            possesed.resume();
            levitate.pause();
            setTimeout(function() { levitatePos.resume(); }, 3000);
            generalBodyParts.forEach(element => {
                element.hide();
                element.visible = false;
            });
        }

        this.setPart = function(part){
            this.actualpart = part;
            console.log(this.actualpart);
        }
    }
}