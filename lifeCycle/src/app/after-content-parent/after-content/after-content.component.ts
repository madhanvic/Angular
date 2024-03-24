import {
  Component,
  ContentChild,
  AfterContentInit,
  AfterContentChecked,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { LoggerService } from '../../logger.service';

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrl: './after-content.component.css',
})
export class AfterContentComponent
  implements AfterContentInit, AfterContentChecked
{
  private prevHero = '';
  comment = '';

  @ContentChild(ChildComponent) contentChild!: ChildComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterContent Constructor');
  }

  ngAfterContentInit() {
    this.logIt('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no Change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  private doSomething() {
    this.comment =
      this.contentChild.hero.length > 10 ? "That's a long name" : '';
  }

  private logIt(method: string) {
    const child = this.contentChild;
    const message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }
}
