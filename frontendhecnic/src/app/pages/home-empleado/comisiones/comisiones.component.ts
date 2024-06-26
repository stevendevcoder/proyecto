import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ListComponent } from '../../../Componentes/Comisiones/list/list.component';

@Component({
  selector: 'app-comisiones',
  templateUrl: './comisiones.component.html',
  styleUrl: './comisiones.component.css',
  standalone: true,
  imports: [ SharedModule, ListComponent ]
})
export class ComisionesComponent {
  mode: string = 'list';

  changeMode(type: string): void {
    this.mode = type;
  }

}


