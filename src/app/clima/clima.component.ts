import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  constructor( private climaService: ClimaService ) { }

  ngOnInit(): void {
    this.climaService.cargarClima()
    .subscribe( (respuesta : any) => {
      console.log(respuesta)
    });

  }

}
