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
email :string;
pwd:string;
public new;
  constructor(private regUser:RegisterService) { }

  ngOnInit() {

  }


  registerUser(){
    const user = {
      name : this.nom,
      lastname:this.prenom,
      email : this.email,
      password:this.pwd
    };
   console.log(user);
    this.regUser.ApiRegister(user).subscribe(file=>{
          this.new=file.json();
          console.log(file.json());
      })

  //}
}
}

