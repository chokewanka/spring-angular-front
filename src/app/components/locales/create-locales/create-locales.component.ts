import { Component, OnInit } from '@angular/core';
import { LocalesService } from 'src/app/services/locales.service';
import { Router } from '@angular/router';
import Local from 'src/app/models/locales.model';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-locales',
  templateUrl: './create-locales.component.html',
  styleUrls: ['./create-locales.component.css']
})
export class CreateLocalesComponent implements OnInit {

  createSubs:Subscription;

  constructor( private _localesService:LocalesService
             , private router: Router ) { }

  ngOnInit() {
  }

  onSubmit(local:Local){

    Swal.fire({
      title:'Crear Local',
      text:`¿Está seguro que desea crear el local "${local.nombre}"?`,
      showConfirmButton:true,
      showCancelButton:true
    }).then( resp => {

      if(resp.value){

        this.createSubs = this._localesService.saveLocal(local).subscribe((id:number) => {
          this.router.navigate(['/locales'], { queryParams: { mensaje: `El local "${local.nombre}" ha sido creado` } });
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
