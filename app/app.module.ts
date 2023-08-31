import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { Crud2Component } from './crud2/crud2.component';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    TestComponent,
    Crud2Component,
    HomeComponent,
    UserlistComponent,
    AdduserComponent,
    NavbarComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
   //  PrimeNG  Modules
       ButtonModule,
       TableModule,
       CalendarModule,
       SliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
