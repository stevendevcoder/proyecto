import { Component, Input } from '@angular/core';
import { Persona } from '../../../Modelo/Persona';
import { PersonaService } from '../../../Service/persona.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class EditComponent {
  persona :Persona=new Persona();
  
  @Input() changeMode!: (type: string, form: Boolean) => void;
  constructor(private service:PersonaService){}

  ngOnInit(){ 
    this.Editar();
    console.log("Se cambia a list"); 

  }

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    alert("Actualizado con Exito...!!!" + id);
    this.service.getPersonaId(id).
      subscribe(data=>{
        this.persona=data;
      });
  }

  Actualizar(persona:Persona){
    console.log("Se cambia a list"); 
    this.service.updatePersona(this.persona).subscribe(data=>{
      this.persona=data;
      alert("Actualizado con Exito...!!!" + this.persona.nombre);

    })
    this.changeMode('list', true);
  }
}
