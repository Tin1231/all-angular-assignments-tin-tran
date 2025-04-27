import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseLetters',
  standalone: true
})
export class ReverseLettersPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    const lettersOnly = value.replace(/[^A-Za-z]/g, '');
    return lettersOnly.split('').reverse().join('');
  }
}
