import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomComponent } from './random/random.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RandomComponent ],  
  templateUrl: './app.component.html',
  template: `<app-random></app-random>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-number-app';
}
