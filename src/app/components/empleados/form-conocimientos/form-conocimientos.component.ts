import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Conocimiento from 'src/app/models/conocimientos.model';
import NivelExperiencia from 'src/app/models/nivelesExperiencia.model';
import { NivelesExperienciaService } from 'src/app/services/niveles-experiencia.service';

@Component({
  selector: 'app-form-conocimientos',
  templateUrl: './form-conocimientos.component.html',
  styleUrls: ['./form-conocimientos.component.css']
})
export class FormConocimientosComponent implements OnInit {

  nivelesExperiencia:NivelExperiencia[] = [];

  @Input() conocimiento:Conocimiento = new Conocimiento();
  @Input() i:number;
  @Output() handleSubmit:EventEmitter<number> = new EventEmitter<number>();
  constructor( private _nivelesExperienciaService:NivelesExperienciaService ) {
    this._nivelesExperienciaService.getNivelesExperiencia().subscribe((nivelesExperiencia:NivelExperiencia[]) => {
      this.nivelesExperiencia = nivelesExperiencia;
    });
  }

  ngOnInit() {
  }

  onRemoveExperiencia(){
    console.log("index: " + this.i);
    this.handleSubmit.emit(this.i);
  }

}
