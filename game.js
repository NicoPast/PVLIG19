export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {
    this.load.image('victim', 'favicon.png');
    this.load.image('square', 'Button.png');
  }

  create() {
    this.sol1 = Math.floor(Math.random() * 5) + 1;
    this.vic = this.add.image(700, 400, 'victim');
    this.buts = [];
    for (let i = 0; i < 5; i++) {
      this.buts.push(this.add.sprite(200 + 250 * i, 100, 'square'));
      this.buts[i].scale = 0.5;

      let text = this.add.text(175 + 250 * i, 75, i + 1);
      text.setFontSize(70);

      this.buts[i].setInteractive();

      this.buts[i].on('pointerdown', pointer => {
        this.prueba = i + 1;
        if(this.sol1 != -1){
          if (this.prueba == this.sol1) {
            console.log("curado")
            this.sol1 = -1;
          }
          else console.log("defuncido");
        }
        switch (i) {
          case 0:
            console.log(this.prueba);
            break;
          case 1:
            console.log(i + 1);
            break;
          case 2:
            console.log(i + 1);
            break;
          case 3:
            console.log(i + 1);
            break;
          case 4:
            console.log(i + 1);
            break;

        }
        this.vic.angle += 90;
      });
    }
    this.vic.angle = 90;
    this.vic.scale = 10;
    console.log(this.sol1);
  }

  update(time, delta) {
    //scene.input.mouse.disableContextMenu();
    let pointer = this.input.activePointer;
  }
}

//https://codepen.io/rexrainbow/pen/GaxqLZ
//https://labs.phaser.io/edit.html?src=src/game%20objects/dom%20element/form%20input.js&v=3.20.1