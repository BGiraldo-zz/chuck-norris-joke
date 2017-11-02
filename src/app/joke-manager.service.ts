import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/delay';

@Injectable()
export class JokeManagerService {

  url = 'https://api.chucknorris.io/jokes/random';

  constructor(private httpClient: HttpClient) { }

  getJoke(): Observable<String> {
    return this.httpClient.get(this.url).pluck('value');
  }
}

