import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
})
export class Child1Component {
  public num: number = 0;
  constructor(private numberserviceobj: NumberService) {}

  public chkPrime(num: number): string {
    return this.numberserviceobj.ChkPrime(this.num);
  }
}
