import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown-parent-lv',
  template: `
    <h3>Countdown to Liftoff (via local variable)</h3>
    <button type="button" (click)="timer.start()">Start</button>
    <button type="button" (click)="timer.stop()">Stop</button>
    <div>{{ timer.seconds }}</div>
    <app-countdown-timer #timer></app-countdown-timer>
  `,
  styleUrl: './countdown-parent-lv.component.css',
})
export class CountdownParentLvComponent {}
