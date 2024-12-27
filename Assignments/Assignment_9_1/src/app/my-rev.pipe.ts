import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true,
})
export class MyRevPipe implements PipeTransform {
  transform(value: string): string {
    var reverse: string = '';
    if (!value) return value;
    else
      for (var i = value.length - 1; i >= 0; i--) {
        reverse += value[i];
      }

    return reverse;
  }
}
