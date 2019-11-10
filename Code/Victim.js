import GeneralBP from "./GeneralBodyPart.js";

export default class Victim extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, zoom){
        super(scene, x, y, 'victim');

        this.generalBodyParts = [];
        this.scene.add.existing(this).setScale(10).setAngle(90);
        this.generalBodyParts.push(new GeneralBP(scene, x - 120, y, 0.3, 0, zoom, this, 'blue'));
        this.generalBodyParts.push(new GeneralBP(scene, x + 30, y, 0.4, 1, zoom, this, 'yellow'));


        let tween = scene.tweens.add({
            // varios van en un array
            targets: [this, this.generalBodyParts[0], this.generalBodyParts[1]],
            y: y - 50,
            duration: 2000,
            yoyo: true,
            repeat: -1,
            //onStart: function () { console.log('onStart');},
            //onComplete: function() { console.log('se akabo'); },
        })

        this.updateZoom = function(){
            let i = 0;
            while(i < this.generalBodyParts.length){
                if(this.generalBodyParts[i].isActive())
                this.generalBodyParts[i].hide();
                i++;
            }
        }
    }
}