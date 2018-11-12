import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HeoresComponent } from './heores/heores.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeoresComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent}
];


@NgModule({

  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]

})



export class AppRoutingModule {



}


