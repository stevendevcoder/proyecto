import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { PersonaService } from './Service/persona.service';
import { AnalisisRiesgoComponent } from './pages/home-empleado/analisis-riesgo/analisis-riesgo.component';
import { BusquedaInmueblesComponent } from './pages/home-cliente/busqueda-inmuebles/busqueda-inmuebles.component';
import { AgendarCitaComponent } from './pages/home-cliente/agendar-cita/agendar-cita.component';
import { PagosComponent } from './pages/home-cliente/pagos/pagos.component';
import { GestionarInmueblesComponent } from './pages/home-cliente/gestionar-inmuebles/gestionar-inmuebles.component';

@NgModule({ 
    declarations: [
        AppComponent,

    ],
    bootstrap: [
        AppComponent
    ], 
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
       
    ], 
    providers: [
        PersonaService, 
        provideHttpClient(withInterceptorsFromDi()), 
        provideAnimationsAsync()] 
    })
export class AppModule { }
