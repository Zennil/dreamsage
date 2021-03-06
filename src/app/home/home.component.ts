import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  query: string;

  friends: User[] = [];

  constructor(private userService: UserService) {
    this.friends = this.userService.getFriends();
  }

  ngOnInit() {
  }

}
