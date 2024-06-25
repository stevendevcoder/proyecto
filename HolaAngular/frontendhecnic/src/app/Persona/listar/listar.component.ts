import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../../Service/persona.service';
import { Persona } from '../../Modelo/Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  
  personas:Persona[] = [];
  constructor(private service:PersonaService, private router:Router){
    //this.personas = [];
  }
    

  ngOnInit(): void {
      this.service.getPersonas()
      .subscribe(data=>{
        this.personas=data;
      })
  }

  Editar(persona:Persona): void{
    alert("Llegamos a Editar persona...!!!" + persona.nombre);
    localStorage.setItem("id", persona.id_personas.toString());
    this.router.navigate(["edit"]);
  }

  Delete(persona:Persona): void{
    this.service.deletePersona(persona)
    .subscribe(data=>{

      // let nuevaLista: Persona[] = [];

      // for (let i = 0; i < this.personas.length; i++) {
      //   if (this.personas[i] !== persona) {
      //     nuevaLista.push(this.personas[i]);
      //   }
      // }
      
      this.personas= this.personas.filter(p => p !== persona);
      alert("Eliminamos al usuario " + persona.nombre);
    });
  }
}