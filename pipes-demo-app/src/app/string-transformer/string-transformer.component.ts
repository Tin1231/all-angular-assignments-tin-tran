import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LettersOnlyReversePipe } from '../letters-only-reverse.pipe';

@Component({
  selector: 'app-string-transformer',
  standalone: true,
  imports: [FormsModule, LettersOnlyReversePipe],
  templateUrl: './string-transformer.component.html',
  styleUrls: ['./string-transformer.component.css']
})
export class StringTransformerComponent {
  inputText = '';
  processedText = '';

  transformText(): void {
    this.processedText = this.inputText;
  }
}
