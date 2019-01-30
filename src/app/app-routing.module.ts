import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import{RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    //path: 'article', component: ArticleComponent
    path:'register', component: RegisterComponent
  },
  {
    //path: '**', redirectTo: 'article'
    path:'**' , redirectTo: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
