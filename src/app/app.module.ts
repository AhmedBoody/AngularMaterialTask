
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import{HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import{RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserformDetailComponent} from './userformDetail/userformDetail.component';

const appRoute:Routes=[
  {path:'',component:HomeComponent},
  {path:'users',component:UserformComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    UserformDetailComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
