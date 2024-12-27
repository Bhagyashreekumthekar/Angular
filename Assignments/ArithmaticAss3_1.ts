class ArithmaticAss3_1 {
  No1: number;
  No2: number;
  Result: number = 0;

  constructor(X: number, Y: number) {
    this.No1 = X;
    this.No2 = Y;
  }

  Addition(): number {
    this.Result = this.No1 + this.No2;
    return this.Result;
  }

  Substraction(): number {
    this.Result = this.No1 - this.No2;
    return this.Result;
  }

  Multiplication(): number {
    this.Result = this.No1 * this.No2;
    return this.Result;
  }

  Division(): number {
    this.Result = this.No1 / this.No2;
    return this.Result;
  }
}
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

/*Output

bhagyashreepandhe@BHAGYASHREE-PANDHEs-MacBook-Air Assignments % tsc ArithmaticAss3_1.ts
bhagyashreepandhe@BHAGYASHREE-PANDHEs-MacBook-Air Assignments % node ArithmaticAss3_1.js
Object 1 Outputs 
Addition is :25
Substraction is :15
Multiplication is :100
Division is :4

Object 2 Outputs 
Addition is :10
Substraction is :0
Multiplication is :25
Division is :1
*/
