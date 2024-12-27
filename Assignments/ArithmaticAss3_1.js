var ArithmaticAss3_1 = /** @class */ (function () {
    function ArithmaticAss3_1(X, Y) {
        this.Result = 0;
        this.No1 = X;
        this.No2 = Y;
    }
    ArithmaticAss3_1.prototype.Addition = function () {
        this.Result = this.No1 + this.No2;
        return this.Result;
    };
    ArithmaticAss3_1.prototype.Substraction = function () {
        this.Result = this.No1 - this.No2;
        return this.Result;
    };
    ArithmaticAss3_1.prototype.Multiplication = function () {
        this.Result = this.No1 * this.No2;
        return this.Result;
    };
    ArithmaticAss3_1.prototype.Division = function () {
        this.Result = this.No1 / this.No2;
        return this.Result;
    };
    return ArithmaticAss3_1;
}());
console.log("Object 1 Outputs ");
var objA1 = new ArithmaticAss3_1(20, 5);
console.log("Addition is :" + objA1.Addition());
console.log("Substraction is :" + objA1.Substraction());
console.log("Multiplication is :" + objA1.Multiplication());
console.log("Division is :" + objA1.Division());
console.log("\nObject 2 Outputs ");
var objA2 = new ArithmaticAss3_1(5, 5);
console.log("Addition is :" + objA2.Addition());
console.log("Substraction is :" + objA2.Substraction());
console.log("Multiplication is :" + objA2.Multiplication());
console.log("Division is :" + objA2.Division());
//Problem faced : when only object is created without parameters throws error.
//couldn't understand in the sample program tried during class initialisation of variable worked well
