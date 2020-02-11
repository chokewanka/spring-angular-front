import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams  } from '@angular/common/http';
import NivelExperiencia from '../models/nivelesExperiencia.model';

@Injectable({
  providedIn: 'root'
})
export class NivelesExperienciaService {

  private api: string = environment.api;
  private endpoint: string = 'nivel-experiencia';

  constructor( private http: HttpClient ) { }

  getNivelesExperiencia(){
    const URL:string = `${this.api}/${this.endpoint}/`;
    return this.http.get(URL);
  }

}
