import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrl: './counter-parent.component.css',
  providers: [LoggerService],
})
export class CounterParentComponent {
  value = 0;
  spyLog: Array<string> = [];
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.spyLog = logger.logs;
    this.reset();
  }

  updateCounter() {
    this.value += 1;
    this.logger.tick();
  }

  reset() {
    this.logger.log('reset');
    this.value = 0;
    this.logger.tick();
  }
}
