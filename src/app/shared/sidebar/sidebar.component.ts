import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li:hover{
      cursor: pointer;
      background-color: lightgray;
      border: lightgray;
      color: black;
    }
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
