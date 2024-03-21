import { Directive, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

let nextId = 1;

@Directive({
  selector: '[appPeekABoo]',
})
export class PeekABooDirective implements OnInit {
  constructor(private logger: LoggerService) {}

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }

  ngOnInit() {
    this.logIt('OnInit');
  }
}
