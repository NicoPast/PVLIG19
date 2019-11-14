export default class Puzzle extends Phaser.GameObjects.Sprite{
    constructor( scene , sick , part){
       super(scene , sick , part);
            console.log('creada una enfermeda de tipo ' + sick  + ' en ' + part);


    }
}