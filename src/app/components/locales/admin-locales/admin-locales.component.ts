import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LocalesService } from '../../../services/locales.service';
import Local from '../../../models/locales.model';
import LocalFilter from '../../../models/filters/filter-locales.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-locales',
  templateUrl: './admin-locales.component.html',
  styleUrls: ['./admin-locales.component.css']
})
export class AdminLocalesComponent implements OnInit {

  locales:Local[] = [];
  localFilter:LocalFilter = new LocalFilter();
  mensaje:string;

  constructor( private _localesService:LocalesService
             , private route:ActivatedRoute
             , private router: Router ) {
    this._localesService.getLocales().subscribe((locales: Local[]) => {
      this.locales = locales;
      console.log(this.locales);
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.mensaje = params['mensaje'];
    });
  }

  verLocal(id:number){
    this.router.navigate(['local',id]);
  }

  editarLocal(id:number){
    this.router.navigate(['local',id,'edit']);
  }

  buscarLocales(){
    this.mensaje = "";
    this._localesService.searchLocales(this.localFilter).subscribe((locales:Local[]) => {
      this.locales = locales;
    });
  }

  borrarLocal(local:Local){

    Swal.fire({
      title:'Eliminar Local',
      text:`¿Está seguro que desea eliminar el local "${local.nombre}"?`,
      showConfirmButton:true,
      showCancelButton:true
    }).then( resp => {

      if(resp.value){

        this._localesService.deleteLocal(local.id).subscribe((response:number) => {
          if(response == 1){
            this.mensaje = `El local "${local.nombre}" ha sido eliminado`;
            this.locales = this.locales.filter(l => local.id !== l.id);
          }
        });

      }

    });
  }

}
