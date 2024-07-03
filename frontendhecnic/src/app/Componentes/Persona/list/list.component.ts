import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../../Modelo/Persona';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PersonaService } from '../../../Service/persona.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [SharedModule, CommonModule]
})
export class ListComponent implements OnInit {
  personas: Persona[] = [];
  @Input() filtro!: string;
  @Input() changeMode!: (type: string, form: boolean) => void;

  constructor(
    private service: PersonaService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.loadPersonas();
    console.log("Actualizamos lista");
  }


  loadPersonas() {
    this.service.getPersonas().subscribe(data => {
      if(this.filtro == 'clientes'){
        this.personas = data.filter((e) => e.tipoPersona.tipo == 'Cliente');
      } else {
        this.personas = data;
      }
    });
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }

  Editar(persona: Persona): void {
    console.log("Llegamos a Editar persona...!!! " + persona.nombre);
    localStorage.setItem("id", persona.id_personas.toString());
    this.changeMode('edit', true);
  }

  Delete(persona: Persona): void {
    this.service.deletePersona(persona).subscribe(() => {
      this.loadPersonas(); // Recargar la lista después de eliminar
      console.log("Eliminamos al usuario " + persona.nombre);
    });
  }
}
