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

  constructor(private logUser:LoginService) { }

  ngOnInit() {
  }

  loginUser(){
    var user = {
      email :this.mail,
      password :this.pwd
    };
    console.log(user);
    this.logUser.ApiLogin(user).subscribe(file=>{
           this.new=file.json();
          console.log(this.new);
      })
}

}

