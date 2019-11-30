import Victim from "./Victim.js";
import Inventory from "./Inventory.js";
import Writter from "./Writter.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  create() {
    this.add.image(650, 375, 'room');
    this.zoom = this.add.image(220, 400, 'polaroid');
    this.zoom.scaleY = 1.7;
    this.zoom.scaleX = 1.4;
    this.posText = this.add.text(20, 20, 'Possesion Progress: 0%', { fontSize: '32px' })
    this.selText = this.add.text(40, 600, 'Selected: None', { fontSize: '32px', color: '#000' });
    this.vic = new Victim(this, 850, 400, { x: this.zoom.x, y: this.zoom.y, text: this.selText });
    this.desTex = new Writter(this, 700, 950, 'goo');
    this.desAcc = new Inventory(this, 1500, 400, 'square');
    this.soul = 100;
    this.startTime = Date.now();
    this.posRate = 0.5;
    this.desPos = 1;


    this.keycheat = this.input.keyboard.addKey('F1');
    this.win = false;

    socket.on('relic', name => {
      this.desAcc.addItem(name);
    });
    socket.on('holyWater', HolyWater => {
      this.desAcc.addHolyWater(HolyWater);
    });
  }

  updateUI(actual) {
    if (this.desTex.isActive() && actual == 'i')
      this.desTex.updateTween();
    if (this.desAcc.isActive() && actual == 't')
      this.desAcc.updateTween();
  }

  update(time, delta) {
    if(!this.win){
      if(this.soul > 0){
        this.soul = 100 - (Date.now() - this.startTime) * (0.001 * this.posRate);
        this.posText.setText('Remaining Soul: ' + parseFloat(Math.round(this.soul * 100) / 100).toFixed(2) + ' %')
      }
      else{
        this.posText.setText('THE SOUL IS DAMNED')
        this.zoom.visible = false;
        this.selText.visible = false;
        this.desAcc.visible = false;
        this.desTex.visible = false;
        this.vic.loose();
      }
    }
    else{
      if(this.soul < 100){
        console.log('llego')
        this.soul += (Date.now() - this.startTime) * (0.001 * this.desPos);
        this.posText.setText('Remaining Soul: ' + parseFloat(Math.round(this.soul * 100) / 100).toFixed(2) + ' %')
      }
      else this.posText.setText('THE SOUL BELONGS TO THE LORD');
    } 
    
    
    if (this.keycheat.isDown) {
      this.WinGame();
    }
  }

  algo() {
    console.log('me cago en tu abuela');
  }

  WinGame() {
    if (!this.win) {
      this.win = true;
      this.vic.Win();
      console.log('hey as wineado y esas cosas');
      this.zoom.visible = false;
      this.selText.visible = false;
      this.desAcc.visible = false;
      this.desTex.visible = false;
      this.startTime = Date.now();
      this.vic.updateZoom();
    }
  }
}