import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { GestionarClientesComponent } from './gestionar-clientes/gestionar-clientes.component';

@Component({
  selector: 'app-home-empleado',
  templateUrl: './home-empleado.component.html',
  styleUrl: './home-empleado.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class HomeEmpleadoComponent {
  ruta: string = 'gestionar-clientes';

  constructor(private router:Router) {
    
  }

  Salir(){
    this.router.navigate(['inicio']);
  }
}


