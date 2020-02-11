import { Component, OnInit } from '@angular/core';
import Empleado from 'src/app/models/empleados.model';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-show-empleados',
  templateUrl: './show-empleados.component.html',
  styleUrls: ['./show-empleados.component.css']
})
export class ShowEmpleadosComponent implements OnInit {

  empleado:Empleado = new Empleado();
  constructor( private route: ActivatedRoute
             , private _empleadosService: EmpleadosService ) {
      
    const {id} = this.route.snapshot.params;

    this._empleadosService.getEmpleado(parseInt(id)).subscribe((empleado: Empleado) => {
      this.empleado = empleado;
    });
    
  }

  ngOnInit() {
  }

}
