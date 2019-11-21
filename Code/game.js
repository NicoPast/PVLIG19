import Victim from "./Victim.js";
import Inventory from "./Inventory.js";
import Writter from "./Writter.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  create() {
    let background = this.add.image(650, 375, 'room');
    this.zoom = this.add.image(220, 400, 'square');
    this.zoom.scaleY = 1.2;
    this.posText = this.add.text(20, 20, 'Possesion Progress: 0%', { fontSize: '32px' })
    this.selText = this.add.text(40, 600, 'Selected: None', { fontSize: '32px' });
    this.vic = new Victim(this, 850, 400, { x: this.zoom.x, y: this.zoom.y, text: this.selText });
    this.desTex = new Writter(this, 700, 950, 'goo');
    this.desAcc = new Inventory(this, 1500, 400, 'square');
    this.posesion = 0;
    this.startTime = Date.now();
    this.posRate = 0.5;


    this.keycheat = this.input.keyboard.addKey('P');
    this.win = false;

    /*
    let input;
    let element = this.add.dom(300, 1000, 'nameform', "background-color: lime; width: 220px; height: 10px; font: 48px Arial").createFromCache("nameField");

    let text = this.add.text(300, 10, 'Please enter your name', { color: 'white', fontSize: '20px '});

    element.addListener('click');
    element.on('click', function(event){

        if (event.target.name === 'playButton')
        {
            console.log('punto 1');
            var inputText = this.getChildByName('nameField');

            //  Have they entered anything?
            if (inputText.value !== '')
            {
                //  Turn off the click events
                this.removeListener('click');

                //  Hide the login element
                this.setVisible(false);

                //  Populate the text with whatever they typed in
                input = 'Welcome ' + inputText.value;
            }
        }
    });
    */
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
    if (this.posesion < 100) {
      this.posesion = (Date.now() - this.startTime) * (0.001 * this.posRate);
      this.posText.setText('Possesion Progress: ' + parseFloat(Math.round(this.posesion * 100) / 100).toFixed(2) + ' %')
    }
    else {
      this.posText.setText('Possesion Progress: 100.00 %')
      this.zoom.visible = false;
      this.selText.visible = false;
      this.desAcc.visible = false;
      this.desTex.visible = false;
      this.vic.loose();
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
      console.log('hey as wineado y esas cosas');
      this.posRate = 0;
      this.posesion = 0;
      this.zoom.visible = false;
      this.selText.visible = false;
      this.desAcc.visible = false;
      this.desTex.visible = false;
    }
  }
}