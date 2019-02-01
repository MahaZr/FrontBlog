import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import{RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import { NavbarComponent } from './shared/userInterfaces/navbar/navbar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'article', component: ArticleComponent },
  {path:'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  {path:'nav',component:NavbarComponent},
  {path:'home',component:HomeComponent}
  /*{
     path: '', redirectTo: 'home'
  //   //path:'**' , redirectTo: 'register'
  //   path:'', redirectTo: 'login'
   }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ArticleComponent, RegisterComponent, LoginComponent,NavbarComponent]
