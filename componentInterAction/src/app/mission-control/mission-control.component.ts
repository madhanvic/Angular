import { Component } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-mission-control',
  template: `
    <h2>Mission Control</h2>
    <button type="button" (click)="announce()">Announce mission</button>
    <app-astronaut
      *ngFor="let astronaut of astronauts"
      [astronaut]="astronaut"
    ></app-astronaut>
    <h3>Histroy</h3>
    <ul>
      <li *ngFor="let event of histroy">{{ event }}</li>
    </ul>
  `,
  styleUrl: './mission-control.component.css',
  providers: [MissionService],
})
export class MissionControlComponent {
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  histroy: string[] = [];
  missions = ['Fly to the moon', 'Fly to mars!', 'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfrimed$.subscribe((astronaut) => {
      this.histroy.push(`${astronaut} confrimed the mission`);
    });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.histroy.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
