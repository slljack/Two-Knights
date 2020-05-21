import {Control} from "../Control"
export class LevelScene extends Phaser.Scene{
    constructor(){
        super({
            key : Control.Scene.Level
        })
    }
    init(){

    }
    create(){
        let logo = this.add.image(0,0,"logo").setOrigin(0);
        this.add.text(logo.x+150,logo.y+50,"Levels",{font:"40px Impact"});
        let back = this.add.text(this.game.renderer.width-100,0,"Back",{font:"40px Impact"});

        let level1 = this.add.text(570,200,"[ Level 1 ]",{font:"40px Impact"});
        let level2 = this.add.text(570,250,"[ Level 2 ]",{font:"40px Impact"});
<<<<<<< HEAD
        let level4 = this.add.text(570,350,"[ Level 4 ]",{font:"40px Impact"});

=======
        let level3 = this.add.text(570,300,"[ Level 3 ]",{font:"40px Impact"});
>>>>>>> c400c90bab8c604d388739bb333f74ba83de6b24
        back.setInteractive();
        back.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Menu)
        })

        level1.setInteractive();
        level1.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Level1)
        })


        level2.setInteractive();
        level2.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Level2)
        })
<<<<<<< HEAD

        level4.setInteractive();
        level4.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Level4)
        })

        // Escape key 
=======
        level3.setInteractive();
        level3.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Level3)
        })

>>>>>>> c400c90bab8c604d388739bb333f74ba83de6b24
        this.input.keyboard.on("keyup",function(e: { key: string; }){
            if(e.key=="Escape"){
                this.scene.start(Control.Scene.Menu)
            }
        },this)


    }

}