import { JokeManagerService } from './joke-manager.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [JokeManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
