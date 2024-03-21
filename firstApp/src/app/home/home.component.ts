import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { NgFor } from '@angular/common';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, HousingLocationComponent, ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
      <section class="results">
        <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
      </section>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
 

  housingLocationList: HousingLocation[] = [];
  filteredLocationList:HousingLocation[] = [];
  housingService:HousingService   = inject(HousingService);
    // ngOnInit(){
  //   this.housingLocationList = this.HousingService.getAllHousingLocations();
  // }

  // constructor(private  HousingService:HousingService){}

  constructor(){
   this.housingService.getAllHousingLocations().then((housingLocationList:HousingLocation[])=>{
    this.housingLocationList = housingLocationList;
    this.filteredLocationList = housingLocationList;
   });
  
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
  
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
