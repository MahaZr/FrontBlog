import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: Http) {}
    public addComment(iduser, idarticle, corp){
      return this.http.post('http://localhost:3001/article/ajoutComment/'+ iduser +'/'+ idarticle,corp);
      
    }
   }
  
