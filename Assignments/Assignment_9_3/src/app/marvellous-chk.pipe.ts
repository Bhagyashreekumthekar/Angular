import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true,
})
export class MarvellousChkPipe implements PipeTransform {
  transform(value: string, param: string): string {
    var num: number = Number(value);
    if (isNaN(num)) {
      return 'Invalid number';
    }

    if (param === 'Prime') {
      if (num < 2) {
        return 'Not Prime';
      }
      for (var i = 2; i <= num - 1; i++) {
        if (num % i === 0) {
          return 'Not Prime';
        }
      }
      return ' Prime';
    } else if (param === 'Perfect') {
      var divisors: number = 0;
      for (var i = 1; i < num; i++) {
        if (num % i === 0) {
          divisors = divisors + i;
        }
      }
      if (num === divisors) {
        return 'Perfect';
      } else return 'Not Perfect';
    } else if (param == 'Even') {
      return num % 2 === 0 ? 'Even' : 'Not Even';
    } else if (param == 'Odd') {
      return num % 2 !== 0 ? 'Odd' : 'Not Odd';
    }
    return 'Invalid Input';
  }
}
