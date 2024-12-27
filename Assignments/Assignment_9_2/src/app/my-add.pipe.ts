import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true,
})
export class MyAddPipe implements PipeTransform {
  transform(value: number[]): number {
    return Number(value[0]) + Number(value[1]);
  }
}
