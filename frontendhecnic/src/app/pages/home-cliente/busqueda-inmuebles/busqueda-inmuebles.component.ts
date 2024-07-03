import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { EstadoInmueble, Inmueble } from '../../../Modelo/Inmueble';
import { InmuebleService } from '../../../Service/inmueble.service';
import { Router } from '@angular/router';

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
  filtro: string = '';

  constructor(
    private inmuebleService: InmuebleService,
    private router: Router
  ){
  }

  ngOnInit(){
    this.loadInmuebles();
  }
  
  loadInmuebles(busqueda: string = ''){
    this.inmuebleService.getInmuebles().subscribe(data => {
      if(busqueda != ''){
        this.inmuebles = data.filter(i => i.descripcion.toLowerCase().includes(busqueda.toLowerCase()));
      } else {
        this.inmuebles = data;
      }
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

  buscar(){
    this.loadInmuebles(this.filtro);
  }

  toCita() {
    this.router.navigate(['cliente/agendar-cita']);
  }
}
