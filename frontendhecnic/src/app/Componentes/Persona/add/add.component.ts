import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../../../Service/persona.service';
import { Persona } from '../../../Modelo/Persona';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-persona-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class AddComponent {
  @Input() changeMode!: (type: string, form: Boolean) => void;
  persona = new Persona();

  constructor(private service:PersonaService){}

  ngOnInit(){
  }

  Guardar(){
    console.log("Nombres: " + this.persona.nombre)
    alert("Nombres: " + this.persona.nombre);
    
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      alert("Se agrego la persona con Exito...!!!");
    })

    this.changeMode('list', true);
  }
}
