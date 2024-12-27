import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InlineCSSComponent } from './inline-css/inline-css.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InlineCSSComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Assignment_6_3_inlineCSS';
}
