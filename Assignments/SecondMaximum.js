/*function SecondMaximum(...SecondMaxArray: number[]): number {
  var Max: number = 0;
  var SecondMax: number = Max;
  var Cnt: number = 0;
  Max = SecondMaxArray[0];
  for (Cnt = 0; Cnt < SecondMaxArray.length; Cnt++) {
    if (Max < SecondMaxArray[Cnt + 1]) {
      SecondMax = Max;

      Max = SecondMaxArray[Cnt + 1];
    }
    console.log("SecondMax" + Max);
    console.log("Max" + Max);
  }
  return SecondMax;
}*/
function SecondMaximum() {
    var Value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Value[_i] = arguments[_i];
    }
    var Max = 0;
    var Cnt = 0;
    Max = Value[0];
    var SecondMax = Max;
    for (Cnt = 0; Cnt < Value.length; Cnt++) {
        if (Max < Value[Cnt + 1]) {
            SecondMax = Max; //23
            Max = Value[Cnt + 1]; //89
        }
        else if (SecondMax < Value[Cnt + 1] && Max > Value[Cnt + 1]) {
            SecondMax = Value[Cnt + 1]; //29 56 77
        }
    }
    return SecondMax;
}
console.log("Second Maximum number is :" + SecondMaximum(23, 89, 6, 29, 56, 45, 77, 32));
