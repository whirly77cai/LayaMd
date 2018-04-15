// import Tanabata = game.Tanabata;
import GameStart = game.GameStart;
import GameOver = game.GameOver;
import GamePlay = game.GamePlay;
import Role = game.Role;
import Sprite = Laya.Sprite;
import Browser = Laya.Browser;
import Handler = Laya.Handler;
import WebGl = Laya.WebGL;
import Stage = Laya.Stage;
import EventCont = Laya.Event;
import Pool = Laya.Pool;

class GameEntry {
    private start: GameStart;
    private play: GamePlay;
    private over: GameOver;
    private boy: Role;
    private roleLayer: Sprite;

    constructor() {
        Laya.init(720, 1280, WebGl);
        Laya.stage.scaleMode = Stage.SCALE_EXACTFIT; // Stage.SCALE_SHOWALL;
        Laya.loader.load('res/atlas/images/Tanabata.atlas', Handler.create(this, this.GameStart));
        Laya.DebugPanel.init();
        
    }

    private GameStart() {
        this.start = new GameStart();
        this.start.popup();
        this.start.startBtn.on(EventCont.MOUSE_UP, this, this.GameInit);
        // Laya.stage.addChild(this.start);
    }
    private GameInit() {
        this.start.close();
        this.roleLayer = this.roleLayer || new Sprite();
        this.roleLayer.zOrder = 10;
        Laya.stage.addChild(this.roleLayer);

        this.play = this.play || new GamePlay();
        this.play.zOrder = 0;
        Laya.stage.addChild(this.play);

        this.boy = this.boy || new Role();
        this.boy.init("boy");
        this.boy.playAction("jump");
        this.boy.pos(360, 1177);
        this.roleLayer.addChild(this.boy);

        this.createCloud(0, 1, 3);
        
        
        Laya.timer.once(3000, this, this.cloudFall);
    }
    private GameOver() {
        this.start.removeSelf();
        this.play.removeSelf();
        this.roleLayer.removeChildren(0, this.roleLayer.numChildren - 1);
        this.roleLayer.removeSelf();
        this.over = this.over || new GameOver();

        this.over.popup();
        this.over.on("restart", this, this.GameInit);      
    }
    private createCloud(index: number, speed: number, amount: number) {
        // let temp = [];
        for (let i = 0; i < amount; i++) {
            var cloud: Role = Pool.getItemByClass("role", Role);
            cloud.init("cloud", speed, false);
            cloud.visible = true;
            cloud.pos(Math.random() * (720 - 260) , (i + 1) * 320);
            cloud.playAction("jump", false);
            // temp.push(cloud);
            this.roleLayer.addChild(cloud);
        }
        // return temp;
    }
    private cloudFall() {
        for (let i = this.roleLayer.numChildren - 1; i > -1; i--) {
            var role = this.roleLayer.getChildAt(i) as Role;
            role.update();
        }
    }
    private loop () {
        // update score

        // create cloud

    }

}
new GameEntry();