import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ListComponent } from '../../../Componentes/Pagos/list/list.component';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css',
  standalone: true,
  imports: [SharedModule, ListComponent]
})
export class PagosComponent {
  mode: string = 'list';

  changeMode(type: string): void{

  }
}
