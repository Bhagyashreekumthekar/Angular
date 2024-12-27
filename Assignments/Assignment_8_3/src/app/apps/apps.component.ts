import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './apps.component.html',
  styleUrl: './apps.component.css',
})
export class AppsComponent {
  public data: string = '';

  public len: number = 0;

  public Printlength(Data2: string) {
    this.len = Data2.length;
  }
}
