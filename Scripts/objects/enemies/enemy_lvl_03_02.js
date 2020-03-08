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
var objects;
(function (objects) {
    var EnemyLvl03_02 = /** @class */ (function (_super) {
        __extends(EnemyLvl03_02, _super);
        // constructors
        function EnemyLvl03_02() {
            return _super.call(this, "enemyLvl03_02") || this;
        }
        // private methods
        EnemyLvl03_02.prototype._move = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
        };
        EnemyLvl03_02.prototype._checkBounds = function () {
            if (this.y > config.Constants.canvasHeight + this.Height) {
                this.Reset();
            }
            if (this.x > config.Constants.canvasWidth - this.HalfWidth) {
                this.x = config.Constants.canvasWidth - this.HalfWidth;
                this.Reset();
            }
            //checks for left boundary
            if (this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
                this.Reset();
            }
            if (managers.Game.scoreBoard.Level == 3 || managers.Game.scoreBoard.Level == 1) {
                if ((createjs.Ticker.getTicks() % 90 == 0) && (this.y > 0)) {
                    // if((Math.random() < 0.17) && (this.y > 0)) {
                    managers.Game.bulletManager.FireBullet(util.Vector2.Add(this.Position, this._bulletSpawn), util.Vector2.down());
                }
            }
        };
        // public methods
        EnemyLvl03_02.prototype.Start = function () {
            this.regX = this.HalfHeight;
            this.regY = this.HalfWidth;
            _super.prototype.Start.call(this);
            this._bulletSpawn = new util.Vector2(0, 2 + this.HalfHeight);
            this.Reset();
        };
        EnemyLvl03_02.prototype.Update = function () {
            this._move();
            _super.prototype.Update.call(this);
            this._checkBounds();
        };
        EnemyLvl03_02.prototype.Reset = function () {
            _super.prototype.Reset.call(this);
            this._verticalSpeed = Math.floor((Math.random() * 3) + 3); // speed from 1 to 5
            this._horizontalSpeed = Math.floor((Math.random() * 4) - 2); // speed from -2 to 2
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (config.Constants.canvasWidth - this.Width) + this.HalfWidth);
            this.IsColliding = false;
        };
        EnemyLvl03_02.prototype.Destroy = function () {
        };
        return EnemyLvl03_02;
    }(objects.Enemy));
    objects.EnemyLvl03_02 = EnemyLvl03_02;
})(objects || (objects = {}));
//# sourceMappingURL=enemy_lvl_03_02.js.map