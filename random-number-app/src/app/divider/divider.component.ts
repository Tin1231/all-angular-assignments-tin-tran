import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css']
})
export class DividerComponent {
  @Input() value: number = 0;       
  divisor: number = 2;              
  divisionResult: number | null = null;

  divide(): void {
    if (this.divisor !== 0) {
      this.divisionResult = this.value / this.divisor;
    } else {
      this.divisionResult = null;
    }
  }
}
