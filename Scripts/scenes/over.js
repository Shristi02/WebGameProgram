var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Over = /** @class */ (function (_super) {
        __extends(Over, _super);
        // public properties
        // constructors
        function Over(won) {
            if (won === void 0) { won = false; }
            var _this = _super.call(this) || this;
            _this._won = won;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Over.prototype.Main = function () {
            // adds background to the stage
            this.addChild(this._background);
            this.addChild(this._panel);
            // adds restartButton to the stage
            this.addChild(this._restartButton);
            this.addChild(this._menuButton);
            // adds player to the stage
            this.addChild(this._gameOverLabel);
            // event listeners
            // starts the play scene
            this._restartButton.on("click", function () {
                managers.Game.currentState = config.Scene.LEVEL1;
            });
            // goes to menu
            this._menuButton.on("click", function () {
                managers.Game.currentState = config.Scene.START;
            });
            managers.Game.scoreBoard.AddHighScore(this);
        };
        Over.prototype.Start = function () {
            var msglbl = "Game Over";
            if (this._won) {
                msglbl = "Congratulations!";
            }
            // Instantiates objects
            managers.Game.scoreBoard.Reset();
            this._restartButton = new objects.Button("restartButton", 780, 235, true);
            this._menuButton = new objects.Button("menuButton", 780, 385, true);
            this._background = new objects.Background("spaceBackground", 0);
            this._gameOverLabel = new objects.Label(msglbl, "30px", "planet", "#FFFF00", 780, 100, true);
            this._panel = new objects.Board("panel", config.Constants.verticalPlaySpeed);
            this.SetupInput();
            this.Main();
        };
        Over.prototype.SetupInput = function () {
            document.addEventListener("keydown", managers.Input.EnterPress);
            document.addEventListener("keydown", managers.Input.GoBack);
        };
        Over.prototype.Update = function () {
            this._background.Update();
        };
        Over.prototype.Reset = function () {
            throw new Error("Method not implemented.");
        };
        Over.prototype.Destroy = function () {
            this.removeAllChildren();
            document.removeEventListener("keydown", managers.Input.EnterPress);
            document.removeEventListener("keydown", managers.Input.GoBack);
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map