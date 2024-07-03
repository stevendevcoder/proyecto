import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ListComponent } from '../../../Componentes/Mis-Inmuebles/list/list.component';
import { Inmueble } from '../../../Modelo/Inmueble';
import { Persona } from '../../../Modelo/Persona';
import { InmuebleService } from '../../../Service/inmueble.service';
import { PersonaService } from '../../../Service/persona.service';

@Component({
  selector: 'app-gestionar-inmuebles',
  templateUrl: './gestionar-inmuebles.component.html',
  styleUrl: './gestionar-inmuebles.component.css',
  standalone: true,
  imports: [SharedModule, ListComponent]
})
export class GestionarInmueblesComponent {
  inmuebles: Inmueble[] = [];
  clientes: Persona[] = [];
  cliente: Persona = new Persona();
  isSelected: Boolean = false;

  @Input() changeMode!: (message: string) => void;

  constructor(
    private service: InmuebleService,
    private clienteService: PersonaService
  ){ }

  ngOnInit(){
    this.loadClientes();
  }



  loadInmuebles(){
    this.service.getInmuebles().subscribe(data => {
      console.log(data);
      console.log(this.cliente.id_personas);
      this.inmuebles = data.filter(i => i.cliente.id_personas == this.cliente.id_personas);
      console.log(this.inmuebles);
    });
  }

  loadClientes(){
    this.clienteService.getPersonas().subscribe(data => {
      this.clientes = data.filter(i => i.tipoPersona.tipo == 'Cliente');
    });
  }

  Delete(inmueble: Inmueble){
    this.service.deleteInmueble(inmueble).subscribe(data => {
      console.log("Se elimina: ", data.idInmueble);
    });
  }
}
