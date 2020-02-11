import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import Proyecto from '../models/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private api: string = environment.api;
  private endpoint: string = 'proyecto';

  constructor( private http: HttpClient ) { }

  getProyectos(){
    const URL:string = `${this.api}/${this.endpoint}/`;
    return this.http.get(URL);
  }

}
