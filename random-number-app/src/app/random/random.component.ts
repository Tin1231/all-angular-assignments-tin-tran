import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {
  randomNumber = 0;
  inputNumber  = 0;
  sumResult: number | null = null;

  divisor        = 2;
  divisionResult: number | null = null;

  generateRandom(): void {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    this.sumResult    = this.randomNumber + this.inputNumber;
    this.divisionResult = null;
  }

  divide(): void {
    if (this.sumResult !== null && this.divisor !== 0) {
      this.divisionResult = this.sumResult / this.divisor;
    }
  }
}
