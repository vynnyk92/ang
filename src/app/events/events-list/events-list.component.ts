import { Component, OnInit, Inject } from '@angular/core';
import { Event1Service, Event } from '../models/event1.service';
import { ToastrService } from '../models/toastr.service';

@Component({
  // selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
  // providers: [Event1Service]
})
export class EventsListComponent implements OnInit {

  constructor(private eventService: Event1Service, private toastrService: ToastrService){}
  public eventsData: Event[];

  ngOnInit(): void {
    this.eventsData = this.eventService.getEvents();
  }

  handleClick(name: string){
    this.toastrService.Success(name);
  }
}
