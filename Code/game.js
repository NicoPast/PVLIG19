import Victim from "./Victim.js";
import Inventory from "./Inventory.js";
import Writter from "./Writter.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  create() {
    this.fireAnim = this.anims.create({
      key: 'fireKey',
      frames: this.anims.generateFrameNumbers('fire'),
      frameRate: 8,
      yoyo: false,
      repeat: -1
    });

    this.gooAnim = this.anims.create({
      key: 'gooKey',
      frames: this.anims.generateFrameNumbers('goo'),
      frameRate: 5,
      yoyo: false,
      repeat: -1
    });

    this.cthulhu = this.anims.create({
      key: 'cthulhuKey',
      frames: [
       { key: 'tentacle0'}, 
       { key: 'tentacle1'},
       { key: 'tentacle2'}
      ],
      frameRate: 5,
      repeat: -1
    });

    this.posRateIni = 0.5;
    this.posRateAttacked = 1;

    this.add.image(700, 375, 'room');
    this.zoomBack = this.add.image(220, 400, 'black');
    this.zoomBack.scaleY = 1.2;
    this.zoomBack.scaleX = 1;
    this.posText = this.add.text(20, 20, 'Possesion Progress: 0%', { fontSize: '32px' })
    this.selText;
    this.vic = new Victim(this, 850, 400, { x: 220, y: 400 });
    this.zoom = this.add.image(220, 400, 'polaroid');
    this.selText =  this.add.text(40, 600, 'Selected: none', { fontSize: '32px', color: '#000' });
    this.zoom.scaleY = 1.7;
    this.zoom.scaleX = 1.4;

    this.attackname = 'square';
    this.attack;

    this.desTex = new Writter(this, 700, 950, 'scroll');
    this.desAcc = new Inventory(this, 1500, 400, 'bag');
    this.soul = 100;
    this.startTime = Date.now();
    this.posRate = this.posRateIni;
    this.desPos = 1;

    // como hacer una animacion 101
    /*
    let sprite = this.add.sprite(400, 300, 'cthulhuAnim').setScale(0.2);

    sprite.scaleY = 0.12;

    sprite.play('cthulhuKey');
    */

    this.keycheat = this.input.keyboard.addKey('F1');
    this.win = false;

    socket.on('relic', name => {
      this.desAcc.addItem(name);
    });
    socket.on('holyWater', HolyWater => {
      this.desAcc.addHolyWater(HolyWater);
    });
    socket.on('service', name =>{
      if(this.posRate == this.posRateAttacked){
        switch(name){
          case "electrician":
            if(this.attackname == 'arcano'){
              this.attackname = 'square';
              this.attack.setTexture(this.attackname);
              this.attack.visible = false;
              this.posRate = this.posRateIni;
            }
            break;
            case "firefighters":
            if(this.attackname == 'fire'){
              this.attackname = 'square';
              this.attack.setTexture(this.attackname);
              this.attack.visible = false;
              this.posRate = this.posRateIni;
            }
            break;
            case "plumber":
            if(this.attackname == 'cthulhu'){
              this.attackname = 'square';
              this.attack.setTexture(this.attackname);
              this.attack.visible = false;
              this.posRate = this.posRateIni;
            }
            break;
            case "pest_control":
            if(this.attackname == 'insectos'){
              this.attackname = 'square';
              this.attack.setTexture(this.attackname);
              this.attack.visible = false;
              this.posRate = this.posRateIni;
            }
            break;
            case "cleaning_service":
                if(this.attackname == 'goo'){
                  this.attackname = 'square';
                  this.attack.setTexture(this.attackname);
                  this.attack.visible = false;
                  this.posRate = this.posRateIni;
                }
                break;
          }

        /*
        electrician
        firefighters
        plumber
        pest_control
        */
      }
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
        this.zoomBack.visible = false;
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
      this.attack.visible = false;
      this.zoomBack.visible = false;
      this.startTime = Date.now();
      this.vic.updateZoom();
    }
  }

  changeSelText(s) {
    this.selText.setText(s);
  }

  attackPlayer(sick){
    this.attackname = sick;
    if(sick == 'fire' || sick == 'cthulhu' || sick == 'goo'){
      this.attack = this.add.sprite(700, 400, this.attackname + 'Anim');
      this.attack.play(sick + 'Key');
      this.attack.scaleX = 2;
    }
    if(sick == 'goo')
      this.attack.alpha = 0.9;
    this.posRate = this.posRateAttacked;
  }
}