import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeoresComponent } from './heores/heores.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShareModule } from './share/share.module';

@NgModule({
  // These components are to be solely used in the module unless they are exported and imported.
  declarations: [
    AppComponent,
    HeoresComponent,
    HeroDetailComponent,
    DashboardComponent,
  ],
  // This particular modules should function properly
  imports: [
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
