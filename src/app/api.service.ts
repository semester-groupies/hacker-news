import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "./models/item";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  private URL: string = 'http://www.favl.dk:8080/';

  constructor(private http: HttpClient) {
  }

  public createUser(userObject) {
    //this.http.post('url', 'body', 'options');
    return this.http.post(this.URL + 'user/create', userObject);
  }

  public loginUser(userObject) {
    //this.http.post('url', 'body', 'options');
    return this.http.post(this.URL + 'user/login', userObject);
  }

  public post(postObject) {
    return this.http.post(this.URL + 'post', postObject);
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
}
