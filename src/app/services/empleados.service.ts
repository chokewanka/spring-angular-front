import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams  } from '@angular/common/http';
import Empleado from '../models/empleados.model';
import EmpleadoFilter from '../models/filters/filter-empleados.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private api: string = environment.api;
  private endpoint: string = 'empleado';

  constructor( private http: HttpClient ) { }

  getEmpleados(){
    const URL:string = `${this.api}/${this.endpoint}/`;
    return this.http.get(URL);
  }

  getEmpleado( id: number ){
    const URL:string = `${this.api}/${this.endpoint}/${id}/show`;
    return this.http.get(URL);
  }

  searchEmpleados( filters:EmpleadoFilter ){
    const URL:string = `${this.api}/${this.endpoint}/search`;
    let params:HttpParams = new HttpParams();

    for (let [key, value] of Object.entries(filters)) {
      params = params.set(key, value.toString());
    }
    
    return this.http.get(URL,{params});

  }

  saveEmpleado( empleado:Empleado ){
    const URL:string = `${this.api}/${this.endpoint}/save`;
    return this.http.post(URL, empleado, {
      headers: {
        'Content-type': 'application/json'
      }
    });
  }

  deleteEmpleado( id:number ){
    const URL:string = `${this.api}/${this.endpoint}/delete`;

    let params:HttpParams = new HttpParams();
    params = params.set('id', id.toString());
    
    let options = { params: params };

    return this.http.delete(URL,options);
  }
  
}
