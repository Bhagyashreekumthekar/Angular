import { Component } from '@angular/core';

@Component({
  selector: 'app-upper-lower',
  standalone: true,
  imports: [],
  templateUrl: './upper-lower.component.html',
  styleUrl: './upper-lower.component.css',
})
export class UpperLowerComponent {
  public displayName = 'Marvellous Infosystems';

  public toupper(): void {
    this.displayName = this.displayName.toUpperCase();
  }

  public tolower(): void {
    this.displayName = this.displayName.toLowerCase();
  }
}
