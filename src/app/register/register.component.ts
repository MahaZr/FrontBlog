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

user ={};
public new;

  constructor(private regUser:RegisterService) { }
 
  ngOnInit() {

  }


  registerUser(){
   
   console.log(this.user);
    this.regUser.ApiRegister(this.user).subscribe(file=>{
          this.new=file.json();
          console.log(file.json());
      })

  //}
}
}

