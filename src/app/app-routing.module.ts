import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HeoresComponent } from './heores/heores.component';

const routes: Routes = [
  { path: 'heroes', component: HeoresComponent }
];


@NgModule({

  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]

})



export class AppRoutingModule {



}


