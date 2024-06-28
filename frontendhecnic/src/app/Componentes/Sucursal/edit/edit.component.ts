import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sucursal-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  standalone: true
})
export class EditComponent {
  @Input() changeMode!: (type: string, form: Boolean) => void;

}
