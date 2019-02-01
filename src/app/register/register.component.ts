import { Component, OnInit } from '@angular/core';
import{RegisterService} from '../shared/services/register.service';



  
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
    var user = {
      name : this.nom,
      lastname:this.prenom,
      email : this.mail,
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

