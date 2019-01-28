import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/Http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NavbarComponent } from './shared/userInterfaces/navbar/navbar.component';
import { BlogService } from './shared/services/blog.service';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
