import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Inmueble } from '../../../Modelo/Inmueble';
import { InmuebleService } from '../../../Service/inmueble.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class ListComponent {
  inmuebles: Inmueble[] = [];

  @Input() changeMode!: (type: string) => void;

  constructor(private service: InmuebleService){
    
  }

  ngOnInit(){
    this.loadInmuebles();
  }

  loadInmuebles(){
    this.service.getInmuebles().subscribe(data => {
      this.inmuebles = data;
    });
  }

  convertImg(imagen: Blob){
    return URL.createObjectURL(imagen);
  }

  Edit(inmueble: Inmueble) {  
    localStorage.setItem("id",inmueble.idInmueble.toString());
    this.changeMode('edit');
  }

  Delete(inmueble: Inmueble) {
    this.service.deleteInmueble(inmueble).subscribe(() => {
      this.loadInmuebles(); // Recargar la lista después de eliminar
      console.log("Eliminamos al inmueble " + inmueble);
    });
  }
  
}
