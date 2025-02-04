import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArithmeticService {
  constructor() {}

  Add(Num1: number, Num2: number): number {
    return Num1 + Num2;
  }

  Sub(Num1: number, Num2: number): number {
    return Num1 - Num2;
  }
}
