// import Tanabata = game.Tanabata;
import GameStart = game.GameStart;
import GameOver = game.GameOver;
import GamePlay = game.GamePlay;
import Browser = Laya.Browser;
import Handler = Laya.Handler;
import WebGl = Laya.WebGL;
import Stage = Laya.Stage;
import EventCont = Laya.Event;

class GameEntry {
    private start: GameStart;
    private play: GamePlay;
    private over: GameOver;
    constructor() {
        Laya.init(720, 1280, WebGl);
        Laya.stage.scaleMode = Stage.SCALE_EXACTFIT; // Stage.SCALE_SHOWALL;
        Laya.loader.load('res/atlas/images/Tanabata.atlas', Handler.create(this, this.GameStart));

        
    }

    private GameStart() {
        this.start = new GameStart();
        this.start.popup();
        this.start.startBtn.on(EventCont.MOUSE_UP, this, this.GameInit);
        // Laya.stage.addChild(this.start);
    }
    private GameInit() {
        this.start.close();
        this.play = this.play || new GamePlay();
        Laya.stage.addChild(this.play);

        Laya.timer.once(5000, this, this.GameOver);
    }

    private GameOver() {
        this.start.removeSelf();
        this.play.removeSelf();
        this.over = this.over || new GameOver();

        this.over.popup();
        this.over.on("restart", this, this.GameInit);      
    }

}
new GameEntry();