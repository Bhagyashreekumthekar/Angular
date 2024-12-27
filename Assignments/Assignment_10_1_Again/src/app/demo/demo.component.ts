import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent {
  constructor(private arithmeticservice: ArithmeticService) {}

  public add(num1: number, num2: number): number {
    return this.arithmeticservice.Add(num1, num2);
  }

  public sub(num1: number, num2: number): number {
    return this.arithmeticservice.Sub(num1, num2);
  }
}
