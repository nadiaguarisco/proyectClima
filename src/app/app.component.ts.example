import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../app/services/clima.service';
import { WeatherData } from '../app/models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'uniweather';
  cityName: string = 'Rivera';
  weatherData?: WeatherData;

  constructor( private climaService: ClimaService ) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string){
    this.climaService.getWeatherData(cityName,'1','yes','yes')
    .subscribe({ next: (response : WeatherData) => {
      this.weatherData = response;
      console.log(response)
    }});
  }
}
