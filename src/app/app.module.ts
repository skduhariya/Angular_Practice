import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './event-details/event-details.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
