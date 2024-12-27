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
console.log("Object 1 Outputs ");
var objCircle1 = new Circle(20);
console.log("Area of Circle is : " + objCircle1.Area());

console.log("Object 2 Outputs ");
var objCircle2 = new Circle(5);
console.log("Area of Circle is : " + objCircle2.Area());

/**Output
 * tsc Circle.ts        
bhagyashreepandhe@BHAGYASHREE-PANDHEs-MacBook-Air Assignments % node Circle.js 
Object 1 Outputs 
Area of Circle is : 1256
Object 2 Outputs 
Area of Circle is : 78.5

 *
 */
