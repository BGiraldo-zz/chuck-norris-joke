import { Observable } from 'rxjs/Observable';
import { JokeManagerService } from './joke-manager.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  joke$: Observable<String>;
  imageUrl: String;

  constructor(private jokeManagerService: JokeManagerService) {
    this.imageUrl = 'http://3.bp.blogspot.com/_OwFY3kmzWj0/SyPuwBwRZ4I/AAAAAAAAAXo/Of1Fx-ScTTI/s400/chucknorris1.png';
    this.obtainJoke();
    setInterval(() => this.obtainJoke(), 6000);
  }

  obtainJoke() {
    this.joke$ = this.jokeManagerService.getJoke();
  }

}
