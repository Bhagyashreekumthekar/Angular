import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  constructor() {}

  ChkPrime(num: number): string {
    if (isNaN(num)) {
      return 'Invalid Number';
    }
    if (num < 2) {
      return ' The number is not Prime';
    }

    for (var i = 2; i <= num - 1; i++) {
      if (num % i == 0) {
        return ' The number is not Prime';
      }
    }
    return 'The Number is Prime Number';
  }
}
