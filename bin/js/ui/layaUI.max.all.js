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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var GameOverUI = /** @class */ (function (_super) {
        __extends(GameOverUI, _super);
        function GameOverUI() {
            return _super.call(this) || this;
        }
        GameOverUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameOverUI.uiView);
        };
        GameOverUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 } };
        return GameOverUI;
    }(View));
    ui.GameOverUI = GameOverUI;
})(ui || (ui = {}));
(function (ui) {
    var GamePlayUI = /** @class */ (function (_super) {
        __extends(GamePlayUI, _super);
        function GamePlayUI() {
            return _super.call(this) || this;
        }
        GamePlayUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GamePlayUI.uiView);
        };
        GamePlayUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 720, "var": "bgPlay", "skin": "images/Tanabata/bg.jpg", "height": 1280 } }, { "type": "Image", "props": { "y": 699, "x": 160, "var": "cowboy1", "skin": "images/Tanabata/cowboy1.png" } }, { "type": "Image", "props": { "y": 906, "x": 122, "var": "cloud", "skin": "images/Tanabata/cloud.png" } }] };
        return GamePlayUI;
    }(View));
    ui.GamePlayUI = GamePlayUI;
})(ui || (ui = {}));
(function (ui) {
    var GameStartUI = /** @class */ (function (_super) {
        __extends(GameStartUI, _super);
        function GameStartUI() {
            return _super.call(this) || this;
        }
        GameStartUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameStartUI.uiView);
        };
        GameStartUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 } };
        return GameStartUI;
    }(View));
    ui.GameStartUI = GameStartUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map