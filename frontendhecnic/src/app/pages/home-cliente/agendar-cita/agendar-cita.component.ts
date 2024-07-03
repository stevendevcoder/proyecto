import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Cita } from '../../../Modelo/Cita';
import { CitaService } from '../../../Service/cita.service';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrl: './agendar-cita.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class AgendarCitaComponent {
  cita: Cita = new Cita();
  submited: Boolean = false;
  
  constructor(private citaService: CitaService){
    
  }

  ngOnInit(){
    this.submited = false;    
  }

  Guardar(){
    this.citaService.crearCita(this.cita).subscribe(
      response => {
        console.log("Cita generada correctamente", response);
        this.submited = true;
      },
      error => {
        console.log("Error al crear cita: ", error);
      }
    );
  }
}


