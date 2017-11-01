import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public loggedUser: boolean;

  public isLoggedIn() {
    return this.loggedUser = (localStorage.getItem('currentUser') != null);
  }

  public logoutUser() {
    if (this.isLoggedIn()) {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('currentPass');
    }
  }
  get user(): any {
    return localStorage.getItem('currentUser').replace(/^"(.*)"$/, '$1');
  }
}
