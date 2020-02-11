import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AdminLocalesComponent } from './components/locales/admin-locales/admin-locales.component';
import { CreateLocalesComponent } from './components/locales/create-locales/create-locales.component';
import { UpdateLocalesComponent } from './components/locales/update-locales/update-locales.component';
import { ShowLocalesComponent } from './components/locales/show-locales/show-locales.component';

import { AdminEmpleadosComponent } from './components/empleados/admin-empleados/admin-empleados.component';
import { ShowEmpleadosComponent } from './components/empleados/show-empleados/show-empleados.component';
import { CreateEmpleadosComponent } from './components/empleados/create-empleados/create-empleados.component';
import { UpdateEmpleadosComponent } from './components/empleados/update-empleados/update-empleados.component';

const APP_ROUTES: Routes = [
    { path:'home', component: HomeComponent },
    { path: 'locales', component: AdminLocalesComponent },
    { path: 'local/new', component: CreateLocalesComponent },
    { path: 'local/:id', component: ShowLocalesComponent },
    { path: 'local/:id/edit', component: UpdateLocalesComponent },
    { path: 'empleados', component: AdminEmpleadosComponent },
    { path: 'empleado/new', component: CreateEmpleadosComponent },
    { path: 'empleado/:id', component: ShowEmpleadosComponent },
    { path: 'empleado/:id/edit', component: UpdateEmpleadosComponent },
    { path:'**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:false});