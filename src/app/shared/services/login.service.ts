import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }
  public ApiLogin(user){
    return this.http.post('http://localhost:3001/login/login', user)
  }
}
