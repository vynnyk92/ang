import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Event1Service } from '../models/event1.service';


@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean {
    const eventExist =  !!this.eventService.getEvent(+route.params['id']);

    if(!eventExist)
      this.router.navigate(['404']);
    return eventExist;
  }

  constructor(private eventService: Event1Service,private router: Router) {

  }
}

