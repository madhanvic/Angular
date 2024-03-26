import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { ZippyNgprojectsasComponent } from './zippy-ngprojectsas/zippy-ngprojectsas.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ZippyToggleDirective } from './zippy-toggle.directive';
import { ZippyContentDirective } from './zippy-content.directive';

@NgModule({
  declarations: [
    AppComponent,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ZippyNgprojectsasComponent,
    ZippyComponent,
    ZippyToggleDirective,
    ZippyContentDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
