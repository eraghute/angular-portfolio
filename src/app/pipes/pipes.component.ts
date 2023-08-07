import { Component } from '@angular/core';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
  public count : number = 0
  convertTime(seconds : number) {
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
