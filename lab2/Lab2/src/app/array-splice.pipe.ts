import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySplice'
})
export class ArraySplicePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
