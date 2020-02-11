import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Router } from '@angular/router';
import Empleado from 'src/app/models/empleados.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-empleados',
  templateUrl: './create-empleados.component.html',
  styleUrls: ['./create-empleados.component.css']
})
export class CreateEmpleadosComponent implements OnInit {

  createSubs:Subscription;

  constructor( private _empleadosService:EmpleadosService
             , private router: Router ) {}

  ngOnInit() {
  }

  onSubmit(empleado:Empleado){

    Swal.fire({
      title:'Crear Empleado',
      text:`¿Está seguro que desea crear el empleado "${empleado.nombre}"?`,
      showConfirmButton:true,
      showCancelButton:true
    }).then( resp => {

      if(resp.value){
        this.createSubs = this._empleadosService.saveEmpleado(empleado).subscribe((id:number) => {
          this.router.navigate(['/empleados'], { queryParams: { mensaje: `El empleado "${empleado.nombre}" ha sido creado` } });
        });
      }

    });

  }

  ngOnDestroy() {
    if(this.createSubs){
      this.createSubs.unsubscribe();
    }
  }

}
