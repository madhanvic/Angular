import {
  Component,
  Input,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
import { LoggerService } from '../logger.service';
import { PeekABooDirective } from '../peek-aboo.directive';

@Component({
  selector: 'app-peek-aboo',
  templateUrl: './peek-aboo.component.html',
  styleUrl: './peek-aboo.component.css',
})
export class PeekABooComponent
  extends PeekABooDirective
  implements
    OnChanges,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() name: string = '';
  private verb: string = 'Initialized';
  constructor(logger: LoggerService) {
    super(logger);

    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

  ngOnChanges(changes: SimpleChanges) {
    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === 'name') {
        const name = changes['name'].currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      } else {
        changesMsgs.push(propName + ' ' + this.verb);
      }
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'changed';
  }

  ngDoCheck() {
    this.logIt('DoCheck');
  }

  ngAfterContentInit() {
    this.logIt('AfterContentInit');
  }

  ngAfterContentChecked() {
    this.logIt('AfterContentChecked');
  }

  ngAfterViewInit() {
    this.logIt('AfterViewInit');
  }

  ngAfterViewChecked() {
    this.logIt('AfterViewChecked');
  }
  ngOnDestroy() {
    this.logIt('OnDestroyed');
  }
}
