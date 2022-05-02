import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor( private http: HttpClient ) { }

  cargarClima(){
    const api_key = '06bbe6a2d2134dad84712501222104';
    const localidad = 'Rivera';
    const dias = 1;
    const calidad_del_aire = 'no';
    const alertas = 'no';
    const url = 'http://api.weatherapi.com/v1/forecast.json';
    const options = { params: new HttpParams({fromString: 'key='+api_key+'&q='+localidad+'&days='+dias+'&aqi='+calidad_del_aire+'&alerts='+alertas})};
    return this.http.get(url, options);

  }

  getWeatherData(cityName:string, days:string, air_quality:string, alerts:string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      params: new HttpParams()
      .set('key', environment.apikey)
      .set('q', cityName)
      .set('days', days)
      .set('aqi', air_quality)
      .set('alerts', alerts)
    })
  }

}
