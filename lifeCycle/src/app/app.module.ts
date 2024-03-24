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
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { DoCheckComponent } from './do-check-parent/do-check/do-check.component';
import { AfterViewParentComponent } from './after-view-parent/after-view-parent.component';
import { AfterViewComponent } from './after-view-parent/after-view/after-view.component';
import { ChildViewComponent } from './after-view-parent/after-view/child-view/child-view.component';
import { AfterContentParentComponent } from './after-content-parent/after-content-parent.component';
import { AfterContentComponent } from './after-content-parent/after-content/after-content.component';
import { ChildComponent } from './after-content-parent/child/child.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
import { CounterComponent } from './counter-parent/counter/counter.component';

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
    DoCheckParentComponent,
    DoCheckComponent,
    AfterViewParentComponent,
    AfterViewComponent,
    ChildViewComponent,
    AfterContentParentComponent,
    AfterContentComponent,
    ChildComponent,
    CounterParentComponent,
    CounterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
