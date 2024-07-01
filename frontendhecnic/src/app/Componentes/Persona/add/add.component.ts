import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PersonaService } from '../../../Service/persona.service';
import { Persona, Tipo, TipoPersona} from '../../../Modelo/Persona';
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
  persona: Persona = new Persona();
  tipos: string[] = Object.values(Tipo);

  constructor(
    private service:PersonaService, 
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(){
  }

  Cancelar(){
    this.changeMode('cancel', true);
  }

  Guardar(){
    console.log("Persona add: ", this.persona);
    
    this.service.createPersona(this.persona)
      .subscribe(data=>{
        console.log("Se agrego la persona ", this.persona, " con exito");
      });

    this.cdr.detectChanges();
    this.changeMode('list', true);
  }
}
