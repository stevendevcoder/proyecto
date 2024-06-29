import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sucursal } from '../Modelo/Sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  Url = 'http://localhost:8080/sucursales/submit';

  constructor(private http: HttpClient) { }

  getSucursales() {
    return this.http.get<Sucursal[]>(this.Url);
  }

  createSucursal(sucursal: Sucursal) {
    return this.http.post<Sucursal>(this.Url, sucursal);
  }

  getSucursalById(idSucursal: number) {
    return this.http.get<Sucursal>(`${this.Url}/${idSucursal}`);
  }

  updateSucursal(sucursal: Sucursal) {
    return this.http.put<Sucursal>(`${this.Url}/${sucursal.id_sucursales}`, sucursal);
  }

  deleteSucursal(idSucursal: number) {
    return this.http.delete<Sucursal>(`${this.Url}/${idSucursal}`);
  }
}
