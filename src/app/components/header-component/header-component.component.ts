import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  cityName = "Montevideo";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToday(): void {
    this.router.navigate(["day/hoy"])
  }
  goTomorrow(): void {
    this.router.navigate(["day/mañana"])
  }
  go7Days(): void {
    this.router.navigate(["dayList"])
  }

}
