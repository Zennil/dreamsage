import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  friends: User[] = [];

  friendId: string;
  friend: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.friendId = this.activatedRoute.snapshot.params.uid;

    this.friend = this.userService.getFriends().find(user => user.uid === this.friendId);

    console.log(this.friend);
  }

  ngOnInit() {
  }

}
