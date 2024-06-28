import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ListComponent } from '../../../Componentes/Mis-Inmuebles/list/list.component';

@Component({
  selector: 'app-gestionar-inmuebles',
  templateUrl: './gestionar-inmuebles.component.html',
  styleUrl: './gestionar-inmuebles.component.css',
  standalone: true,
  imports: [SharedModule, ListComponent]
})
export class GestionarInmueblesComponent {
  mode: string = 'list';
  
  changeMode(type: string):void {
    this.mode = type;
  }
}
