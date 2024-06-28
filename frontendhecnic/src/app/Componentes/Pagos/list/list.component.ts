import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: true,
  imports: [ SharedModule ]
})
export class ListComponent {
  @Input() changeMode!: (message: string) => void;

  
}
