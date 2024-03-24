import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent implements OnChanges {
  @Input() counter = 0;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (this.counter === 0) {
      this.changeLog = [];
    }

    const chng = changes['counter'];
    const cur = chng.currentValue;
    const prev = JSON.stringify(chng.previousValue);
    this.changeLog.push(
      `Counter: currentValue = ${cur}, previousValue = ${prev}`
    );
  }
}
