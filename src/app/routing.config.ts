
import { LandingComponent } from './landing/landing.component';
import { ListComponent } from './list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';
import { NotesComponent } from './notes/notes.component';
import { EventsComponent } from './events/events.component';



export const RoutingTable = [
  { path: '', redirectTo: 'landing', pathMatch: 'full'},
  { path: 'landing', component: LandingComponent},
  { path: 'list', component: ListComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];


