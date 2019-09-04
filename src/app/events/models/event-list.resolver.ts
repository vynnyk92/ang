import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { Event1Service } from './event1.service';

@Injectable({
  providedIn: 'root'
})
export class EventListResolver implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state:  RouterStateSnapshot) {
    return this.eventService.getEvents().pipe(map(ev=>ev))
  }

constructor(private eventService: Event1Service) { }

}
