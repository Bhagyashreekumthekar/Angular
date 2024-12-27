var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(Rad) {
        this.Radius = Rad;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.PI * this.Radius * this.Radius;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(radius) {
        var _this = _super.call(this, radius) || this;
        _this.PI = 3.14;
        return _this;
    }
    CircleX.prototype.Circumference = function () {
        return 2 * this.PI * this.Radius;
    };
    return CircleX;
}(Circle));
console.log("Object 1 Outputs ");
var objCircleX1 = new CircleX(20);
console.log("Circumference of Circle is : " + objCircleX1.Circumference());
console.log("Object 2 Outputs ");
var objCircleX2 = new CircleX(5);
console.log("Circumference of Circle is : " + objCircleX2.Circumference());
