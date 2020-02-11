import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalesService } from 'src/app/services/locales.service';
import Local from 'src/app/models/locales.model';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-locales',
  templateUrl: './update-locales.component.html',
  styleUrls: ['./update-locales.component.css']
})
export class UpdateLocalesComponent implements OnInit {

  local:Local;
  editSubs:Subscription;

  constructor( private router: Router
             , private route: ActivatedRoute
             , private _localesService: LocalesService ) {

    const {id} = this.route.snapshot.params;
  
    this._localesService.getLocal(parseInt(id)).subscribe((local: Local) => {
      this.local = local;
    });

  }

  ngOnInit() {
  }

  onSubmit(local:Local){

    Swal.fire({
      title:'Actualizar Local',
      text:`¿Está seguro que desea actualizar el local "${local.nombre}"?`,
      showConfirmButton:true,
      showCancelButton:true
    }).then( resp => {

      if(resp.value){

        this.editSubs = this._localesService.saveLocal(local).subscribe((id:number) => {
          this.router.navigate(['/locales'], { queryParams: { mensaje: `El local "${local.nombre}" ha sido actualizado` } });
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
