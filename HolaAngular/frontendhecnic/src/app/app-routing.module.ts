import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdministradorComponent } from './pages/home-administrador/home-administrador.component';
import { HomeClienteComponent } from './pages/home-cliente/home-cliente.component';
import { InicioComponent } from './pages/inicio/inicio.component';



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
    children: [
      { path: 'home', component: HomeClienteComponent },
    ]
  },
  {
    path: 'empleado',
    loadChildren:() => import('../app/pages/home-empleado/empleado.module')
    .then(m => m.EmpleadoModule)
  },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
