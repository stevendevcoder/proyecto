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
  @Input() changeMode!: (type: string, form: boolean) => void;
  persona = new Persona();

  constructor(private service:PersonaService){}

  ngOnInit(){
  }

  Cancelar(){
    this.changeMode('cancel', true);
  }


  Guardar(){
    console.log("Nombres: " + this.persona.nombre)
    alert("Nombres: " + this.persona.nombre);
    
    this.service.createPersona(this.persona)
    .subscribe(data=>{
      console.log("Se agrego la persona ", this.persona, " con exito");
    })

    this.changeMode('list', true);
  }
}
