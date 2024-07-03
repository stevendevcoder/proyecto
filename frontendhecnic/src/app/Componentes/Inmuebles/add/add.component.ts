import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { UbicacionGeo } from '../../../Modelo/UbicacionGeo';
import { UbicacionGeograficaService } from '../../../Service/ubicacion.service';
import { Persona } from '../../../Modelo/Persona';
import { PersonaService } from '../../../Service/persona.service';
import { Inmueble } from '../../../Modelo/Inmueble';
import { Avaluo } from '../../../Modelo/Avaluo';
import { InmuebleService } from '../../../Service/inmueble.service';
import { AvaluoService } from '../../../Service/avaluo.service';
import { EstudioRiesgo } from '../../../Modelo/EstudioRiesgo';
import { EstudioDeRiesgoService } from '../../../Service/estudioriesgo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class AddComponent {

  @Input() changeMode!: (message: string) => void;

  inmueble: Inmueble = new Inmueble();
  avaluo: Avaluo = new Avaluo();
  imagePreview: string | null = null;

  ubicaciones: UbicacionGeo[] = [];
  propietarios: Persona[] = [];
  empleados: Persona[] = [];


  constructor(
    private ubicacionGeograficaService: UbicacionGeograficaService,
    private personasService: PersonaService,
    private inmuebleService: InmuebleService,
    private avaluoService: AvaluoService,
    private estudioRiesgoService: EstudioDeRiesgoService
  ){
    
  }

  ngOnInit() {
    this.loadPersonas();
    this.loadUbicaciones();
  }

  loadPersonas() {
    this.personasService.getPersonas().subscribe(data => {
      this.propietarios = data.filter((e) => e.tipoPersona.tipo == 'Cliente');
      this.empleados = data.filter((e) => e.tipoPersona.tipo == 'Empleado');
    });
  }

  loadUbicaciones() {
    this.ubicacionGeograficaService.getUbicacionesGeograficas()
      .subscribe(data => {
        this.ubicaciones = data;
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
      this.inmueble.imagen = this.imagePreview ?? '';
      this.avaluo.inmueble = this.inmueble;
      let idAux = this.avaluo.empleado.id_personas;
      let empleadoAux = this.empleados.find(emp => emp.id_personas === idAux);
      this.avaluo.empleado = empleadoAux ?? this.empleados[0];
      
      this.inmuebleService.createInmueble(this.inmueble).subscribe(
        response => {
          console.log('Inmueble creado correctamente:', response);
          this.avaluo.inmueble.idInmueble = response.idInmueble;
          console.log('Avaluo antes de enviarse: ', this.avaluo);
          this.avaluoService.createAvaluo(this.avaluo).subscribe(
            response => {
              console.log('Avaluado generado correctamente:', response);
              this.changeMode('list');
            },
            error => {
              console.error('Error al crear avaluo:', error);
            }
          );
          this.inmueble.idInmueble = response.idInmueble;
          let newEstudio = new EstudioRiesgo(this.inmueble, this.avaluo.fechaAvaluo);
          if (newEstudio.estado === undefined || newEstudio.estado === null) {
            console.error("Estado es nulo o indefinido");
          }
          this.estudioRiesgoService.createEstudio(newEstudio).subscribe(
            response => {
              console.log('Estudio de riesgo generado correctamente:', response);
              this.changeMode('list');
            },
            error => {
              console.error('Error al crear estudio de riesgo:', error);
            }
          );

          this.changeMode('list');
        },
        error => {
          console.error('Error al crear inmueble:', error);
        }
      );

      
  }

  Cancelar(){
    this.changeMode('list');
  }


}
