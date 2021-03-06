import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  constructor(private http: Http) {
    console.log('Post Service Initialized!');
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(response => response.json());
  }
}
