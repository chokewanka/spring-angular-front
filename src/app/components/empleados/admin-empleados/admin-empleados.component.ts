import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EmpleadosService } from '../../../services/empleados.service';
import Empleado from '../../../models/empleados.model';
import EmpleadoFilter from '../../../models/filters/filter-empleados.model';

import { LocalesService } from 'src/app/services/locales.service';
import Local from 'src/app/models/locales.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-empleados',
  templateUrl: './admin-empleados.component.html',
  styleUrls: ['./admin-empleados.component.css']
})
export class AdminEmpleadosComponent implements OnInit {

  empleados:Empleado[] = [];
  locales:Local[] = [];
  empleadoFilter:EmpleadoFilter = new EmpleadoFilter();
  mensaje:string;

  constructor( private _empleadosService:EmpleadosService
             , private _localesService:LocalesService
             , private route:ActivatedRoute
             , private router: Router ) {
    this._empleadosService.getEmpleados().subscribe((empleados:Empleado[]) => {
      this.empleados = empleados;
    });

    this._localesService.getLocales().subscribe((locales:Local[]) => {
      this.locales = locales;
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.mensaje = params['mensaje'];
      });
  }

  verEmpleado(id:number){
    this.router.navigate(['empleado',id]);
  }

  editarEmpleado(id:number){
    this.router.navigate(['empleado',id,'edit']);
  }

  buscarEmpleados(){
    this.mensaje = "";
    console.log(this.empleadoFilter);
    this._empleadosService.searchEmpleados(this.empleadoFilter).subscribe((empleados:Empleado[]) => {
      this.empleados = empleados;
    });
  }

  borrarEmpleado(empleado:Empleado){

    Swal.fire({
      title:'Eliminar Empleado',
      text:`¿Está seguro que desea eliminar el empleado "${empleado.nombre}"?`,
      showConfirmButton:true,
      showCancelButton:true
    }).then( resp => {

      if(resp.value){

        this._empleadosService.deleteEmpleado(empleado.id).subscribe((response:number) => {
          if(response == 1){
            this.mensaje = `El empleado "${empleado.nombre}" ha sido eliminado`;
            this.empleados = this.empleados.filter(e => empleado.id !== e.id);
          }
        });

      }

    });

  }

}
