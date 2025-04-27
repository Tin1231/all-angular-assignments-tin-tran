import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-pipes',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './first-pipes.component.html',
  styleUrls: ['./first-pipes.component.css']
})
export class FirstPipesComponent {
  today: Date    = new Date();
  amount: number = 5365.75;
  percent: number = 0.111;
}
