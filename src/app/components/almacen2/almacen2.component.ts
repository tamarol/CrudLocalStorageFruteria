import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almacen2',
  templateUrl: './almacen2.component.html',
  styleUrls: ['./almacen2.component.css']
})
export class Almacen2Component implements OnInit {
  username: string = ''
  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('user');
  }

}
