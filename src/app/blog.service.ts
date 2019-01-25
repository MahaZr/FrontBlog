import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { timingSafeEqual } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:Http) {  }
  public listerArts(idAut:string){
    return this.http.get('localhost:3001/article/listerArts/' + idAut);
  }
}
