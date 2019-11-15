export default class Writter extends Phaser.GameObjects.Sprite{
    constructor(scene ,x , y, texture){
        super(scene, x, y, texture);

        scene.add.existing(this);        
        this.scaleX = 2.7;
        this.setInteractive();
        this.on('pointerdown', pointer => {
            this.updateTween();
            this.scene.updateUI('t');
        });

        let deactivator = this.scene.add.image(650, 400, 'square').setAlpha(0.3);
        deactivator.scaleY = 2;
        deactivator.scaleX = 3.25;
        deactivator.visible = false;
        deactivator.setInteractive();

        this.deactivator.on('pointerdown', pointer => {
            this.updateTween();
        });

        let input;
        let element = scene.add.dom(300, 1000, 'nameform', "background-color: lime; width: 220px; height: 10px; font: 48px Arial").createFromCache("nameField");

        let text = scene.add.text(300, 10, 'Please enter your name', { color: 'white', fontSize: '20px '});

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
        

        let activated = false;

        let tween = scene.tweens.add({
            targets: this,
            y: y - 100,
            duration: 100,
            yoyo: true,
            repeat: 0,
            paused: true,
            onYoyo: function() { tween.pause(); }
          })

        this.isActive = function(){
            return activated;
        }

        this.updateTween = function(){
            tween.resume();
            if(activated){
                activated = false
                deactivator.visible = false;
            }
            else {
                activated = true;
                deactivator.visible = true;
            }
        }
    }
}