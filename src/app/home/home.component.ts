import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeServ : HomeService) { }
public articles;
  ngOnInit() {

    this.homeServ.home('all').subscribe(file=>{
      this.articles=file.json();
      console.log(file.json());
  })

  }

}
