import {
  Component,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
} from '@angular/core';
import { ChildViewComponent } from './child-view/child-view.component';
import { LoggerService } from '../../logger.service';

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrl: './after-view.component.css',
})
export class AfterViewComponent implements AfterViewInit, AfterViewChecked {
  comment = '';
  private prevHero = '';

  @ViewChild(ChildViewComponent) viewChild!: ChildViewComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterView constructor');
  }

  ngAfterViewInit(): void {
    this.logIt('AfterViewInit');
    this.doSomething();
  }

  ngAfterViewChecked(): void {
    if (this.prevHero === this.viewChild.hero) {
      this.logIt('After View Checked (no change)');
    } else {
      this.prevHero = this.viewChild.hero;
      this.logIt('AfterViewChecked');
      this.doSomething();
    }
  }

  private doSomething() {
    const c = this.viewChild.hero.length > 10 ? "That's a long name" : '';
    if (c !== this.comment) {
      this.logger.tick_then(() => (this.comment = c));
    }
  }

  private logIt(method: string) {
    const child = this.viewChild;
    const message = `${method}: ${child ? child.hero : 'no'} child view`;
    this.logger.log(message);
  }
}
