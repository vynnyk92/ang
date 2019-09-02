import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event1Service, Event } from '../models/event1.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(private eventService: Event1Service, private activatedRoute: ActivatedRoute) { }
  event: Event;
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id']);
  }

}
