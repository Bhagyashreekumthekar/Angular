import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: '<app-Mar></app-Mar>',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MarvellousFirst';
}
