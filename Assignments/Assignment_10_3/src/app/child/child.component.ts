import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  public IsPrime = '';
  public CheckCpital = 0;
  constructor(private numObj: NumberService, private stringObj: StringService) {
    this.IsPrime = this.numObj.ChkPrime(10);
    this.CheckCpital = this.stringObj.CountCapital('Have a Good Day');
  }
}
