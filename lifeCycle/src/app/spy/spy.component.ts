import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrl: './spy.component.css',
  providers: [LoggerService],
})
export class SpyComponent {
  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];

  constructor(public logger: LoggerService) {}

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }

  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.newName = '';
    this.logger.tick();
  }

  reset() {
    this.logger.log('reset');
    this.heroes = [];
    this.logger.tick();
  }
}
