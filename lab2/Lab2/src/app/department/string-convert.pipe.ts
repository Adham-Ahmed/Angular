import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConvert'
})
export class StringConvertPipe implements PipeTransform {

  transform(value: string) {
    let result = value.replace("-", " ");

    return result;
  }

}
