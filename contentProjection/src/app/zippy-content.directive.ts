import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appZippyContent]',
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
