import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css',
})
export class ToggleButtonComponent {
  displayText: string = 'Marvellous Infosystem'; // Initial text

  toggleText(): void {
    this.displayText =
      this.displayText === 'Marvellous Infosystem'
        ? 'Education for Better tomorrow'
        : 'Marvellous Infosystem';
  }
}
