import { Component, ContentChild, Input } from '@angular/core';
import { ZippyContentDirective } from '../zippy-content.directive';
let nextId = 0;
@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css',
})
export class ZippyComponent {
  contentId = `zippy-${nextId++}`;
  @Input() expanded = false;
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
}
