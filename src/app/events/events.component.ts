import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events;

  constructor() {

    this.events = [
      { 'name': 'event1-BLR', location: 'BLR' },
      { 'name': 'event2-Delhi', location: 'Delhi' },
      { 'name': 'event3-JPR', location: 'Jaipur' }
    ];
  }
  @Output() eventClicked = new EventEmitter<Event>();

  onClick(event: Event): void {
    console.log('event: ', event);

    this.eventClicked.emit(event);
  }

  ngOnInit() {
  }

}
