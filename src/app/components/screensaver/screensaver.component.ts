import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { MeteoForecast } from 'src/app/interfaces/meteo-forecast';
import { MeteoService } from 'src/app/services/meteo.service';

@Component({
  selector: 'screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.scss']
})
export class ScreensaverComponent implements OnInit {

  // Icone meteo:
  // https://www.flaticon.com/packs/weather-161

  today: Date = new Date();
  timeSeparatorVisible: boolean = true;
  
  timeSeparatorSub:Subscription;
  dateTimeSub:Subscription;

  constructor(private meteoService: MeteoService) {

    const timeSeparatorSource = interval(500);
    const dateTimeSource = interval(1000);

    this.timeSeparatorSub = timeSeparatorSource.subscribe(val => {
      this.timeSeparatorVisible = !this.timeSeparatorVisible;
    });
    this.dateTimeSub = dateTimeSource.subscribe(val => {
      this.today = new Date();
    });
  }

  ngOnInit(): void {
    this.meteoService.getForecast().subscribe({
      next: (forecast: MeteoForecast) => {
        console.log(forecast);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  ngOnDestroy() {
    this.timeSeparatorSub.unsubscribe();
    this.dateTimeSub.unsubscribe();
  }

}
