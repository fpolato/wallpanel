import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsComponent } from './components/rooms/rooms.component';
import { LightsComponent } from './components/lights/lights.component';
import { ThermostatsComponent } from './components/thermostats/thermostats.component';
import { DevicesComponent } from './components/devices/devices.component';
import { PageComponent } from './components/page/page.component';
import { ScreensaverComponent } from './components/screensaver/screensaver.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    LightsComponent,
    ThermostatsComponent,
    DevicesComponent,
    PageComponent,
    ScreensaverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
