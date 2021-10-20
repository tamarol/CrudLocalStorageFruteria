import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  user = {
    username: localStorage.getItem('user')
  }
  
  constructor(private router: Router) { }

  ngOnInit() {}


  jugar(): void {
    localStorage.setItem('user',this.user.username);
  }

}
