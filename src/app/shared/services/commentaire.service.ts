import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: Http) {}
    public commentaire(Art){
      return this.http.get('http://localhost:3001/ajoutComment/:idUser/:idArt');
      
    }
   }
  
