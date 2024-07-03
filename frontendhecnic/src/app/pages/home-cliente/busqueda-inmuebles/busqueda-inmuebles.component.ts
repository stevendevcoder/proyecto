import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { EstadoInmueble, Inmueble } from '../../../Modelo/Inmueble';
import { InmuebleService } from '../../../Service/inmueble.service';

@Component({
  selector: 'app-busqueda-inmuebles',
  templateUrl: './busqueda-inmuebles.component.html',
  styleUrl: './busqueda-inmuebles.component.css',
  standalone: true,
  imports: [
    SharedModule
  ]
})
export class BusquedaInmueblesComponent {
  inmuebles: Inmueble[] = [];

  constructor(
    private inmuebleService: InmuebleService
  ){

  }

  ngOnInit(){
    this.loadInmuebles();
  }
  
  loadInmuebles(){
    this.inmuebleService.getInmuebles().subscribe(data => {
      this.inmuebles = data;
    });
  }
  getEstadoClase(i: Inmueble): string {
    console.log("Renderiza: ", i);
    switch (i.estado) {
      case EstadoInmueble.Revision:
        return 'pendiente';
      case EstadoInmueble.Disponible:
        return 'disponible';
      case EstadoInmueble.Vendido:
      case EstadoInmueble.Arrendado:
        return 'no_disponible';
      default:
        return '';
    }
  }
}
