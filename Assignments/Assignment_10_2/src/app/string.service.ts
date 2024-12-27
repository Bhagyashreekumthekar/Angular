import { Injectable } from '@angular/core';
import { UpperCasePipe } from '../../node_modules/@angular/common/index';
import { numberAttribute } from '../../node_modules/@angular/core/index';

@Injectable({
  providedIn: 'root',
})
export class StringService {
  constructor() {}

  public CountCapital(Context: string): number {
    var Cnt: number = 0;
    for (var i = 0; i < Context.length; i++) {
      if (Context[i] >= 'A' && Context[i] <= 'Z') {
        Cnt++;
      }
    }

    return Cnt;
  }
}
