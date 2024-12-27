import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  constructor() {}

  public ChkPrime(Num: number): string {
    if (isNaN(Num)) {
      return 'Invalid number';
    }
    if (Num < 2) {
      return 'Not Prime';
    }
    for (var i = 2; i <= Num - 1; i++) {
      if (Num % i === 0) {
        return 'Not Prime';
      }
    }
    return 'Prime';
  }
}
