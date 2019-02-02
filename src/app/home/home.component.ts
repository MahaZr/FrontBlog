import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeServ : HomeService, private routes : Router) { }
public articles;
  ngOnInit() {

    this.homeServ.home('all').subscribe(file=>{
      this.articles=file.json();
      console.log(file.json());
  })

  }
  onSelect(art){

    this.routes.navigate(['/article',art._id]) 

  }

}
