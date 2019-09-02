import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {  Event } from '../models/event1.service';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: Event;

  

  constructor() { }

  ngOnInit() {
  }



}
