import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams  } from '@angular/common/http';
import Local from '../models/locales.model';
import LocalFilter from '../models/filters/filter-locales.model';

@Injectable({
  providedIn: 'root'
})
export class LocalesService {

  private api: string = environment.api;
  private endpoint: string = 'local';

  constructor( private http: HttpClient ) { }

  getLocales(){
    const URL:string = `${this.api}/${this.endpoint}/`;
    return this.http.get(URL);
  }

  getLocal( id: number ){
    const URL:string = `${this.api}/${this.endpoint}/${id}/show`;
    return this.http.get(URL);
  }

  searchLocales( filters:LocalFilter ){
    const URL:string = `${this.api}/${this.endpoint}/search`;
    let params:HttpParams = new HttpParams();

    for (let [key, value] of Object.entries(filters)) {
      params = params.set(key, value.toString());
    }

    return this.http.get(URL,{params});
  }

  saveLocal( local:Local ){
    const URL:string = `${this.api}/${this.endpoint}/save`;
    return this.http.post(URL, local, {
      headers: {
        'Content-type': 'application/json'
      }
    });
  }

  deleteLocal( id:number ){
    const URL:string = `${this.api}/${this.endpoint}/delete`;

    let params:HttpParams = new HttpParams();
    params = params.set('id', id.toString());
    
    let options = { params: params };

    return this.http.delete(URL,options);
  }

}
