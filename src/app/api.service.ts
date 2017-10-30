import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiService {

  private URL = 'http://www.favl.dk:8080/';

  public createUser(userObject) {
    // this.http.post('url', 'body', 'options');
    return this.http.post(this.URL + 'user/create', userObject);
  }


  public loginUser(userObject) {
    // this.http.post('url', 'body', 'options');
    return this.http.post(this.URL + 'user/login', userObject);
  }

  public post(postObject) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const pObject = {
      'username': currentUser.username,
      'post_type': postObject['type'],
      'pwd_hash': currentUser.password,
      'post_title': postObject['title'],
      'post_url': postObject['url'],
      'post_parent': -1,
      'hanesst_id': 21,
      'post_text': postObject['text'],
    };
    return this.http.post(this.URL + 'post', pObject);


  }

  constructor(private http: HttpClient) {

  }

}
