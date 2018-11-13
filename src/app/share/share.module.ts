import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemDirective} from '../item.directive';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MessagesComponent} from '../messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    ItemDirective,
    MessagesComponent
  ],

  exports: [
    ItemDirective,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MessagesComponent
  ]
})
export class ShareModule { }
