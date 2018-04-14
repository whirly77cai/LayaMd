module game {
    import EventCont = Laya.Event;
    import Handler = Laya.Handler;
    import Tween = Laya.Tween;
    import Ease = Laya.Ease;

    export class GameOver extends ui.GameOverUI {
        constructor() {
            super();
            this.GameOver();
        }

        private GameOver () {
            this.restartBtn.on(EventCont.MOUSE_UP, this, this.onRestart);
        }

        private onRestart () {
            this.ani_restart.play(0, false);
            this.ani_restart.once(EventCont.COMPLETE, this, this.onComplete);
        }

        private onComplete () {
            this.event("restart");
            this.close();
        }
    }
}