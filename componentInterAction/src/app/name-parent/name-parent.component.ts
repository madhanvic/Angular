import { Component } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template:  `
   <h2>Master controls {{names.length}} names </h2>
   <app-name-child *ngFor="let name of names" [name]="name"></app-name-child>
  `,
  styleUrl: './name-parent.component.css'
})
export class NameParentComponent {
  names = ["Dr. IQ", "  ", "   Bombasto  "];
}
