import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {

  transform(seconds: number, par1 : string, par2 : string): string {
    return `${seconds} ${seconds <= 1 ? par1 : par2}`;
  }

}
