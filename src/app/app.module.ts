import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsComponent } from './components/pages/rooms/rooms.component';
import { LightsComponent } from './components/pages/lights/lights.component';
import { ThermostatsComponent } from './components/pages/thermostats/thermostats.component';
import { DevicesComponent } from './components/pages/devices/devices.component';
import { PageComponent } from './components/widgets/page/page.component';
import { ScreensaverComponent } from './components/widgets/screensaver/screensaver.component';
import { HttpClientModule } from '@angular/common/http';
import { LightComponent } from './components/widgets/light/light.component';
import { SectionComponent } from './components/widgets/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    LightsComponent,
    ThermostatsComponent,
    DevicesComponent,
    PageComponent,
    ScreensaverComponent,
    LightComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
