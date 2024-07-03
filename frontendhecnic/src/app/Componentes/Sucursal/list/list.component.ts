import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Sucursal } from '../../../Modelo/Sucursal';
import { SucursalService } from '../../../Service/sucursal.service';

@Component({
  selector: 'app-sucursal-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class ListComponent implements OnInit {
  sucursales: Sucursal[] = [];
  @Input() changeMode!: (type: string, form: boolean) => void;

  constructor(
    private service: SucursalService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadSucursales();
  }

  loadSucursales() {
    this.service.getSucursales().subscribe(data => {
      this.sucursales = data;
      //this.cdr.detectChanges(); // Forzar la detección de cambios
    });
  }

  Editar(id: number): void {
    
    localStorage.setItem("id", id.toString());
    console.log("LOL: ",localStorage.getItem("id"));
    this.changeMode('edit', false);
  }

  Delete(sucursal: Sucursal) {
    this.service.deleteSucursal(sucursal.id_sucursales).subscribe(() => {
      this.loadSucursales(); // Recargar la lista después de eliminar
      alert("Eliminamos la sucursal " + sucursal.nombreSucursal);
    });
  }
}