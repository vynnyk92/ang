import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {

  public event = {
    id: 1,
    name: 'Angular Content',
    date:'9/26/2036',
    time:'10:00am',
    price: 100.52,
    imageUrl:'/assets/images/angularconnect-shield.png',
    location:{
      address:'10 Backer St.',
      city:'London',
      country:'UK',
    }
  };
}
