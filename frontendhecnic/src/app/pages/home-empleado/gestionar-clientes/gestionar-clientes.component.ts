import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { ListComponent } from '../../../Componentes/Persona/list/list.component';
import { EditComponent } from '../../../Componentes/Persona/edit/edit.component';
import { CitaService } from '../../../Service/cita.service';
import { Cita } from '../../../Modelo/Cita';

@Component({
  selector: 'app-gestionar-clientes',
  templateUrl: './gestionar-clientes.component.html',
  styleUrl: './gestionar-clientes.component.css',
  standalone: true,
  imports: [ SharedModule, ListComponent, EditComponent]
})
export class GestionarClientesComponent {
  mode: string = 'list';
  filtro: string = 'clientes';
  citas: Cita[] = [];
  submited: Boolean = false;

  constructor(private citasService: CitaService){

  }

  ngOnInit(){
    this.loadCitas();
    this.submited = false;
  }

  changeMode = (type: string): void => {
    this.mode = type;
  }

  loadCitas(){
    this.citasService.getCitas().subscribe(data => {
      this.citas = data;
    });
  }


  Delete(cita: Cita) {
    this.citasService.eliminarCita(cita.idCita).subscribe(data => {
      console.log("Cita eliminada: ");
      this.loadCitas();
    });
  }

}
