import {Control} from "../Control"
export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key : Control.Scene.Menu
        })
    }
    init(){


    }
    create(){
        this.add.image(420,200,"logo");
        let playbutton = this.add.text(360,300,"<Play>",{font:"40px Impact"});
        let levelbutton = this.add.text(360,350,"<Levels>",{font:"40px Impact"});
        let controlbutton = this.add.text(360,400,"<Control>",{font:"40px Impact"});
        let helpbutton = this.add.text(360,450,"<Help>",{font:"40px Impact"});
        let hoversprite = this.add.sprite(100,100,"pointer");
        hoversprite.setScale(2);
        hoversprite.setVisible(false);



        playbutton.setInteractive();

        playbutton.on("pointerover",()=>{
            hoversprite.setVisible(true),
            hoversprite.x = playbutton.x-50,
            hoversprite.y = playbutton.y+23
        })

        playbutton.on("pointerout",()=>{
            hoversprite.setVisible(false);
        })


        levelbutton.setInteractive();

        levelbutton.on("pointerover",()=>{
            hoversprite.setVisible(true),
            hoversprite.x = levelbutton.x-50,
            hoversprite.y = levelbutton.y+23
        })

        levelbutton.on("pointerout",()=>{
            hoversprite.setVisible(false);
        })
        levelbutton.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Level);
        })



        controlbutton.setInteractive();

        controlbutton.on("pointerover",()=>{
            hoversprite.setVisible(true),
            hoversprite.x = controlbutton.x-50,
            hoversprite.y = controlbutton.y+23
        })

        controlbutton.on("pointerout",()=>{
            hoversprite.setVisible(false);
        })
        controlbutton.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Control)
        })

        helpbutton.setInteractive();

        helpbutton.on("pointerover",()=>{
            hoversprite.setVisible(true),
            hoversprite.x = helpbutton.x-50,
            hoversprite.y = helpbutton.y+23
        })

        helpbutton.on("pointerout",()=>{
            hoversprite.setVisible(false);
        })
        helpbutton.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Help)
        })
    }

}