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
        GameOverUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "Box", "props": { "y": 366, "x": 195, "width": 330, "height": 103 }, "child": [{ "type": "TextInput", "props": { "y": 59, "x": 165, "width": 330, "text": "鹊桥仙", "height": 109, "fontSize": 75, "font": "SimHei", "color": "#fff", "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }, { "type": "Box", "props": { "y": 1021, "x": 204, "width": 312, "var": "box_restart", "height": 112 }, "child": [{ "type": "Button", "props": { "y": 58, "x": 156, "width": 311, "var": "restartBtn", "labelSize": 60, "labelFont": "SimHei", "labelColors": "#fff", "labelBold": true, "labelAlign": "center", "label": "  重新开始", "height": 112, "anchorY": 0.5, "anchorX": 0.5, "alpha": 1 }, "compId": 4 }] }], "animations": [{ "nodes": [{ "target": 4, "keyframes": { "y": [{ "value": 58, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 0 }, { "value": 48, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 8 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 0 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleY", "index": 8 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 0 }, { "value": 1.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 4 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "scaleX", "index": 8 }] } }], "name": "ani_restart", "id": 1, "frameRate": 24, "action": 0 }] };
        return GameOverUI;
    }(Dialog));
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
        GameStartUI.uiView = { "type": "Dialog", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "TextInput", "props": { "y": 640, "x": 360, "width": 312, "var": "txt_load", "type": "text", "text": "loading...", "height": 106, "fontSize": 40, "font": "SimHei", "color": "#fff", "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Box", "props": { "y": 1093, "x": 360, "width": 200, "var": "box_start", "height": 100, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 50, "x": 100, "width": 200, "var": "startBtn", "labelSize": 60, "labelFont": "SimHei", "labelColors": "#fff", "labelBold": true, "labelAlign": "center", "label": "  Start", "height": 100, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 308, "x": 360, "width": 500, "var": "box_title", "height": 200, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "TextInput", "props": { "y": 97, "x": 253, "width": 330, "var": "txt_title", "text": "鹊桥仙", "height": 109, "fontSize": 75, "font": "SimHei", "color": "#fff", "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }] };
        return GameStartUI;
    }(Dialog));
    ui.GameStartUI = GameStartUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map