import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeekABooParentComponent } from './peek-aboo-parent/peek-aboo-parent.component';
import { PeekABooComponent } from './peek-aboo/peek-aboo.component';
import { PeekABooDirective } from './peek-aboo.directive';
import { SpyComponent } from './spy/spy.component';
import { SpyDirective } from './spy.directive';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { OnChangesComponent } from './on-changes/on-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    PeekABooParentComponent,
    PeekABooComponent,
    PeekABooDirective,
    SpyComponent,
    SpyDirective,
    OnChangesParentComponent,
    OnChangesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
