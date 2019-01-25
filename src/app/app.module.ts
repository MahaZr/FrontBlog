import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Http,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
