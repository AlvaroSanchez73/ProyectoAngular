import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  contactos: any[] = [];
  constructor() { }

  ngOnInit() {
  }

  addUser(){
    this.contactos.push({});
  }

  removeUser(i){
    this.contactos.splice(i, 1);    
  }

}
