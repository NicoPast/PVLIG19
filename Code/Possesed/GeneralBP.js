import Face from "./Face.js";
import Torso from "./Torso.js";

export default class GeneralBP extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, scale, type, zoom, victim, texture){
        super(scene, x, y, texture);

        scene.add.existing(this).setScale(scale).setAlpha(0.001);
        this.setInteractive();
        let typeImg;
        switch(type){
            case 0:
                typeImg = new Torso(scene, zoom.x, zoom.y);
            break;
            case 1:
                typeImg = new Face(scene, zoom.x, zoom.y - 30);
            break;
        }
        this.on('pointerdown', pointer => {
            victim.updateZoom();            
            typeImg.render();
            scene.changeSelText('Selected: none');
            victim.actualpart = undefined;
        });

        this.render = function(){
            typeImg.render();
        }

        this.hide = function(){
            typeImg.hide(); 
        }

        this.isActive = function(){
            return typeImg.isShowing();
        }
        this.getCurado = function(){
            return typeImg.getCurado();
        }
    }
}