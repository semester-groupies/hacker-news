import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username_login: string;
  public username_register: string;
  public password_login: string;
  public password_register: string;

  constructor(private api: ApiService, private router: Router) {
  }

  public loginUser() {
    const user = {
      "username": this.username_login,
      "password": this.password_login
    };

    this.api.loginUser(user).subscribe((res) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/feed']);
    });
  }

  public createUser() {
    const user = {
      "username": this.username_register,
      "password": this.password_register
    };

    this.api.createUser(user).subscribe((res) => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/feed']);
    });
  }

  ngOnInit() {
  }

}
