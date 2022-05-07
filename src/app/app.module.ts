import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { DaysListComponentComponent } from './components/days-list-component/days-list-component.component';
import { DayComponentComponent } from './components/day-component/day-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';


const routes: Routes = [
  {path:"", component:HomeComponentComponent},
  {path:"day/:day", component:DayComponentComponent},
  {path:"dayList", component: DaysListComponentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    DayComponentComponent,
    DaysListComponentComponent,
    HeaderComponentComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
