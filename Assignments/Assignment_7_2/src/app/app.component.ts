import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FunComponent } from './fun/fun.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FunComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment_7_2';
}
