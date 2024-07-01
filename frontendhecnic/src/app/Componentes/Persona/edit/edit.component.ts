import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Persona, Tipo, TipoPersona} from '../../../Modelo/Persona';
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
  tipos: string[] = Object.values(Tipo);
  nombre: String = '';
  
  @Input() changeMode!: (type: string, form: boolean) => void;
  constructor(private service:PersonaService, private cdr: ChangeDetectorRef){
    
  }

  ngOnInit(){ 
    this.Editar();
  }

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    this.service.getPersonaId(id).
      subscribe(data=>{
        this.persona=data;
      });
    this.nombre = this.persona.nombre;
  }

  Actualizar(){
    this.service.updatePersona(this.persona).subscribe(data=>{
      console.log("data: ",data);
      this.persona=data;
      console.log("Actualizado con Exito: " + this.persona.nombre);
    })
    this.cdr.detectChanges();
    this.changeMode('list', true);
    localStorage.removeItem("id");
    console.log("LocalStorage cuando salgo de editar: ", localStorage);
  }

  Cancelar(){
    this.changeMode('cancel', true);
    localStorage.removeItem("id");
  }
}
