// cita.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from '../Modelo/Cita';


@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private baseUrl = 'http://localhost:8080/citas/submit';

  constructor(private http: HttpClient) { }

  getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(this.baseUrl);
  }

  getCita(id: number): Observable<Cita> {
    return this.http.get<Cita>(`${this.baseUrl}/${id}`);
  }

  crearCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(this.baseUrl, cita);
  }

  actualizarCita(id: number, cita: Cita): Observable<Cita> {
    return this.http.put<Cita>(`${this.baseUrl}/${id}`, cita);
  }

  eliminarCita(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}