import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {
  username: string = ''
  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('user');
  }

}
