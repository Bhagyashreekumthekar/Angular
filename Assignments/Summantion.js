function Summantion() {
    var ArrayNumbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ArrayNumbers[_i] = arguments[_i];
    }
    var Sum = 0;
    var Cnt = 0;
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
