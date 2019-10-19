export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {
    this.load.image('victim', 'favicon.png');
    this.load.image('square', 'Button.png');
    this.load.image('red' , 'red.png');
    this.load.image('green' ,'green.png');
  }

  create() {
    this.sol1 = Math.floor(Math.random() * 5) + 1;
    this.vic = this.physics.add.image(700, 400, 'victim');
    this.vic.setCollideWorldBounds(true);
    this.vic.body.setAllowGravity(false)
    this.buts = [];
    for (let i = 0; i < 5; i++) {
      this.buts.push(this.add.sprite(200 + 250 * i, 100, 'square'));
      this.buts[i].scale = 0.5;
      let text = this.add.text(175 + 250 * i, 75, i + 1);
      text.setFontSize(70);

      this.buts[i].setInteractive();

      this.buts[i].on('pointerdown', pointer => {
        this.prueba = i + 1;
        this.comprobar_curacion();
        console.log(this.cuerpo.vidas);
        switch (i) {
          case 0:
            console.log(this.prueba);
            break;
          case 1:
            console.log(this.prueba);
            break;
          case 2:
            console.log(this.prueba);
            break;
          case 3:
            console.log(this.prueba);
            break;
          case 4:
            console.log(this.prueba);
            break;

        }
        
      });
    }
    
    
    this.cuerpo = { 
      curado : false ,
      vidas : 5 ,

    };
    this.vic.angle = 90;
    this.vic.scale = 10;
    this.cuerpo.vidas = 5;
    this.marcador = this.add.text( 50 , 700, 'INTENTOS: ' + this.cuerpo.vidas);
    this.marcador.setFontSize(40);
    console.log(this.sol1);
    
  }

  update(time, delta) {
    
    let pointer = this.input.activePointer;
    
  }


  cambiar_vidas(){
    this.cuerpo.vidas--;
    this.marcador.setText('INTENTOS: ' + this.cuerpo.vidas);

  }

  comprobar_curacion(){
    if(this.cuerpo.curado != true && this.cuerpo.vidas > 0){
      if (this.prueba == this.sol1) {
        console.log('curado');
        window.alert('LO HAS CURADO');
        this.vic.body.setAllowGravity(true);
        this.vic.y = 400;
        this.vic.setBounce(1);
        this.vic.body.setVelocity(300,0);
        this.cuerpo.curado = true;
        this.vic.angle = 0;
      }
      else{ 
        console.log('error');
        this.cambiar_vidas();
        if(this.cuerpo.vidas == 0){
        this.vic.body.setAllowGravity(true);
        window.alert('TE LO HAS CARGADO , FELICIDADES'); 
        this.vic.angle = 180;this.vic.setBounce(0);
        this.vic.y = 400;
        }
      } 
    }

  }
}
//https://codepen.io/rexrainbow/pen/GaxqLZ
//https://labs.phaser.io/edit.html?src=src/game%20objects/dom%20element/form%20input.js&v=3.20.1