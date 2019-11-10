import Victim from "./Code/Victim.js";
import Inventory from "./Code/Inventory.js";
import Writter from "./Code/Writter.js";


export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  create() {
    this.zoom = this.add.image(220, 400,'square');
    this.zoom.scaleY = 1.2;
    this.vic = new Victim(this, 850, 400, { x: this.zoom.x, y: this.zoom.y });
    this.desTex = new Writter(this, 700, 950, 'green');
    this.desAcc = new Inventory(this, 1500, 400, 'square');    
  }

  updateUI(actual){
    if(this.desTex.isActive() && actual == 'i')
      this.desTex.updateTween();
    if(this.desAcc.isActive() && actual == 't')
      this.desAcc.updateTween();
  }

  update(time, delta) {    
  }
}