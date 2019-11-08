import Victim from "./Victim.js";
import Inventario from "./Inventario.js";
import Writter from "./Writter.js";


export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  create() {
    this.zoom = this.add.image(220, 400,'square');
    this.zoom.scaleY = 1.2;
    this.vic = new Victim(this, 850, 400, { x: this.zoom.x, y: this.zoom.y });
    this.desTex = new Writter(this, 700, 950, 'green');
    this.desAcc = new Inventario(this, 1500, 400, 'square');
  }

  update(time, delta) {    
  }
}