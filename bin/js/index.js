var Tanabata = game.Tanabata;
var Browser = Laya.Browser;
var Handler = Laya.Handler;
var WebGl = Laya.WebGL;
Laya.init(720, 1280, WebGl);
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
function beginLoad() {
    Laya.loader.load("res/atlas/images/Tanabata.atlas", Handler.create(null, onLoaded));
}
function onLoaded() {
    //实例UI界面
    var gamePlay = new Tanabata('Tanabata');
    Laya.stage.addChild(gamePlay);
}
//# sourceMappingURL=index.js.map