import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DaysListComponentComponent } from './days-list-component/days-list-component.component';
import { DayComponentComponent } from './day-component/day-component.component';


const routes: Routes = [
  {path:"", component:HomeComponentComponent},
  {path:"day", component:DayComponentComponent},
  {path:"dayList", component: DaysListComponentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    DayComponentComponent,
    DaysListComponentComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
