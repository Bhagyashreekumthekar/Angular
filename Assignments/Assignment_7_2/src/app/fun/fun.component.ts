import { Component } from '@angular/core';

@Component({
  selector: 'app-fun',
  standalone: true,
  imports: [],
  templateUrl: './fun.component.html',
  styleUrl: './fun.component.css',
})
export class FunComponent {
  public fun() {
    return 'Marvellous Infosystems';
  }
}
