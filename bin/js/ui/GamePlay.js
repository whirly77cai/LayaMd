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
var ui;
(function (ui) {
    var Tanabata;
    (function (Tanabata) {
        var GamePlay = /** @class */ (function (_super) {
            __extends(GamePlay, _super);
            function GamePlay() {
                return _super.call(this) || this;
            }
            GamePlay.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.Tanabata.GamePlay.uiView);
            };
            GamePlay.uiView = {
                "type": "View",
                "child": [
                    {
                        "props": {
                            "x": 0, "y": 0, "skin": "images/Tanabata/bg.jpg", "width": 720, "height": 1280
                        },
                        "type": "Image"
                    },
                    {
                        "props": {
                            "x": 122, "y": 960, "skin": "images/Tanabata/cloud.png"
                        },
                        "type": "Image"
                    },
                    {
                        "props": {
                            "x": 160, "y": 720, "skin": "images/Tanabata/cowboy1.png"
                        },
                        "type": "Image"
                    }
                ]
            };
            return GamePlay;
        }(View));
        Tanabata.GamePlay = GamePlay;
    })(Tanabata = ui.Tanabata || (ui.Tanabata = {}));
})(ui || (ui = {}));
//# sourceMappingURL=GamePlay.js.map