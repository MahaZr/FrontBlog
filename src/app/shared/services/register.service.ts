import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: Http) {}
  public ApiRegister(nom,prenom,email,pwd){
    return this.http.post('http://localhost:3001/register/register', {

    name : nom,
    lastname : prenom,
    email : email,
    password : pwd

    });
  }
}
