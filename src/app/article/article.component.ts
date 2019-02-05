import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/services/blog.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommentaireService } from '../shared/services/commentaire.service';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public idArt = "";
  public art;
  public status = false;
  public idUser;
  
  constructor(private article: BlogService, private comment: CommentaireService,  private routes: ActivatedRoute, private rt : Router) { }

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

    /*this.comment.commentaire(this.idArt).subscribe(file => {
      this.comment = file;
   */
    };

  onSelect(aut){

    this.rt.navigate(['/artbyaut',aut]); 

  }

}





