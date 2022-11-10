import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeteoForecast } from '../interfaces/meteo-forecast';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  // https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM

  // https://open-meteo.com/en/docs
  // https://api.open-meteo.com/v1/forecast
  // ?latitude=45.23
  // &longitude=11.68
  // &daily=weathercode,temperature_2m_max,temperature_2m_min
  // &timezone=Europe%2FBerlin
  // &start_date=2022-11-10
  // &end_date=2022-11-12
  private endpointUrl = 'https://api.open-meteo.com/';

  constructor(private http:HttpClient) { }

  public getForecast(): Observable<MeteoForecast> {

    const startDate: Date = new Date();
    const endDate: Date = new Date(startDate.getTime() + (1000 * 60 * 60 * 24 * 3));

    const headers = {
      params: new HttpParams()
        .set('latitude', environment.meteo.latitude)
        .set('longitude', environment.meteo.longitude)
        .set('daily', 'weathercode,temperature_2m_max,temperature_2m_min')
        .set('timezone', environment.meteo.timezone)
        .set('start_date', this.buildDateString(startDate))
        .set('end_date', this.buildDateString(endDate))
    };

    return this.http.get<MeteoForecast>(this.endpointUrl + 'v1/forecast', headers);
  }

  private buildDateString(date: Date): string {

    const dateStr = date.getFullYear()
      + '-' + String(date.getMonth() + 1).padStart(2, '0')
      + '-' + String(date.getDate()).padStart(2, '0');
    return dateStr;
  }
}
