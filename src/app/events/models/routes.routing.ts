import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from '../events-list/events-list.component';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { CreateEventComponent } from '../create-event/create-event.component';
import { Error404Component } from 'src/app/errors/404/404.component';
import { EventRouteActivatorService } from './EventRouteActivator.service';
import { EventListResolver } from './event-list.resolver';

export const routes: Routes = [
  {  path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeacrivateCreteNewComponent'] },
  {  path: 'events', component: EventsListComponent, resolve: {eventsData: EventListResolver} },
  {  path: 'events/:id', component: EventDetailsComponent , canActivate: [EventRouteActivatorService]},
  {  path: '404', component: Error404Component },
  {  path: 'user', loadChildren: './user/user.module#UserModule' },
  {  path: '', redirectTo: '/events', pathMatch: 'full' }, 
];

