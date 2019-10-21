export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  preload() {
    this.load.image('victim', 'favicon.png');
    this.load.image('square', 'Button.png');
    this.load.image('red', 'red.png');
    this.load.image('white', 'white.png');
    this.load.image('green', 'green.png');
    this.load.image('pink', 'pink.png');
    this.load.image('yellow', 'yellow.png');
    this.load.image('blue', 'blue.png');
    
  }

  create() {
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
        if(this.empezado){
        this.prueba = i + 1;
        this.comprobar_curacion();
        }
        else{
          window.alert('COMIENZA PRIMERO LA PARTIDA');
        }
      });
    }


    this.cuerpo = {
      curado: false,
      vidas: 5,
      partes: []
    };
    this.vic.angle = 90;
    this.vic.scale = 10;

    let arriba = {
      imagen: this.add.sprite(750, 400, 'white').setScale(0.4).setAlpha(0.1),
      curado: false ,
      generado : false ,
      curacion : -1
    }
    let abajo = {
      imagen: this.add.sprite(575, 400, 'white').setScale(0.3).setAlpha(0.1),
      curado: false ,
      generado : false,
      curacion : -1
    }
    this.cuerpo.partes.push(arriba);
    this.cuerpo.partes.push(abajo);
    this.cuerpo.partes[0].imagen.setInteractive();
    this.cuerpo.partes[1].imagen.setInteractive();
    this.cuerpo.vidas = 5;
    for (let i = 0; i < 2; i++) {
      this.cuerpo.partes[i].imagen.on('pointerdown', pointer => {
        if (this.empezado) {
          if (!this.cuerpo.curado) {
            switch (i) {
              case 0:
                if (this.parteactual != i && this.cuerpo.partes[i].curado == false) {
                  this.parteSel.setText('PARTE ACTUAL: CABEZA');
                  this.cuerpo.partes[i].generado = true;
                  this.parteactual = 0;
                }
                break;
              case 1:
                if (this.parteactual != i && this.cuerpo.partes[i].curado == false) {
                  this.parteSel.setText('PARTE ACTUAL: PECHO');
                  this.cuerpo.partes[i].generado = true;
                  this.parteactual = 1;
                }
                break;
            }

          }
        }
        else{
          window.alert('COMIENZA PRIMERO LA PARTIDA');
        }

      });
    }
    
    this.parteactual = -1;
    this.start = this.add.sprite(1200, 750, 'red');
    this.start.scaleY = 0.3;
    this.startText = this.add.text(1045 , 720 , 'COMENZAR');
    this.startText.setFontSize(70);
    
    this.start.setInteractive();
    this.start.on('pointerdown', pointer => {
      if(!this.empezado){
      this.empezado = true;
      this.generarenfermedad(0);
      this.generarenfermedad(1); 
      this.start.setTexture('green');
      this.startText.setText("RESET");
      this.startText.x = 1100;
      }
      else{
        this.scene.restart();
      }
    });
    this.empezado = false;
    this.marcador = this.add.text(50, 700, 'INTENTOS: ' + this.cuerpo.vidas);
    this.marcador.setFontSize(40);
    this.parteSel = this.add.text(50, 750, 'PARTE ACTUAL: NINGUNA');
    this.parteSel.setFontSize(40);
    
  }

  update(time, delta) {

    let pointer = this.input.activePointer;

  }


  cambiar_vidas() {
    this.cuerpo.vidas--;
    this.marcador.setText('INTENTOS: ' + this.cuerpo.vidas);

  }

  comprobar_curacion() {
    if (this.cuerpo.curado != true && this.cuerpo.vidas > 0) {

      if (this.parteactual == -1) {
        window.alert("ELIGE PRIMERO UNA PARTE");
        return;
      }
      else if (this.prueba ==  this.cuerpo.partes[this.parteactual].curacion) {
        console.log('curado');
        this.cuerpo.partes[this.parteactual].curado = true;
        this.cuerpo.partes[this.parteactual].imagen.setTexture('green');
        this.parteactual = -1;
        this.parteSel.setText('PARTE ACTUAL: NINGUNA');
      }
      else {
        console.log('error');
        this.cambiar_vidas();
      }
      this.comprobar_estado();
    }

  }
  
  comprobar_estado() {


    if (this.cuerpo.vidas == 0) {
      this.vic.body.setAllowGravity(true);
      window.alert('TE LO HAS CARGADO , FELICIDADES');
      this.cuerpo.partes[0].imagen.setAlpha(0);
      this.cuerpo.partes[1].imagen.setAlpha(0);
      this.vic.angle = 180; this.vic.setBounce(0);
      
    }
    else if(this.cuerpo.partes[0].curado && this.cuerpo.partes[1].curado){
      window.alert('LO HAS CURADO');
      this.vic.body.setAllowGravity(true);
      this.cuerpo.partes[0].imagen.setAlpha(0);
      this.cuerpo.partes[1].imagen.setAlpha(0);
      this.vic.setBounce(1);
      this.vic.angle = 0;
      this.vic.body.setVelocity(300,0);
      this.cuerpo.curado = true;
    }
  }

  generarenfermedad(i) {
    if (!this.cuerpo.partes[i].generado) {
      this.cuerpo.partes[i].curacion = Math.floor(Math.random() * 5) + 1;
      switch(i){
        case 0:
            console.log('Cabeza = ' +  this.cuerpo.partes[i].curacion);
          break;
        case 1:
            console.log('Pecho = ' +  this.cuerpo.partes[i].curacion);
          break;
      }
      switch (this.cuerpo.partes[i].curacion) {
        case 1:
            this.cuerpo.partes[i].imagen.setTexture('yellow');
            this.cuerpo.partes[i].imagen.setAlpha(0.5);
          break;
        case 2:
            this.cuerpo.partes[i].imagen.setTexture('red');
            this.cuerpo.partes[i].imagen.setAlpha(0.5);
          break;
        case 3:
            this.cuerpo.partes[i].imagen.setTexture('pink');
            this.cuerpo.partes[i].imagen.setAlpha(0.5);
          break;
        case 4:
            this.cuerpo.partes[i].imagen.setTexture('blue');
            this.cuerpo.partes[i].imagen.setAlpha(0.5);
          break;
        case 5:
            this.cuerpo.partes[i].imagen.setTexture('white');
            this.cuerpo.partes[i].imagen.setAlpha(0.5);
          break;

      }
    }
  }
}


//https://codepen.io/rexrainbow/pen/GaxqLZ
//https://labs.phaser.io/edit.html?src=src/game%20objects/dom%20element/form%20input.js&v=3.20.1