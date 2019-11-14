import Victim from "./Victim.js";
import Inventory from "./Inventory.js";
import Writter from "./Writter.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  create() {
    let background = this.add.image(650, 375, 'room');
    let zoom = this.add.image(220, 400,'square');
    zoom.scaleY = 1.2;
    let selText = this.add.text(40, 600, 'Selected: None', {fontSize: '32px'});
    let vic = new Victim(this, 850, 400, { x: zoom.x, y: zoom.y, text: selText });
    this.desTex = new Writter(this, 700, 950, 'green');
    this.desAcc = new Inventory(this, 1500, 400, 'square'); 
    this.posesion = 0;
    socket.on('relic', name =>{
      this.desAcc.addItem(name);
  })
  }

  updateUI(actual){
    if(this.desTex.isActive() && actual == 'i')
      this.desTex.updateTween();
    if(this.desAcc.isActive() && actual == 't')
      this.desAcc.updateTween();
  }

  update(time, delta) { 
    this.posesion += 0.01;
    console.log(this.posesion);
  }
}