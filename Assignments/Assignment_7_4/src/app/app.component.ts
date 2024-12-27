import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperLowerComponent } from './upper-lower/upper-lower.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UpperLowerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment_7_4';
}
