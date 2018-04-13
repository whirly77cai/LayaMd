
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class GameOverUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameOverUI.uiView);

        }

    }
}

module ui {
    export class GamePlayUI extends View {
		public bgPlay:Laya.Image;
		public cowboy1:Laya.Image;
		public cloud:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"var":"bgPlay","skin":"images/Tanabata/bg.jpg","height":1280}},{"type":"Image","props":{"y":699,"x":160,"var":"cowboy1","skin":"images/Tanabata/cowboy1.png"}},{"type":"Image","props":{"y":906,"x":122,"var":"cloud","skin":"images/Tanabata/cloud.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GamePlayUI.uiView);

        }

    }
}

module ui {
    export class GameStartUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameStartUI.uiView);

        }

    }
}
