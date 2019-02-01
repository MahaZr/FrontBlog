import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import{NgForm}from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail :string;
  pwd:string;
  public new;
  public user ={};

  constructor(private logUser:LoginService) { }

  ngOnInit() {
  }

  loginUser(){
    
    console.log(this.user);
    this.logUser.ApiLogin(this.user).subscribe(res=>{
           localStorage.setItem('token',res.json().token);
          console.log(res.json().token);
          console.log(res.json().message);
      })
}

}

