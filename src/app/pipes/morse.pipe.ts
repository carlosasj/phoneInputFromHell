import { Pipe, PipeTransform } from '@angular/core';

const SHORT = String.fromCharCode(0x30FB);
const LONG = String.fromCharCode(0x30FC);

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    return value
      .split('')
      .filter(ch => (ch === '.' || ch === '~'))
      .join(' ')
      .replace(/\./g, SHORT)
      .replace(/~/g, LONG);
  }
}
