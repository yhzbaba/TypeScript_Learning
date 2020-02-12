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
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    //默认参数
    Animal2.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance);
    };
    return Animal2;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal2));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(Animal2));
var sam = new Snake("Snake_1");
var tom = new Horse("Horse_1");
sam.move();
tom.move(34);
