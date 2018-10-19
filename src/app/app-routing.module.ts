import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HeoresComponent } from './heores/heores.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeoresComponent },
  { path: 'dashboard', component: DashboardComponent}
];


@NgModule({

  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]

})



export class AppRoutingModule {



}


