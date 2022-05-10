import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySplice'
})
export class ArraySplicePipe implements PipeTransform {

  transform(value: string[],filter: string){
    //filter value array by another input
    let result:string[] = [];
    for (let index = 0; index < value.length; index++) {
      if( value[index][0]==filter)
      {
        result.push(value[index])
      }
      
    }
    return result;
  }

}
