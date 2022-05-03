import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  //variables de entorno
  private apiUrl = environment.weatherApiBaseUrl;
  private keyUrl = environment.apikey;

  //inicializar httpClient
  constructor(private http: HttpClient) { }

  //metodo para traer clima
  getWeatherData(
    cityName: string,
    days: string,
    air_quality: string,
    alerts: string
  ): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.apiUrl, {
      params: new HttpParams()
        .set('key', this.keyUrl)
        .set('q', cityName)
        .set('days', days)
        .set('aqi', air_quality)
        .set('alerts', alerts)
    })
  }

}
