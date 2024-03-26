import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
    <h4>{{ name }}</h4>
    <button type="button" (click)="vote(true)" [disabled]="didVote">
      Agree
    </button>
    <button type="button" (click)="vote(false)" [disabled]="didVote">
      DisAgree
    </button>
  `,
  styleUrl: './voter.component.css',
})
export class VoterComponent {
  @Input() name = '';
  @Output() voted = new EventEmitter<boolean>();
  private _didVote = false;
  get didVote() {
    return this._didVote;
  }
  set didVote(value: boolean) {
    this._didVote = value;
  }

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
