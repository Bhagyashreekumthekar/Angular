import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() public ParentData: any;
  @Output() public ChildContext = new EventEmitter();

  public SendText(inputValue: string) {
    this.ChildContext.emit(inputValue);
  }
}
