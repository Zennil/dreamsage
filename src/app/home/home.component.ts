import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    const myUSer: User = {
      nick: 'Armando',
      age: 24,
      email: 'sze@gmail.com',
      friend: true,
      uid: 1
    };
    const users: User[] = [
      myUSer
    ];
  }

  ngOnInit() {
  }

}
