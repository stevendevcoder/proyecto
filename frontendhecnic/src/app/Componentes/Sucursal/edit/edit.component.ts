import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { SucursalService } from '../../../Service/sucursal.service';
import { Sucursal } from '../../../Modelo/Sucursal';

@Component({
  selector: 'app-sucursal-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  standalone: true
})
export class EditComponent {
  @Input() changeMode!: (type: string, form: boolean) => void;

  Cancelar(){
    this.changeMode('cancel', false);
  }

  constructor(
    private sucursalService: SucursalService,
    private cdr: ChangeDetectorRef
  ) {}

  updateSucursal(sucursal: Sucursal) {
    this.sucursalService.updateSucursal(sucursal).subscribe(() => {
      this.sucursalService.getSucursales().subscribe(data => {
        this.changeMode('list', true);
        this.cdr.detectChanges(); // Forzar la detección de cambios
      });
    });
  }

}
