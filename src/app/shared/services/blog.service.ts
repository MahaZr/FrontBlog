import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:Http) {  }
  public listerArts(idArt:string){
    return this.http.get('http://localhost:3001/article/consulterArt/'+idArt);
    
  }
}
 