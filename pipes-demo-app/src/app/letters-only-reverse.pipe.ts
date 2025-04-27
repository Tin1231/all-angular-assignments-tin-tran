import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lettersOnlyReverse',
  standalone: true
})
export class LettersOnlyReversePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    const letters = value.replace(/[^a-zA-Z]/g, '');
    return letters.split('').reverse().join('');
  }
}
