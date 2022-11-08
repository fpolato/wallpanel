import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './components/devices/devices.component';
import { LightsComponent } from './components/lights/lights.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ThermostatsComponent } from './components/thermostats/thermostats.component';

const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'lights', component: LightsComponent },
  { path: 'thermostats', component: ThermostatsComponent },
  { path: 'devices', component: DevicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
