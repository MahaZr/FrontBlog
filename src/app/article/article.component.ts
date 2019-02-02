import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/services/blog.service';
import { ActivatedRoute, ParamMap } from '@angular/router'



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public idArt = "";
  public art;
  public status = false;
  constructor(private article: BlogService, private routes: ActivatedRoute) { }

  ngOnInit() {
    //let id = this.routes.snapshot.paramMap.get('id');
    this.routes.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.idArt = id;
    });


    this.article.listerArts(this.idArt).subscribe(file => {
      this.art = file;
      console.log(this.idArt);
      console.log(file);
      this.status = true;
    }, err => console.log(err))
  };
  // loadarticle(){
  //   this.article.listerArts(this.idArt).subscribe(file=>{
  //       this.art=file.json();
  //       console.log(file.json());
  //   })
  // }

}
