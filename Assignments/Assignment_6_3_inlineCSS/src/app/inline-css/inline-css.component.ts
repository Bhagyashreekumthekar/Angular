import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-css',
  standalone: true,
  imports: [],
  template: `<h2>Marvellous Infosystem</h2>
    <input type="text" />`,
  styles: [
    `
      h2 {
        color: blue;
      }
    `,
  ],
})
export class InlineCSSComponent {}
