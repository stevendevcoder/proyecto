import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avaluo, AvaluoDTO } from '../Modelo/Avaluo';
import { Inmueble } from '../Modelo/Inmueble';
import { Observable, mergeMap, forkJoin, map } from 'rxjs';
import { InmuebleService } from './inmueble.service';
import { PersonaService } from './persona.service';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class AvaluoService {

  constructor(
    private http: HttpClient,
    private inmuebleService: InmuebleService,
    private personaService: PersonaService
  ) { }

  Url='http://localhost:8080/avaluos/submit';

  /*
  getAvaluosByInmueble(id: number){
    return this.http.get<AvaluoDTO[]>(this.Url+"/inmueble/" + id);
  }*/

  getAvaluosByInmueble(id: number): Observable<Avaluo[]> {
    return this.http.get<AvaluoDTO[]>(this.Url + "/inmueble/" + id)
      .pipe(
        map(avaluoDTOs => avaluoDTOs.map(dto => this.convertToAvaluo(dto)))
    );
  }
  
  private convertToAvaluo(dto: AvaluoDTO): Avaluo {
    const avaluo = new Avaluo();
    avaluo.id_avaluo = dto.idAvaluo;
    avaluo.fechaAvaluo = new Date(dto.fechaAvaluo);
    avaluo.valorAvaluo = dto.valorAvaluo;
    avaluo.descripcion = dto.descripcion;
  
      // Crear objetos Inmueble y Persona con IDs
    avaluo.inmueble = new Inmueble();
    avaluo.inmueble.idInmueble = dto.idInmueble;
  
    avaluo.empleado = new Persona();
    avaluo.empleado.id_personas = dto.idEmpleado;
  
    return avaluo;
  }

  createAvaluo(avaluo: Avaluo){
    return this.http.post<Avaluo>(this.Url, avaluo);
  }

  getAvaluoById(id: number){
    return this.http.get<Avaluo>(this.Url+"/"+id);
  }

  updateAvaluo(id: number,avaluo: Avaluo){
    return this.http.put<Avaluo>(this.Url+"/"+id, avaluo);
  }

  deleteAvaluo(id: number){
    return this.http.delete<Avaluo>(this.Url+ "/" + id);
  }
}
