import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiService {

  private URL = 'http://www.favl.dk:8080/';

  public createUser(userObject) {
    //this.http.post('url', 'body', 'options');
    return this.http.post(this.URL + 'user/create', userObject);
  }

  public post(postObject) {
    return this.http.post(this.URL + 'post', postObject);

  }

  constructor(private http: HttpClient) {

  }

}
