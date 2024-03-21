import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-peek-aboo-parent',
  templateUrl: './peek-aboo-parent.component.html',
  styleUrl: './peek-aboo-parent.component.css',
  providers: [LoggerService],
})
export class PeekABooParentComponent {
  hasChild: boolean = false;
  hookLog: string[] = [];
  heroName: string = 'Hsengiv';
  private logger: LoggerService;
  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Hsengiv';
      this.logger.clear();
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }
}
