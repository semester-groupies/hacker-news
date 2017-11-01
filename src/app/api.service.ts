import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "./models/item";
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApiService {

  // private URL = 'http://www.favl.dk:8080/';
  private URL = 'http://localhost:8090/';

  constructor(private http: HttpClient) {
  }

  public createUser(userObject) {
    // this.http.post('url', 'body', 'options');
    return this.http.post(this.URL + 'user/register', userObject);
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

  public getStories(): Promise<Item[]> {
    return this.http.get(this.URL + 'stories')
      .toPromise()
      .then((res: Response) => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  public getItem(id: any): Observable<Item> {
    return this.http.get(this.URL + `item/${id}`);
  }
}
