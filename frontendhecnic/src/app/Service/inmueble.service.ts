import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inmueble } from '../Modelo/Inmueble';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/inmuebles/submit';

  getInmuebles(){
    return this.http.get<Inmueble[]>(this.Url);
  }
  /*
  getTypePersona(idpersona: number): string{
    return this.http.get<string>(this.Url + "/" + idpersona);
  } */

  createInmueble(inmueble: Inmueble): Observable<Inmueble>{
    return this.http.post<Inmueble>(this.Url, inmueble);
  }

  getInmuebleById(id_inmueble: number){
    return this.http.get<Inmueble>(this.Url+"/"+id_inmueble);
  }

  updateInmueble(inmueble: Inmueble){
    return this.http.put<Inmueble>(this.Url+"/"+inmueble.idInmueble, inmueble);
  }

  deleteInmueble(inmueble: Inmueble){
    return this.http.delete<Inmueble>(this.Url+ "/" + inmueble.idInmueble);
  }
}
