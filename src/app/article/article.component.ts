import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/services/blog.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommentaireService } from '../shared/services/commentaire.service';
import { LoginService } from '../shared/services/login.service';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public idArt = "";
  public art;
  public status = false;
  public corp:string;
  public corpss = { corps : ""};
  public comments;
  public user;
  public userName;
  public idcomment;
  constructor(private article: BlogService, private comment: CommentaireService,  private routes: ActivatedRoute, private rt : Router, private auth : LoginService) { }

  ngOnInit() {
    //let id = this.routes.snapshot.paramMap.get('id');
    this.routes.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.idArt = id;
      this.user = this.auth.getUser();
      console.log(this.user);
      console.log(this.idArt);
    });


    this.article.listerArts(this.idArt).subscribe(file => {
      this.art = file;
      console.log(this.idArt);
      console.log(file);
      
      this.status = true;
    }, err => console.log(err));


    this.comment.listerComment(this.idArt ).subscribe(file => {
      this.comments = file;
      console.log(file);
    });
    

  

}
onSelect(aut){

  this.rt.navigate(['/artbyaut',aut]); 

}

submit(){

  this.userName = this.user.user.name + ' '+this.user.user.lastname ;
  this.corpss.corps= this.corp;
  this.comment.addComment(this.userName,this.idArt,this.corpss).subscribe(file => {
    console.log(file);
    console.log(this.corpss);
    this.listercomments();
 
  });
}

listercomments(){

  this.comment.listerComment(this.idArt ).subscribe(file => {
  this.comments = file;
  console.log(file);

});

}

delete(){
  this.comment.deleteComment(this.idcomment,this.user.user._id ).subscribe(file => {
  this.comments = file;
  console.log(file);
  });
}

update(){
  this.comment.updateComment(this.user.user._id,this.idcomment).subscribe(file => {
    this.comments =file;
    console.log(file);
  })
}

}





