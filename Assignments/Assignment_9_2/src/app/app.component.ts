import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyAddPipe } from './my-add.pipe';
import { MyMultPipe } from './my-mult.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MyAddPipe, MyMultPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  First: number = 0;
  Second: number = 0;
}
