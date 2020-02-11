import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Empleado from 'src/app/models/empleados.model';
import { NgForm } from '@angular/forms';
import { LocalesService } from 'src/app/services/locales.service';
import Local from 'src/app/models/locales.model';
import Conocimiento from 'src/app/models/conocimientos.model';
import NivelExperiencia from 'src/app/models/nivelesExperiencia.model';

@Component({
  selector: 'app-form-empleados',
  templateUrl: './form-empleados.component.html',
  styleUrls: ['./form-empleados.component.css']
})
export class FormEmpleadosComponent implements OnInit {

  locales:Local[] = [];

  @Input() empleado:Empleado = new Empleado();
  @Output() handleSubmit:EventEmitter<Empleado> = new EventEmitter<Empleado>();
  constructor( private _localesService:LocalesService) {

    this.empleado.conocimientos.sort((o1,o2) => {
      if(o1.id > 0 && o2.id > 0){
        return (o1.id > o2.id)?1:0;
      }
      return 0;
    });

    this._localesService.getLocales().subscribe((locales:Local[]) => {
      this.locales = locales;
    });
  }

  ngOnInit() {
  }

  onSubmit(empleadoForm:NgForm){

    const { valid, value } = empleadoForm;

    if(valid){
      const newModel = Object.assign({},this.empleado,value)
      this.handleSubmit.emit(newModel);
    }

  }

  onAddExperiencia(){

    let conocimiento:Conocimiento = new Conocimiento();
    let nivelExperiencia:NivelExperiencia = new NivelExperiencia();

    conocimiento.id = 0;
    conocimiento.idEmpleado = 0;
    conocimiento.nombre = "";
    nivelExperiencia.id = 0;
    conocimiento.nivelExperiencia = nivelExperiencia;

    this.empleado.conocimientos.push(conocimiento);

  }

  handleRemoveExperiencia(i:number){
    console.log("index(verif): " + i);
    console.log(this.empleado.conocimientos[i]);

    let conocimiento:Conocimiento = this.empleado.conocimientos[i];

    if(conocimiento.id == 0){
      this.empleado.conocimientos.splice(i,1);
    }
    else{
      conocimiento.isDeleted = 1;
      this.empleado.conocimientos[i] = conocimiento;
    }
    
  }

}
