import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(seconds : number): string {
    if (seconds < 60) {
      return 'less than a minute ago'
    }
    else if(seconds < 120) {
      return 'a minute ago'
    }
    else if(seconds < 120) {
      return 'a few minute ago'
    }
    else if(seconds < 240) {
      return 'a minute ago'
    }
    else if(seconds < 3600) {
      return `${Math.floor(seconds/60)} minutes ago`
    }
    else if(seconds < 7200) {
      return 'an hour ago'
    }
    else {
      return 'more than an hour ago'
    }
  }

}
