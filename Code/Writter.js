export default class Writter extends Phaser.GameObjects.Sprite{
    constructor(scene ,x , y, texture){
        super(scene, x, y, texture);

        this.scene.add.existing(this);        
        this.scaleX = 2.7;
        this.setInteractive();
        this.on('pointerdown', pointer => {
            this.updateTween();
            this.scene.updateUI('t');
        });

        this.deactivator = this.scene.add.image(650, 400, 'square').setAlpha(0.3);
        this.deactivator.scaleY = 2;
        this.deactivator.scaleX = 3.25;
        this.deactivator.visible = false;
        this.deactivator.setInteractive();

        this.deactivator.on('pointerdown', pointer => {
            this.updateTween();
        });

        /*
        let input;
        let element = this.add.dom(400, 0).createFromCache('nameform');
        
        element.addListener('click');
        element.on('click', function(event){

            if (event.target.name === 'playButton')
            {
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
                this.deactivator.visible = false;
            }
            else {
                activated = true;
                this.deactivator.visible = true;
            }
        }
    }
}