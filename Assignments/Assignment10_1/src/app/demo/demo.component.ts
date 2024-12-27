import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArithmeticService } from '../arithmetic.service';
import { TitleStrategy } from '../../../node_modules/@angular/router/index';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
})
export class DemoComponent {
  constructor(private arithmeticService: ArithmeticService) {}

  add(num1: number, num2: number): number {
    return this.arithmeticService.Add(num1, num2);
  }

  sub(num1: number, num2: number): number {
    return this.arithmeticService.Sub(num1, num2);
  }
}
