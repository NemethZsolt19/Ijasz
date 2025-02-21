import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ReserveComponent } from './reserve/reserve.component';
import { HomeComponent } from './home/home.component';
import { CheckreservedComponent } from './checkreserved/checkreserved.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ReserveComponent,
    HomeComponent,
    CheckreservedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    AppRoutingModule,
    RegisterComponent]
    
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
