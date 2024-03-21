import { Component, ViewChild } from '@angular/core';
import { Hero } from '../hero.modal';
import { DoCheckComponent } from './do-check/do-check.component';

@Component({
  selector: 'app-do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styleUrl: './do-check-parent.component.css'
})
export class DoCheckParentComponent {
  hero!:Hero;
  power = "";
  title="DoCheck";
  @ViewChild(DoCheckComponent) childView!:DoCheckComponent;

  constructor(){
    this.reset();
  }

  reset(){
    this.hero = new Hero('Windstrom');
    this.power = "sing";
    if(this.childView){
      this.childView.reset();
    }
  }
}
