module game {
    import Animation = Laya.Animation;
    import Sprite = Laya.Sprite;
    import EventCont = Laya.Event;
    import Rectangle = Laya.Rectangle;

    export class Role extends Sprite {
        // cloud: 云彩；boy: 牛郎；
        private type: string;
        private speed: number;

        private aniRole: Animation;
        private action: string;

        constructor() {
            super();
            this.Role();
        }

        public Role() {
            this.aniRole = new Animation();
            this.aniRole.loadAnimation("GameRole.ani");
        }

        public init(type: string, speed?: number, loop: boolean = true) {
            this.type = type;
            this.speed = speed || -1;
            this.addChild(this.aniRole);

            this.aniRole.on(EventCont.COMPLETE, this, this.onComplete);
            // this.playAction("jump", loop);
        }

        private onComplete() {
            if (this.aniRole.width === 0) {
                const bounds: Rectangle = this.aniRole.getBounds();
                this.aniRole.size(bounds.width, bounds.height);
            }
        }

        public playAction(action: string, loop: boolean = true) {
            this.action = action;
            this.aniRole.play(0, loop, this.type + "_" + this.action);
        }

        public update() {
            if (this.type === 'boy') {
                if (this.x < this.aniRole.width / 2) {
                    this.x = this.aniRole.width / 2;
                } else if (this.x > 720 - this.aniRole.width / 2) {
                    this.x = 720 - this.aniRole.width / 2;
                }

                if (this.y < this.aniRole.height / 2) {
                    this.y = this.aniRole.height / 2;
                } else if (this.y > 1280 - this.aniRole.height / 2) {
                    this.y = 1280 - this.aniRole.height / 2;
                }
            }

            if (this.type === 'cloud') {
                this.y += 320;
            }
        }
    }
}