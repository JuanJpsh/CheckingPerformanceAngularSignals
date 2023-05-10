import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DefaultComponent } from './first-lab/default/default.component';
import { SignalComponent } from './first-lab/signal/signal.component';
import { OnPushComponent } from './first-lab/on-push/on-push.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FirstLabComponent } from './first-lab/first-lab.component';
import { SecondLabComponent } from './second-lab/second-lab.component';
import { CardComponent } from './second-lab/on-push-card/on-push-card.component';
import { OnPushCardComponent } from './second-lab/default-card/default-card.component';
import { NoEventComponent } from './first-lab/no-event/no-event.component';
import { ThirdLabComponent } from './third-lab/third-lab.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    SignalComponent,
    OnPushComponent,
    FirstLabComponent,
    SecondLabComponent,
    CardComponent,
    OnPushCardComponent,
    NoEventComponent,
    ThirdLabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
