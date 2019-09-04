import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventsAppComponent } from './events/events-app/events-app.component';
import { Event1Service } from './events/models/event1.service';
import { ToastrService } from './events/models/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { routes } from './events/models/routes.routing';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404/404.component';
import { EventRouteActivatorService } from './events/models/EventRouteActivator.service';
import { EventListResolver } from './events/models/event-list.resolver';
import { AuthService } from './user/services/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    Event1Service,
    ToastrService,
    EventRouteActivatorService,
    {
      provide: 'canDeacrivateCreteNewComponent',
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService
  ],


  bootstrap: [EventsAppComponent]
})
export class AppModule { }


export function checkDirtyState(eventComp: CreateEventComponent) {
  if (eventComp.isDirty)
    return window.confirm('You have not saved your changes?');
  return true;
}