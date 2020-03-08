module scenes{
    export class Start extends objects.Scene{
        // private instance variables
        
        private _background:objects.Background;
        private _welcomeLabel:objects.Label;
        private _startButton:objects.Button;
        private _instructionsButton:objects.Button;

        private _panel:objects.Board;
        // public properties

        // constructors

        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods

        public Main(): void {
            
            // adds ocean to the stage
            this.addChild(this._background);
        
            this.addChild(this._panel);

            // adds ocean to the stage
            this.addChild(this._startButton);
            
            this.addChild(this._instructionsButton);

            // adds player to the stage
            this.addChild(this._welcomeLabel);
            
            // event listeners

            // starts the play scene
            this._startButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.LEVEL1;
            })
            
            this._instructionsButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.INSTRUCTIONS;
            })
        }        
        public Start(): void {
            // Instantiates objects
            this._instructionsButton = new objects.Button("instructionsButton", 780, 235, true);
            this._startButton = new objects.Button("startButton", 780, 385, true);
            this._background = new objects.Background("startBackground");
            this._welcomeLabel = new objects.Label("Galaxy Guardian", "37px", "fantasy", "#FFFF00", 775, 70, true);
            this._panel = new objects.Board("panel", config.Constants.verticalPlaySpeed);

            this.SetupInput();

            this.Main();
        }

        public SetupInput(): void {
            document.addEventListener("keydown", managers.Input.EnterPress);
        }
        public Update(): void {

        }
        public Reset(): void {
            
        }
        public Destroy(): void {
            this.removeAllChildren();
            document.removeEventListener("keydown", managers.Input.EnterPress);
        }


    }
}