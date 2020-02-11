import { Component, OnInit } from '@angular/core';
import Local from 'src/app/models/locales.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';
import Empleado from 'src/app/models/empleados.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-empleados',
  templateUrl: './update-empleados.component.html',
  styleUrls: ['./update-empleados.component.css']
})
export class UpdateEmpleadosComponent implements OnInit {

  empleado:Empleado;
  editSubs:Subscription;

  constructor( private router: Router
             , private route: ActivatedRoute
             , private _empleadosService: EmpleadosService ) {

    const {id} = this.route.snapshot.params;

     this._empleadosService.getEmpleado(parseInt(id)).subscribe((empleado: Empleado) => {
      this.empleado = empleado;
     });

  }

  ngOnInit() {
  }

  onSubmit(empleado:Empleado){

    Swal.fire({
      title:'Crear Empleado',
      text:`¿Está seguro que desea actualizar el empleado "${empleado.nombre}"?`,
      showConfirmButton:true,
      showCancelButton:true
    }).then( resp => {

        if(resp.value){
          this.editSubs = this._empleadosService.saveEmpleado(empleado).subscribe((id:number) => {
            this.router.navigate(['/empleados'], { queryParams: { mensaje: `El empleado "${empleado.nombre}" ha sido actualizado` } });
          });
        }
        
    });
  }

  ngOnDestroy() {
    if(this.editSubs){
      this.editSubs.unsubscribe();
    }
  }

}
