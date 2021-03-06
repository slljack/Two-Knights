import {Control} from "../Control"
export class ControlScene extends Phaser.Scene{
    constructor(){
        super({
            key : Control.Scene.Control
        })
    }
    preload(){
        this.anims.create({
            key:"idle_red",
            frameRate:4,
            repeat:-1,
            frames:this.anims.generateFrameNumbers("redknight1",{
                frames:[0,1,2]
            })
        })

        this.anims.create({
            key:"idle_blue",
            frameRate:4,
            repeat:-1,
            frames:this.anims.generateFrameNumbers("blueknight",{
                frames:[0,1,2]
            })
        })

    }
    init(){

    }
    create(){
        let logo = this.add.image(0,0,"logo").setOrigin(0);
        this.add.text(logo.x+150,logo.y+50,"Control",{font:"40px Impact"});

        let back = this.add.text(this.game.renderer.width-100,0,"Back",{font:"40px Impact"});
        back.setInteractive();
        back.on("pointerdown",()=>{
            this.scene.start(Control.Scene.Menu)
        })
        this.input.keyboard.on("keyup",function(event: any){
            if(event.key=="Escape"){
                this.scene.start(Control.Scene.Menu)
            }
        },this)

        let red = this.add.sprite(400,200,"redknight1");
        let blue =this.add.sprite(800,200,"blueknight");
        red.setScale(2);
        blue.setScale(2);
        red.play("idle_red");
        blue.play("idle_blue");






        //controls



        let up = this.add.image(400,400,"up");
        up.setScale(4);

        let right = this.add.image(470,455,"right");
        right.setScale(4);


        let left = this.add.image(330,455,"left");
        left.setScale(4);


        let down = this.add.image(400,455,"down");
        down.setScale(4);



        let w = this.add.image(800,400,"w");
        w.setScale(4);


        let a = this.add.image(730,455,"a");
        a.setScale(4);


        let s = this.add.image(800,455,"s");
        s.setScale(4);


        let d = this.add.image(870,455,"d");
        d.setScale(4);

        this.add.text(270,500,"Press ESC to go back to the previous menu.",{font:"40px Impact"});
    }

}