import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-basic',
  template: `
    <h2>Single-slot content projection</h2>
    <ng-content></ng-content>
  `,
  styleUrl: './zippy-basic.component.css',
})
export class ZippyBasicComponent {}
