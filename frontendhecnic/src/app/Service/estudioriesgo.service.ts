import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstudioRiesgo } from '../Modelo/EstudioRiesgo';


@Injectable({
  providedIn: 'root'
})
export class EstudioDeRiesgoService {

  private baseUrl: string = 'http://localhost:8080/estudios-de-riesgo/submit';

  constructor(private http: HttpClient) { }

  getEstudios(): Observable<EstudioRiesgo[]> {
    return this.http.get<EstudioRiesgo[]>(`${this.baseUrl}`);
  }

  getEstudioById(id: number): Observable<EstudioRiesgo> {
    return this.http.get<EstudioRiesgo>(`${this.baseUrl}/${id}`);
  }

  createEstudio(estudio: EstudioRiesgo): Observable<EstudioRiesgo> {
    return this.http.post<EstudioRiesgo>(this.baseUrl, estudio);
  }

  updateEstudio(id: number, estudio: EstudioRiesgo): Observable<EstudioRiesgo> {
    return this.http.put<EstudioRiesgo>(`${this.baseUrl}/${id}`, estudio);
  }

  deleteEstudio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}