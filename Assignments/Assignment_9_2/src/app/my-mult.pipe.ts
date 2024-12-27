import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true,
})

//Jevha datatype number dyal tevha array dyava lagel pudhe, jevha string array to bydefault array ahe
//even after giving the data type casting is required
export class MyMultPipe implements PipeTransform {
  transform(value: number[]): number {
    var result: number = 0;
    result = Number(value[0] * value[1]);

    return result;
  }
}
