import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public clickedEvent: Event;

  childEventClicked(event: Event) {
    console.log('childEventClicked: ', event);

    this.clickedEvent = event;
  }

}
