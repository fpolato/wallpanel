import { Component, OnInit } from '@angular/core';
import { MeteoForecast } from 'src/app/interfaces/meteo-forecast';
import { MeteoService } from 'src/app/services/meteo.service';
import { environment } from 'src/environments/environment';

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
  forecast!: MeteoForecast;

  timeSeparatorTimeout: any;
  dateTimeTimeout: any;
  forecastTimeout: any;

  constructor(private meteoService: MeteoService) {

    this.timeSeparatorTimeout = setInterval(() => {
      this.timeSeparatorVisible = !this.timeSeparatorVisible;
    }, 500);
    this.dateTimeTimeout = setInterval(() => {
      this.today = new Date();
    }, 1000);
    this.forecastTimeout = setInterval(this.updateForecast, environment.meteo.refreshRateMin * 60000);
  }

  ngOnInit(): void {
    this.updateForecast();
  }

  ngOnDestroy() {
    clearInterval(this.timeSeparatorTimeout);
    clearInterval(this.dateTimeTimeout);
    clearInterval(this.forecastTimeout);
  }

  private updateForecast(): void {
    this.meteoService.getForecast().subscribe({
      next: (forecast: MeteoForecast) => {
        console.log(forecast);
        this.forecast = forecast;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  getForecastDate(index: number): Date {
    return new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * index));
  }

  getDailyWeatherIcon(index: number): string {
    if(this.forecast
      && this.forecast.daily
      && this.forecast.daily.weathercode
      && this.forecast.daily.weathercode[index] != null) {
        const code = this.forecast.daily.weathercode[index];
        const basePath = "assets/images/forecast_icons/";
        if(code >= 0 && code <= 39) {
          return basePath + 'sun.png';
        }
        if(code >= 40 && code <= 49) {
          return basePath + 'fog.png';
        }
        if(code >= 50 && code <= 59) {
          return basePath + 'cloud.png';
        }
        if(code >= 60 && code <= 79) {
          return basePath + 'rainy.png';
        }
        if(code >= 80 && code <= 89) {
          return basePath + 'storm.png';
        }
    }
    return '';
  }

  getDailyTemperature(index: number): string {
    if(this.forecast
      && this.forecast.daily
      && this.forecast.daily.temperature_2m_min
      && this.forecast.daily.temperature_2m_min[index] != null
      && this.forecast.daily.temperature_2m_max
      && this.forecast.daily.temperature_2m_max[index] != null) {
        let temperature: string = '';
        temperature = this.forecast.daily.temperature_2m_min[index]
          + ' ' + this.forecast.daily_units.temperature_2m_min
          + ' / '
          + this.forecast.daily.temperature_2m_max[index]
          + ' ' + this.forecast.daily_units.temperature_2m_max;
        return temperature;
    }
    return '';
  }

  getDailyWeather(index: number): string {
    if(this.forecast
      && this.forecast.daily
      && this.forecast.daily.weathercode
      && this.forecast.daily.weathercode[index] != null) {
        const code = this.forecast.daily.weathercode[index];
        if(code >= 0 && code <= 39) {
          return 'Sun';
        }
        if(code >= 40 && code <= 49) {
          return 'Fog';
        }
        if(code >= 50 && code <= 59) {
          return 'Cloud';
        }
        if(code >= 60 && code <= 79) {
          return 'Rain';
        }
        if(code >= 80 && code <= 89) {
          return 'Storm';
        }
    }
    return '';
  }

}
