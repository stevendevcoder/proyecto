import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {} from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  standalone: true,
  imports: [
    SharedModule,
  ]
})
export class InicioComponent {
  constructor(private router: Router) {

  }

  seleccionarUsuario(tipoUsuario: string) {
    switch (tipoUsuario) {
      case 'admin':
        this.router.navigate(['/admin/home']);
        break;
      case 'cliente':
        this.router.navigate(['/cliente']);
        break;
      case 'empleado':
        this.router.navigate(['/empleado']);
        break;
      default:
        this.router.navigate(['/inicio']);
    }
  }
}
