import { UserService } from './../user.service';
import { GuardService } from './../../auth/guard.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  _user = new User('', '', 'defualt');
  constructor(private _guardService: GuardService, private _userService: UserService) { }
  topicx = ['Web aplactio', 'ooad', 'linux'];
  ngOnInit() {
  }
  topicErrors = true;
  validateTopic(value) {
    if (value === 'defualt') {
      this.topicErrors = true;
    } else {
      this.topicErrors = false;
    }

  }
  onSubmit() {
    this._userService.getLogin(this._user)
  .subscribe(
    data => console.log('Sucess', data),
    error => console.log('errors', error)
  )
  }
}
