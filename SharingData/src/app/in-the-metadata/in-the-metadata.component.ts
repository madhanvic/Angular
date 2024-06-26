import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-in-the-metadata',
  standalone: true,
  imports: [],
  templateUrl: './in-the-metadata.component.html',
  styleUrl: './in-the-metadata.component.css',
  inputs: ['clearanceItem'],
  outputs: ['buyEvent'],
})
export class InTheMetadataComponent {
  buyEvent = new EventEmitter<string>();
  clearanceItem = '';

  buyIt() {
    console.warn('Child says: emitting buyEvent with ' + this.clearanceItem);
    this.buyEvent.emit(this.clearanceItem);
  }
}
