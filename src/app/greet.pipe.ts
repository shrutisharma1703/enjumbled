import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `Hello ${value} , welcome to the world of angular pipes. `;
   // return null;
  }

}
