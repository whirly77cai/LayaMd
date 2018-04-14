module game {
	import Stage = Laya.Stage;
	import Browser = Laya.Browser;
	import WebGl = Laya.WebGL;
	import Sprite = Laya.Sprite;
	import Handler = Laya.Handler;
	import Texture = Laya.Texture;

	export class Tanabata extends ui.GamePlayUI {
		private res: string = '';

		constructor(res: string) {
			super()

			// 设置主题资源
			this.res = '../images/' + res;

			//创建舞台，默认背景色是黑色的
			// Laya.init(1500, 2668); 
			// Laya.init(Browser.clientWidth, Browser.clientHeight, WebGl); 

			Laya.stage.scaleMode = Stage.SCALE_EXACTFIT; // Stage.SCALE_SHOWALL;
			Laya.stage.alignV = Stage.ALIGN_MIDDLE;
			Laya.stage.alignH = Stage.ALIGN_CENTER;

			 
			Laya.stage.bgColor  = '#000';			

			// Laya.DebugTool.init();
			// 添加调试面板
			// Laya.DebugPanel.init();

			this.renderBg();
		}

		private renderBg() {
			// Laya.loader.load(this.res + '/bg.jpg', Handler.create(this, function (): void {
			// 	let t: Texture = Laya.loader.getRes(this.res + '/bg.jpg');
			// 	let ape: Sprite = new Sprite();
			// 	ape.graphics.drawTexture(t, 0, 0);
			// 	Laya.stage.addChild(ape);
			// 	ape.pos(0, 0);
			// }))
		}
		private jump() {}
		private hitTest() {}
		public setTheme(res: string) {
			this.res = res;
		}
	}

}