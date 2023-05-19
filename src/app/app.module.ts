import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component'

// Services
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { AddressesComponent } from './dashboard/pages/addresses/addresses.component';
import { HomeComponent } from './dashboard/pages/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    AddressesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LoginService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
