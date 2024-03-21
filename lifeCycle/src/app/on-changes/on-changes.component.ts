import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Hero } from '../hero.modal';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrl: './on-changes.component.css',
})
export class OnChangesComponent implements OnChanges {
  @Input() hero!: Hero;
  @Input() power = '';

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }

  reset() {
    this.changeLog = [];
  }
}
