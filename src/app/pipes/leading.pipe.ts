import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leading'
})
export class LeadingPipe implements PipeTransform {

  transform(value: number|string, char: string, size: number): string {
    if (value.toString().length >= size) {
      return value.toString();
    }
    const full = Array(size).fill(char).join('').concat(value.toString());
    return full.substring(full.length - size);
  }

}
