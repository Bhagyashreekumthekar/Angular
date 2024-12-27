function ArmstrongNum(Num: number): boolean {
  var No1: number = Num;
  var No2: number = Num;
  var Remainder: number = 0;
  var Sum: number = 0;
  while (No1 > 0) {
    Remainder = No1 % 10;
    Sum = Sum + Remainder * Remainder * Remainder;
    No1 = Math.floor(No1 / 10); // Khup try kel jml nahi net vr search krun hey function use keley
  }
  if (Sum == No2) return true;
  else return false;
}
//console.log(ArmstrongNum(153));
if (ArmstrongNum(153)) {
  console.log("It is an Armstrong Number");
} else console.log("It is not an Armstrong Number");

/**OutPut
 *It is an Armstrong Number
 */
