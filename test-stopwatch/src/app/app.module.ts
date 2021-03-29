import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import {AppCounterService} from './services/app-counter.service';
import { TimeFormatPipe } from './pipes/time-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
