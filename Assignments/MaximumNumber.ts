/*function MaximumNum(No1 number, No2 number): number
{
  var Max: number = No1;
  if (Max < No2)
    Max = No2;
  else
    return Max;
  return Max;
}*/

function MaximumNumber(...Value: number[]): number {
  var Max: number = 0;
  var Cnt: number = 0;
  Max = Value[1];
  for (Cnt = 0; Cnt < Value.length; Cnt++) {
    if (Max < Value[Cnt + 1]) {
      Max = Value[Cnt + 1];
    }
  }
  return Max;
}

console.log(
  "Maximum Number is : " + MaximumNumber(23, 89, 6, 29, 56, 45, 77, 32)
);

/**OutPut***
 Maximum Number is : 89
 */
