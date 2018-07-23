import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailComponent } from './detail/detail.component';
import { AboutComponent } from './about/about.component';
import { NotesComponent } from './notes/notes.component';
import { EventsComponent } from './events/events.component';

import { AppRoutingModule } from './app.routing';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './highlight.directive';

import { DataService } from './data.service';
import { GreetPipe } from './greet.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PageNotFoundComponent,
    DetailComponent,
    AboutComponent,
    NotesComponent,
    EventsComponent,
    LandingComponent,
    FooterComponent,
    HeaderComponent,
    HighlightDirective,
    GreetPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule      

  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
