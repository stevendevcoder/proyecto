import { Component, Input } from '@angular/core';
import { Inmueble } from '../../../Modelo/Inmueble';
import { SharedModule } from '../../../shared/shared.module';
import { InmuebleService } from '../../../Service/inmueble.service';
import { Persona } from '../../../Modelo/Persona';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class ListComponent {
  inmuebles: Inmueble[] = [];
  clientes: Persona[] = [];
  cliente: Persona = new Persona();
  isSelected: Boolean = false;

  @Input() changeMode!: (message: string) => void;

  constructor(private service: InmuebleService){
    
  }

  ngOnInit(){
    this.loadInmuebles();
  }

  loadInmuebles(){
    this.service.getInmuebles().subscribe(data => {
      this.inmuebles = data.filter(i => i.cliente.id_personas == this.cliente.id_personas);
    });
  }

  loadClientes(){

  }
}
