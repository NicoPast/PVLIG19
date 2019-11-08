export default class GeneralBP extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, scale, type, zoom, texture){
        super(scene, x, y, texture);

        this.parts = [];
        this.scene.add.existing(this).setScale(scale).setAlpha(0.5);
        this.setInteractive();
        let typeImg = 'red';
        switch(type){
            case(0):
            typeImg = 'blue';
            break;
        }
        this.on('pointerdown', pointer => {
            this.scene.add.image(zoom.x, zoom.y - 30, typeImg).setScale(0.95);
        });
    }
}