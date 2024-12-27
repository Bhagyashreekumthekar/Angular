class Circle {
  Radius: number;
  PI: number;

  constructor(Rad: number) {
    this.Radius = Rad;
    this.PI = 3.14;
  }

  Area(): number {
    return this.PI * this.Radius * this.Radius;
  }
}

class CircleX extends Circle {
  PI: number = 3.14;
  constructor(radius: number) {
    super(radius);
  }

  Circumference(): number {
    return 2 * this.PI * this.Radius;
  }
}
console.log("Object 1 Outputs ");
var objCircleX1 = new CircleX(20);
console.log("Circumference of Circle is : " + objCircleX1.Circumference());

console.log("Object 2 Outputs ");
var objCircleX2 = new CircleX(5);
console.log("Circumference of Circle is : " + objCircleX2.Circumference());

/*OutPut
bhagyashreepandhe@BHAGYASHREE-PANDHEs-MacBook-Air Assignments % tsc CircleX.ts 
bhagyashreepandhe@BHAGYASHREE-PANDHEs-MacBook-Air Assignments % node CircleX.js
Object 1 Outputs 
Circumference of Circle is : 125.60000000000001
Object 2 Outputs 
Circumference of Circle is : 31.400000000000002

*/
