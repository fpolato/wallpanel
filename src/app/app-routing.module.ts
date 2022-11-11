import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './components/pages/devices/devices.component';
import { LightsComponent } from './components/pages/lights/lights.component';
import { RoomsComponent } from './components/pages/rooms/rooms.component';
import { ThermostatsComponent } from './components/pages/thermostats/thermostats.component';

const routes: Routes = [
  { path: 'rooms', component: RoomsComponent },
  { path: 'lights', component: LightsComponent },
  { path: 'thermostats', component: ThermostatsComponent },
  { path: 'devices', component: DevicesComponent },
  { path: '',   redirectTo: '/rooms', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
