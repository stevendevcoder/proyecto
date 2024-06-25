import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.css',
  standalone: true,
  imports: [SharedModule]
})
export class HomeClienteComponent { 
  constructor(private router:Router) {
    
  }

  Salir(){
    this.router.navigate(['inicio']);
  }

}
