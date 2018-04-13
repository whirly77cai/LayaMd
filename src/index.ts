import Tanabata = game.Tanabata;
import Browser = Laya.Browser;
import Handler = Laya.Handler;
import WebGl = Laya.WebGL;

Laya.init(720, 1280, WebGl);

Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

function beginLoad(){
    Laya.loader.load("res/atlas/images/Tanabata.atlas", Handler.create(null, onLoaded));
}

function onLoaded(): void {
    //实例UI界面
    var gamePlay: Tanabata = new Tanabata('Tanabata');
    Laya.stage.addChild(gamePlay);
}
