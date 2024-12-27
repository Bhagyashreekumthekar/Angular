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
console.log("Object 1 Outputs ");
var objCircle1 = new Circle(20);
console.log("Area of Circle is : " + objCircle1.Area());
console.log("Object 2 Outputs ");
var objCircle2 = new Circle(5);
console.log("Area of Circle is : " + objCircle2.Area());
