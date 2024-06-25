import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeAdministradorComponent } from './pages/home-administrador/home-administrador.component';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';
import { HomeEmpleadoComponent } from './pages/home-empleado/home-empleado.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GestionarInmueblesComponent } from './pages/home-empleado/gestionar-inmuebles/gestionar-inmuebles.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'admin',
    children: [
      { path: 'home', component: HomeAdministradorComponent }
    ]
  },
  {
    path: 'cliente',
    loadChildren: () => import('../app/pages/home-cliente/cliente.module')
      .then(m => m.ClienteModule)
  },
  {
    path: 'empleado',
    children: [
      { path: 'home', component: HomeEmpleadoComponent },
    ]
  },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
