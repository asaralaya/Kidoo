import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor() { }
  gotoBot() {
    window.open("https://web.telegram.org/a/#6285041280");
  }
}


