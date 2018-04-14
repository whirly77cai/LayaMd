module game {
    import EventCont = Laya.Event;
    import Handler = Laya.Handler;
    import Tween = Laya.Tween;
    import Ease = Laya.Ease;

    export class GameStart extends ui.GameStartUI {
        private assetsArr: Array<object> = [
            {
                url: "res/atlas/images/Tanabata.atlas"
            }
        ];

        constructor() {
            super();
            this.GameStart();
        }

        private GameStart() {
            this.startBtn.visible = false;
            this.once(EventCont.CLOSE, this, this.onClose);

            Laya.loader.load(this.assetsArr, Handler.create(this, this.onComplete), Handler.create(this, this.onProgress));
        }

        private onComplete() {
            this.txt_load.text = "let's go...";
            this.startBtn.visible = true;
            Tween.from(this.startBtn,{y:this.startBtn.y+20},1000,Ease.elasticOut);
        }
        private onProgress(loadNum: number) {
            this.txt_load.text = "loading... " + parseInt(loadNum * 100 + "") + "%"
        }
        private onClose() {
            this.removeSelf();
            this.destroy();
        }
    }
}