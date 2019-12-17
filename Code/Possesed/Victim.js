import GeneralBP from "./GeneralBP.js";

export default class Victim extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, zoom){
        super(scene, x, y, 'victim');
        scene.add.existing(this).setAngle(90);
        this.scaleX = 0.5;
        this.scaleY = 0.5;
        let generalBodyParts = [];
        generalBodyParts.push(new GeneralBP(scene, x + 60, y, 0.3, 0, zoom, this, 'square'));
        generalBodyParts.push(new GeneralBP(scene, x + 180, y, 0.3, 1, zoom, this, 'square'));
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
            targets: this,
            y: y - 200,
            duration: 2000,
            yoyo: true,
            repeat: -1,
            paused: true
        })

        let possesed = scene.tweens.add({
            targets: this,
            y: y - 150,
            angle: 0,
            duration: 3000,
            paused: true,
            completeDelay: 1,
        })

        let win = scene.tweens.add({
            targets: this,
            y: y + 100,
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
            levitate.pause();
            possesed.resume();
            setTimeout(function() { levitatePos.resume(); }, 3000);
            generalBodyParts.forEach(element => {
                element.hide();
                element.visible = false;
            });
        }

        this.Win = function(){
            levitate.pause();
            win.resume();
            generalBodyParts.forEach(element => {
                element.hide();
                element.visible = false;
            });
        }

        this.setPart = function(part){
            this.actualpart = part;
            console.log(this.actualpart);
        }

        this.ComCuracion = function(){
            this.actualpart = undefined;
            scene.changeSelText('Selected: none');
            if(generalBodyParts[0].getCurado() && generalBodyParts[1].getCurado()){
                scene.WinGame();
            }
            else console.log('aun no');
        }
    }
}