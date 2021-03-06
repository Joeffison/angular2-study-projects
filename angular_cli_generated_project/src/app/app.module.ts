import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { TechComponent, TechCardComponent } from './tech/index';

import { AuthenticationService, UtilService } from './shared/services/index';

import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    TechComponent,
    TechCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthenticationService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
