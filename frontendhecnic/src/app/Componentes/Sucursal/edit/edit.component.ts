import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { SucursalService } from '../../../Service/sucursal.service';
import { Sucursal } from '../../../Modelo/Sucursal';
import { SharedModule } from '../../../shared/shared.module';
import { UbicacionGeograficaService } from '../../../Service/ubicacion.service';
import { UbicacionGeo } from '../../../Modelo/UbicacionGeo';

@Component({
  selector: 'app-sucursal-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  standalone: true,
  imports: [ SharedModule ]
})
export class EditComponent {
  sucursal: Sucursal = new Sucursal();
  ubicaciones: UbicacionGeo[] = [];

  @Input() changeMode!: (type: string, form: boolean) => void;

  constructor(
    private sucursalService: SucursalService,
    private ubicacionGeograficaService: UbicacionGeograficaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(){
    this.ubicacionGeograficaService.getUbicacionesGeograficas()
      .subscribe(data => {
        this.ubicaciones = data;
      });
    console.log(this.ubicaciones);
    this.Editar();
  }

  Editar(){
    let id = Number(localStorage.getItem("id") || "");
    this.sucursalService.getSucursalById(id)
      .subscribe(data => {
        this.sucursal = data;
      });
  }
  
  Actualizar() {
    const ubicacionSeleccionada = this.ubicaciones.find(u => u.id_ubicacion === this.sucursal.ubicacion.id_ubicacion);
    if (ubicacionSeleccionada) {
        this.sucursal.ubicacion = ubicacionSeleccionada;
    }

    this.sucursalService.updateSucursal(this.sucursal).subscribe(
      (data) => {
        console.log("Sucursal actualizada: ", data);
        this.changeMode('list', false);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error("Error al actualizar sucursal: ", error);
      }
    );
  }
  
  Cancelar(){
    this.changeMode('cancel', false);
  }
}
