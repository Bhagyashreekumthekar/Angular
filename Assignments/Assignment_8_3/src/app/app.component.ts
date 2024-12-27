import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppsComponent } from './apps/apps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Assignment_8_3';
}
