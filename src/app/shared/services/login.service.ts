import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }
  public ApiLogin(user){
    return this.http.post('http://localhost:3001/auth/login', user);
  }
  public loggedIn(){
    return !!localStorage.getItem('token');
  }
  public logout(){
    localStorage.removeItem('token');
  }
  public getToken(){
    return localStorage.getItem('token');
  }
  
}
