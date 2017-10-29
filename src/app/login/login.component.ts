import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(private api: ApiService) {
  }

  public createUser() {
    console.log('::user creation:: ');
    let user = {
      "username": this.username,
      "password": this.password
    };

    this.api.createUser(user).subscribe((res) => {
      console.log('user created: ', res);
    });
  }

  ngOnInit() {
  }

}
