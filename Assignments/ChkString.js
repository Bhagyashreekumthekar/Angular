/*function ChkString(str: string): boolean {
  return str.includes("Marvellous");
}

if (ChkString("This is Marvellous")) console.log(" It contains Marvellous");
else console.log(" It does not contains Marvellous");
*/
function ChkString(str) {
    var StringToFind = "Marvellous";
    var Sentense = str;
    var StrLength = StringToFind.length;
    var SentenseLength = Sentense.length;
    var Found = true;
    for (var i = 0; i <= SentenseLength - StrLength; i++) {
        Found = true;
        for (var j = 0; j < StrLength; j++) {
            if (Sentense[i + j] != StringToFind[j]) {
                console.log("i value : " + i + " " + Sentense[i + j]);
                console.log("j value : " + j + " " + StringToFind[j]);
                Found = false;
                console.log("Found is inside second for : " + Found);
                break;
            }
            console.log("i value : " + i + " " + Sentense[i + j]);
            console.log("j value : " + j + " " + StringToFind[j]);
            console.log("Found is outside second for : " + Found);
        }
    }
    if (Found) {
        return true;
    }
    else {
        return false;
    }
}
if (ChkString("This is Marvellous"))
    console.log(" It contains Marvellous");
else
    console.log(" It does not contains Marvellous");
