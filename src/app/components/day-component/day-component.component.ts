import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WeatherData } from 'src/app/models/weather.model';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-day-component',
  templateUrl: './day-component.component.html',
  styleUrls: ['./day-component.component.css']
})
export class DayComponentComponent implements OnInit {

  day!: string;
  cityName: string = 'Rivera';
  weatherData?: WeatherData;

  constructor(private route: ActivatedRoute, private climaService: ClimaService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.day = params['day']
      }
    )
    console.log(this.day)
  }

  onSubmit() {
    if (this.day === "hoy") {
      this.getCurrent(this.cityName);
    } else {
      this.getforecast(this.cityName);
    }
  }

  private getforecast(cityName: string) {
    this.climaService.getForecast(cityName, '1', 'yes', 'yes')
      .subscribe((response: WeatherData) => {
        this.weatherData = response;
        console.log(response);
      });
  }

  private getCurrent(cityName: string) {
    this.climaService.getCurrent(cityName, 'yes', 'yes')
      .subscribe({
        next: (response: WeatherData) => {
          this.weatherData = response;
          console.log(response);
        }
      });
  }





}
