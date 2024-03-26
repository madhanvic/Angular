import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-ngprojectsas',
  template: `
    <h2>Content projection with ngProjectAs</h2>

    Default:
    <ng-content></ng-content>

    Question:
    <ng-content select="[question]"></ng-content>
  `,
  styleUrl: './zippy-ngprojectsas.component.css',
})
export class ZippyNgprojectsasComponent {}
