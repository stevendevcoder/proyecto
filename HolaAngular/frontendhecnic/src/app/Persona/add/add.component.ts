import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../../Service/persona.service';
import { Persona } from '../../Modelo/Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{

  constructor(private router:Router, private service:PersonaService){}

  ngOnInit(){
  }

  persona = new Persona();

  Guardar(persona:Persona){
    console.log("Nombres: " + persona.nombre)
    alert("Nombres: " + persona.nombre);
    
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("Se agrego la persona con Exito...!!!");
      this.router.navigate(["listar"]);
    })
    
  }
}
