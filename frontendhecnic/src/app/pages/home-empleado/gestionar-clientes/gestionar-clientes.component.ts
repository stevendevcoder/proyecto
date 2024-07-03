import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { ListComponent } from '../../../Componentes/Persona/list/list.component';
import { EditComponent } from '../../../Componentes/Persona/edit/edit.component';

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

  changeMode = (type: string): void => {
    this.mode = type;
  }


}
