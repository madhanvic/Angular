import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aliasing',
  standalone: true,
  imports: [],
  templateUrl: './aliasing.component.html',
  styleUrl: './aliasing.component.css',
  inputs: ['input1:saveForLaterItem'],
  outputs: ['outputEvent1:saveForLaterEvent'],
})
export class AliasingComponent {
  input1 = '';
  outputEvent1: EventEmitter<string> = new EventEmitter<string>();
  @Input('wishListItem') input2 = '';
  @Output('wishEvent') outputEvent2 = new EventEmitter<string>();
  saveIt() {
    console.warn('Child says: emitting outputEvent1 with ' + this.input1);
    this.outputEvent1.emit(this.input1);
  }
  wishForIt() {
    console.warn('Child says: emitting outputEvent2  ' + this.input2);
    this.outputEvent2.emit(this.input2);
  }
}
