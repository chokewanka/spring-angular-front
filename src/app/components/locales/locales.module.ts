import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from '../../app.routes';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LocalesService } from '../../services/locales.service';

import { AdminLocalesComponent } from './admin-locales/admin-locales.component';
import { CreateLocalesComponent } from './create-locales/create-locales.component';
import { UpdateLocalesComponent } from './update-locales/update-locales.component';
import { ShowLocalesComponent } from './show-locales/show-locales.component';
import { FormLocalesComponent } from './form-locales/form-locales.component';

@NgModule({
  declarations: [
    AdminLocalesComponent,
    CreateLocalesComponent,
    UpdateLocalesComponent,
    ShowLocalesComponent,
    FormLocalesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    APP_ROUTING
  ],
  providers: [
    LocalesService
  ]
})
export class LocalesModule { }
