function SecondMaximum(...Value: number[]): number {
  var Max: number = 0;
  var Cnt: number = 0;
  Max = Value[0];
  var SecondMax: number = Max;
  for (Cnt = 0; Cnt < Value.length; Cnt++) {
    if (Max < Value[Cnt + 1]) {
      SecondMax = Max; //23
      Max = Value[Cnt + 1]; //89
    } else if (SecondMax < Value[Cnt + 1] && Max > Value[Cnt + 1]) {
      SecondMax = Value[Cnt + 1]; //29 56 77
    }
  }

  return SecondMax;
}

console.log(
  "Second Maximum number is :" + SecondMaximum(23, 89, 6, 29, 56, 45, 77, 32)
);

/*Output
Second Maximum number is :77
 */
