import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
})
export class Child2Component {
  public str: string = '';
  constructor(private stringServiceObj: StringService) {}

  public countCapital(str: string): number {
    return this.stringServiceObj.CountCapital(str);
  }
}
