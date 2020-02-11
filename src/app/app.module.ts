import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { LocalesModule } from './components/locales/locales.module';
import { EmpleadosModule } from './components/empleados/empleados.module';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    LocalesModule,
    EmpleadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
