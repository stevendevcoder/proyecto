
import { ChangeDetectorRef, Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ListComponent  as ListPersonaComponent} from '../../Componentes/Persona/list/list.component';
import { AddComponent as AddPersonaComponent} from '../../Componentes/Persona/add/add.component';
import { EditComponent as EditPersonaComponent} from '../../Componentes/Persona/edit/edit.component';
import { ListComponent  as ListSucursalComponent} from '../../Componentes/Sucursal/list/list.component';
import { AddComponent as AddSucursalComponent} from '../../Componentes/Sucursal/add/add.component';
import { EditComponent as EditSucursalComponent} from '../../Componentes/Sucursal/edit/edit.component';


@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrl: './home-administrador.component.css',
  standalone: true,
  imports: [
    SharedModule,
    ListPersonaComponent,
    AddPersonaComponent,
    EditPersonaComponent,
    ListSucursalComponent,
    AddSucursalComponent,
    EditSucursalComponent,
  ],
})

export class HomeAdministradorComponent{
  formPersonas: string = 'list';
  formSucursales: string = 'list';

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
  }

  changeMode = (type: string, form: boolean) => {
    if (form) {
      if(type == 'cancel') {
        this.formPersonas = 'list';
        return;
      }

      if(this.formPersonas == 'edit' && type == 'add') {
        alert("Primero termina de editar la persona");
        return;
      }
      this.formPersonas = type;
      console.log('formPersonas ahora es:', this.formPersonas);
    } else {
      if(type == 'cancel') {
        this.formSucursales = 'list';
        return;
      }

      if(this.formSucursales == 'edit' && type == 'add') {
        alert("Primero termina de editar la sucursal");
        return;
      }
      this.formSucursales = type;
      console.log('formSucursales ahora es:', this.formSucursales);
    }
    this.cdr.detectChanges(); // Forzar la detección de cambios
  }
  Salir(){
    this.router.navigate(['inicio']);
  }
}
