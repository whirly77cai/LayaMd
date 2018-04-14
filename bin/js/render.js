var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var game;
(function (game) {
    var Stage = Laya.Stage;
    var Tanabata = /** @class */ (function (_super) {
        __extends(Tanabata, _super);
        function Tanabata(res) {
            var _this = _super.call(this) || this;
            _this.res = '';
            // 设置主题资源
            _this.res = '../images/' + res;
            //创建舞台，默认背景色是黑色的
            // Laya.init(1500, 2668); 
            // Laya.init(Browser.clientWidth, Browser.clientHeight, WebGl); 
            Laya.stage.scaleMode = Stage.SCALE_EXACTFIT; // Stage.SCALE_SHOWALL;
            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;
            Laya.stage.bgColor = '#000';
            // Laya.DebugTool.init();
            // 添加调试面板
            // Laya.DebugPanel.init();
            _this.renderBg();
            return _this;
        }
        Tanabata.prototype.renderBg = function () {
            // Laya.loader.load(this.res + '/bg.jpg', Handler.create(this, function (): void {
            // 	let t: Texture = Laya.loader.getRes(this.res + '/bg.jpg');
            // 	let ape: Sprite = new Sprite();
            // 	ape.graphics.drawTexture(t, 0, 0);
            // 	Laya.stage.addChild(ape);
            // 	ape.pos(0, 0);
            // }))
        };
        Tanabata.prototype.jump = function () { };
        Tanabata.prototype.hitTest = function () { };
        Tanabata.prototype.setTheme = function (res) {
            this.res = res;
        };
        return Tanabata;
    }(ui.GamePlayUI));
    game.Tanabata = Tanabata;
})(game || (game = {}));
//# sourceMappingURL=render.js.map