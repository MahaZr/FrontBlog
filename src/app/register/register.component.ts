import { Component, OnInit } from '@angular/core';
import{RegisterService} from '../shared/services/register.service';

import{NgForm}from '@angular/forms';

  
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
nom :string;
prenom:string;
mail :string;
pwd:string;

users = {
  name : this.nom,
  lastname:this.prenom,
  email : this.mail,
  password:this.pwd
};
public new;
  constructor(private regUser:RegisterService) { }

  ngOnInit() {

  }


  registerUser(){
    
  
    this.regUser.ApiRegister(this.nom, this.prenom, this.mail, this.pwd).subscribe(file=>{
          this.new=file.json();
          console.log(file.json());
      })

  //}
}
}

