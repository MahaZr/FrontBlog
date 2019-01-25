import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NavbarComponent } from './shared/userInterfaces/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavbarComponent,
    
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
