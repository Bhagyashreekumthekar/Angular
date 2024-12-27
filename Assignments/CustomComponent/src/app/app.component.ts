import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-Demo',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: '<app-Demo></app-Demo>',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CustomComponent';
}
