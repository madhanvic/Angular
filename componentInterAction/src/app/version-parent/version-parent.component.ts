import { Component } from '@angular/core';

@Component({
  selector: 'app-version-parent',
 template:`
 <h2>Source Code Version</h2>
 <button type="button" (click)="newMinor()">New minor version</button>
 <button type="button" (click)="newMajor()">New major version</button>
 <app-version-child [major]="major" [minor]="minor"></app-version-child>
 `,
  styleUrl: './version-parent.component.css'
})
export class VersionParentComponent {
  major = 1;
  minor = 23;
  newMinor(){
    this.minor++;
  }
  newMajor(){
    this.major++;
    this.minor = 0;
  }
}
