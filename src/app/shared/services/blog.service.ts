import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:Http) {  }
<<<<<<< HEAD
  public listerArts(idAut:string){
    return this.http.get('http://localhost:3001/article/listerArts/' + idAut);
=======
  public listerArts(idArt:string){
    return this.http.get('http://localhost:3001/article/consulterArt/'+idArt);
    
>>>>>>> 6e07d3236053b7231adee90808e1ea0870701688
  }
}
 