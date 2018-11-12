import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeoresComponent } from './heores/heores.component';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemDirective } from './item.directive';

@NgModule({
  // These components are to be solely used in the module unless they are exported and imported.
  declarations: [
    AppComponent,
    HeoresComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ItemDirective,
  ],
  // This particular modules should function properly
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
