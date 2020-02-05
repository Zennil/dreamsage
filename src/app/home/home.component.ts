import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  friends = [
    { nick: 'Eduardo', subnick: 'Mi mensaje personal', status: 'online', age: 28, email: 'eduardo@platzi.com', friend: true },
    { nick: 'Yuliana', subnick: 'Mi mensaje personal', status: 'busy', age: 25, email: 'yuliana@platzi.com', friend: true },
    { nick: 'Freddy', subnick: 'Mi mensaje personal', status: 'away', age: 28, email: 'freddy@platzi.com', friend: false }
  ];

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
