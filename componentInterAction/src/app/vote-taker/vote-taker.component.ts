import { Component } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{ agreed }}, Disagree: {{ disagreed }}</h3>
    <ng-template ngFor let-voter [ngForOf]="voters">
      <app-voter [name]="voter" (voted)="onVoted($event)"></app-voter>
    </ng-template>
  `,
  styleUrl: './vote-taker.component.css',
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters: Array<string> = ['Dr. IQ', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean) {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }
}
