import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../../Service/persona.service';
import { Persona } from '../../Modelo/Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  persona :Persona=new Persona();
  constructor(private router:Router, private service:PersonaService){}

  ngOnInit(){ 
    this.Editar();
  }

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    alert("Actualizado con Exito...!!!" + id);
    this.service.getPersonaId(id).
      subscribe(data=>{
        this.persona=data;
      })
  }

  Actualizar(persona:Persona){
    this.service.updatePersona(this.persona).subscribe(data=>{
      this.persona=data;
      alert("Actualizado con Exito...!!!" + this.persona.nombre);
      this.router.navigate(["listar"]);
    } )
  }
}
