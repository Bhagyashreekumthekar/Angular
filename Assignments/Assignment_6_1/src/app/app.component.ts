import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextFieldDemoComponent } from './text-field-demo/text-field-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextFieldDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Assignment_6_1';
}
