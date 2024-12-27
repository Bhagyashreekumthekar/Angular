import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ArithmeticService } from './arithmetic.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Assignment_10_1_Again';
}
