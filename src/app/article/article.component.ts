import { Component, OnInit } from '@angular/core';
import{BlogService} from '../shared/services/blog.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
 public idArt="5c47724f93ffbf0d241c2dd9";
 public art;
  constructor(private article:BlogService) { }

  ngOnInit() {
    this.article.listerArts(this.idArt).subscribe(file=>{
      this.art=file.json();
      console.log(this.idArt);
      console.log(file.json());
  })
  };
  loadarticle(){
    this.article.listerArts(this.idArt).subscribe(file=>{
        this.art=file.json();
        console.log(file.json());
    })
  }

}
