import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { ReverseLettersPipe } from '../reverse-letters.pipe';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReverseLettersPipe ],
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent {
  inputText = '';
  showResult = false;

  onTransform(): void {
    this.showResult = true;
  }
}
