function Summantion(...ArrayNumbers: number[]): number {
  var Sum: number = 0;
  var Cnt: number = 0;
  for (Cnt = 0; Cnt < ArrayNumbers.length; Cnt++) {
    Sum = Sum + ArrayNumbers[Cnt];
    //console.log(Sum + " ");
  }
  return Sum;
}

console.log("Addition is : " + Summantion(23, 6, 7, 4, 5, 7));

/**
 * Output
 * Addition is : 52
 */
