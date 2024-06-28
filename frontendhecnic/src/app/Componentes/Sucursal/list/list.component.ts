import { Component, Input } from '@angular/core';
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
export class ListComponent {
  sucursales: Sucursal[] = []

  @Input() changeMode!: (type: string, form: Boolean) => void;

  constructor(private service:SucursalService){

  }

  ngOnInit(): void {
    this.service.getSucursales()
    .subscribe(data=>{
      this.sucursales=data;
    })
  }

  Delete(sucursal: Sucursal){
    this.service.deleteSucursal(sucursal.id_sucursales)
    .subscribe(data=>{
      this.sucursales= this.sucursales.filter(p => p !== sucursal);
      alert("Eliminamos la sucursal " + sucursal.nombreSucursal);
    });
  }
}
