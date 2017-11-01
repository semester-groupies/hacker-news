import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "./models/item";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  private URL = 'http://www.favl.dk:8080/';

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
    const currentPass = JSON.parse(localStorage.getItem('currentPass'));
    const pObject = {
      'username': currentUser,
      'post_type': postObject['type'],
      'pwd_hash': currentPass,
      'post_title': postObject['title'],
      'post_url': postObject['url'],
      'post_parent': postObject['post_parent'],
      'hanesst_id': 0,
      'post_text': postObject['text']
    };
    console.log(pObject);
    return this.http.post(this.URL + 'post/postItem', pObject);
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

  public getItem(id: any): Promise<Item> {
    return this.http.get(this.URL + `item/${id}`)
      .toPromise()
      .then((res: Response) => res)
      .catch(this.handleError);
  }
}
