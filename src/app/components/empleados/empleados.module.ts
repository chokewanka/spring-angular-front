import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from '../../app.routes';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { EmpleadosService } from 'src/app/services/empleados.service';
import { LocalesService } from 'src/app/services/locales.service';
import { NivelesExperienciaService } from 'src/app/services/niveles-experiencia.service';

import { AdminEmpleadosComponent } from './admin-empleados/admin-empleados.component';
import { ShowEmpleadosComponent } from './show-empleados/show-empleados.component';
import { ShowConocimientosComponent } from './show-conocimientos/show-conocimientos.component';
import { CreateEmpleadosComponent } from './create-empleados/create-empleados.component';
import { UpdateEmpleadosComponent } from './update-empleados/update-empleados.component';
import { FormEmpleadosComponent } from './form-empleados/form-empleados.component';
import { FormConocimientosComponent } from './form-conocimientos/form-conocimientos.component';

@NgModule({
  declarations: [
    AdminEmpleadosComponent,
    ShowEmpleadosComponent,
    ShowConocimientosComponent,
    CreateEmpleadosComponent,
    UpdateEmpleadosComponent,
    FormEmpleadosComponent,
    FormConocimientosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    APP_ROUTING
  ],
  providers: [
    EmpleadosService,
    LocalesService,
    NivelesExperienciaService
  ]
})
export class EmpleadosModule { }
