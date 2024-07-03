import { Component, Input } from '@angular/core';
import { UbicacionGeograficaService } from '../../../Service/ubicacion.service';
import { PersonaService } from '../../../Service/persona.service';
import { InmuebleService } from '../../../Service/inmueble.service';
import { UbicacionGeo } from '../../../Modelo/UbicacionGeo';
import { Persona } from '../../../Modelo/Persona';
import { Inmueble } from '../../../Modelo/Inmueble';
import { Avaluo } from '../../../Modelo/Avaluo';
import { SharedModule } from '../../../shared/shared.module';
import { AvaluoService } from '../../../Service/avaluo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  standalone: true,
  imports: [ SharedModule ]
})
export class EditComponent {
  @Input() changeMode!: (message: string) => void;
  modeAvaluos: string = 'list';

  idAvaluoEdit: number | null = null;
  inmueble: Inmueble = new Inmueble();
  avaluoEdit: Avaluo = new Avaluo();
  avaluoNew: Avaluo = new Avaluo();
  imagePreview: string | null = null;
  
  ubicaciones: UbicacionGeo[] = [];
  propietarios: Persona[] = [];
  avaluosInmueble: Avaluo[] = [];
  empleados: Persona[] = [];


  constructor(
    private ubicacionGeograficaService: UbicacionGeograficaService,
    private personasService: PersonaService,
    private inmuebleService: InmuebleService,
    private avaluoService: AvaluoService
  ){
    
  }

  ngOnInit() {
    this.loadPersonas();
    this.loadUbicaciones();
    this.loadAvaluos();
    this.loadInmueble();
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

  loadAvaluos() {
    const id_inmueble = Number(localStorage.getItem("id") || "");
    this.avaluoService.getAvaluosByInmueble(id_inmueble).subscribe(data => {
        this.avaluosInmueble = data;
    });
  }

  loadInmueble() {
    const id_inmueble = Number(localStorage.getItem("id") || "");
    this.inmuebleService.getInmuebleById(id_inmueble).subscribe(data => {
      this.inmueble = data;
      this.imagePreview = this.inmueble.imagen;
      console.log(data);
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
      
      this.inmuebleService.createInmueble(this.inmueble).subscribe(
        response => {
          console.log('Inmueble creado correctamente:', response);
          this.changeMode('list');
        },
        error => {
          console.error('Error al crear inmueble:', error);
        }
      );
  }

  onEditAvaluo(){
    this.avaluoEdit.inmueble = this.inmueble;

    if(this.idAvaluoEdit != null) {
      this.avaluoService.updateAvaluo(this.idAvaluoEdit, this.avaluoEdit).subscribe(
        response => {
          console.log('Avaluo editado correctamente:', response);
          this.modeAvaluos = 'list';
        },
        error => {
          console.error('Error al editar avaluo:', error);
          this.modeAvaluos = 'list';
        }
      );
    }
  }

  onSubmitAvaluo(){
    console.log("Estado de avaluo: ",this.avaluoNew);
    this.avaluoNew.inmueble = this.inmueble;
    this.avaluoService.createAvaluo(this.avaluoNew).subscribe(
      response => {
        console.log('Avaluo creado correctamente:', response);
        this.modeAvaluos = 'list';
      },
      error => {
        console.error('Error al crear avaluo:', error, "");
        this.modeAvaluos = 'list';
      }
    );
  }

  AgregarAvaluo(){
    this.avaluoNew.inmueble = this.inmueble;
    this.modeAvaluos = 'add';
  }

  Cancelar(){
    this.changeMode('list');
  }

  EditAvaluo(_avaluo: Avaluo){
    this.idAvaluoEdit = _avaluo.id_avaluo;
    this.avaluoEdit = {..._avaluo};
    this.modeAvaluos = 'edit';
  }

  DeleteAvaluo(_avaluo: Avaluo){
    this.avaluoService.deleteAvaluo(_avaluo.id_avaluo).subscribe(data => {
      this.loadAvaluos();
    });
  }

}
