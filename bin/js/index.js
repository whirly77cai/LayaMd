// import Tanabata = game.Tanabata;
var GameStart = game.GameStart;
var GameOver = game.GameOver;
var GamePlay = game.GamePlay;
var Browser = Laya.Browser;
var Handler = Laya.Handler;
var WebGl = Laya.WebGL;
var Stage = Laya.Stage;
var EventCont = Laya.Event;
var GameEntry = /** @class */ (function () {
    function GameEntry() {
        Laya.init(720, 1280, WebGl);
        Laya.stage.scaleMode = Stage.SCALE_EXACTFIT; // Stage.SCALE_SHOWALL;
        Laya.loader.load('res/atlas/images/Tanabata.atlas', Handler.create(this, this.GameStart));
    }
    GameEntry.prototype.GameStart = function () {
        this.start = new GameStart();
        this.start.popup();
        this.start.startBtn.on(EventCont.MOUSE_UP, this, this.GameInit);
        // Laya.stage.addChild(this.start);
    };
    GameEntry.prototype.GameInit = function () {
        this.start.close();
        this.play = this.play || new GamePlay();
        Laya.stage.addChild(this.play);
        Laya.timer.once(5000, this, this.GameOver);
    };
    GameEntry.prototype.GameOver = function () {
        this.start.removeSelf();
        this.play.removeSelf();
        this.over = this.over || new GameOver();
        this.over.popup();
        this.over.on("restart", this, this.GameInit);
    };
    return GameEntry;
}());
new GameEntry();
//# sourceMappingURL=index.js.map