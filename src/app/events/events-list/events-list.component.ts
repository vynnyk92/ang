import { Component, OnInit } from '@angular/core';
import {events, Event} from '../../models/events-list'

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  
  public eventsData: Event[];

  ngOnInit(): void {
    this.eventsData = events;
  }

}
