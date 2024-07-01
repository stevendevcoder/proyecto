import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Sucursal } from '../../../Modelo/Sucursal';
import { SucursalService } from '../../../Service/sucursal.service';
import { SharedModule } from '../../../shared/shared.module';
import { UbicacionGeo } from '../../../Modelo/UbicacionGeo';
import { UbicacionGeograficaService } from '../../../Service/ubicacion.service';

@Component({
  selector: 'app-sucursal-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class AddComponent {
  @Input() changeMode!: (type: string, form: boolean) => void;

  sucursal: Sucursal = new Sucursal();
  ubicaciones: UbicacionGeo[] = [];

  constructor(
    private sucursalService: SucursalService,
    private ubicacionGeograficaService: UbicacionGeograficaService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.ubicacionGeograficaService.getUbicacionesGeograficas()
      .subscribe(data => {
        this.ubicaciones = data;
      });
    console.log(this.ubicaciones);
  }

  Guardar() {
    const ubicacionSeleccionada = this.ubicaciones.find(u => u.id_ubicacion === this.sucursal.ubicacion.id_ubicacion);
    if (ubicacionSeleccionada) {
        this.sucursal.ubicacion = ubicacionSeleccionada;
    }

    this.sucursalService.createSucursal(this.sucursal)
      .subscribe(data => {
        console.log("Se agregó una sucursal: ", data);
        this.changeMode('list', false);
      }, error => {
        console.error("Error al agregar sucursal: ", error);
      });
  }

  Cancelar(){
    this.changeMode('cancel', false);
  }
}
