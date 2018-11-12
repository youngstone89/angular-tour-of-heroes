import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HeoresComponent } from './heores/heores.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {CustomersModule} from './customers/customers.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeoresComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},
  { path: 'orders', loadChildren: './orders/orders.module#OrdersModule'}
];


@NgModule({

  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]

})



export class AppRoutingModule {



}


