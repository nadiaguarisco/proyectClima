import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../app/services/clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'uniweather';
  weather = [];
  currentDate = new Date().toLocaleDateString();

  constructor( private climaService: ClimaService ) { }

  ngOnInit(): void {
    this.climaService.cargarClima()
    .subscribe( (respuesta : any) => {
      console.log(respuesta);
      this.weather = respuesta;
    });

  }
}
