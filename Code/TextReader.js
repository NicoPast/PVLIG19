export default class TextReader extends Phaser.GameObjects.DOMElement{
    constructor(scene, x, y, element){
        super(scene, x, y, element);

        scene.add.exisiting(this);

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
                    //input = 'Welcome ' + inputText.value;
                }
            }
        });
    }
}