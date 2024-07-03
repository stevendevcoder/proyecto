import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { EstudioRiesgo } from '../../../Modelo/EstudioRiesgo';
import { EstudioDeRiesgoService } from '../../../Service/estudioriesgo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class ListComponent {
  @Input() changeMode!: (message: string) => void; 
  @Input() filtro!: string; 
  estudios: EstudioRiesgo[] = []

  constructor(private estudioDeRiesgoService: EstudioDeRiesgoService) { }

  ngOnInit(): void {
    this.loadEstudios();
  }

  loadEstudios(): void {
    this.estudioDeRiesgoService.getEstudios().subscribe(
      data => {
        let palabra = this.capitalizarPrimeraLetra(this.filtro);
        this.estudios = data.filter(e => e.estado == palabra);
      },
      error => {
        console.log('Error loading estudios:', error);
      }
    );
    console.log(this.estudios);
  }

  addEstudio(estudio: EstudioRiesgo): void {
    this.estudioDeRiesgoService.createEstudio(estudio).subscribe(
      data => {
        this.estudios.push(data);
      },
      error => {
        console.log('Error adding estudio:', error);
      }
    );
  }

  updateEstudio(estudio: EstudioRiesgo): void {
    this.estudioDeRiesgoService.updateEstudio(estudio.id_estudio, estudio).subscribe(
      data => {
        const index = this.estudios.findIndex(e => e.id_estudio === estudio.id_estudio);
        if (index !== -1) {
          this.estudios[index] = data;
        }
      },
      error => {
        console.log('Error updating estudio:', error);
      }
    );
  }

  deleteEstudio(id: number): void {

    this.estudioDeRiesgoService.deleteEstudio(id).subscribe(
      () => {
        this.estudios = this.estudios.filter(e => e.id_estudio !== id);
      },
      error => {
        console.log('Error deleting estudio:', error);
      }
    );
  }

  capitalizarPrimeraLetra(cadena: string): string {
    if (!cadena || cadena.length < 2) return cadena;
    return cadena.charAt(0).toUpperCase() + cadena.slice(1, -1);
  }

  imprimir = (_estudio: EstudioRiesgo)=>console.log(_estudio, " ", _estudio.estado);
}
