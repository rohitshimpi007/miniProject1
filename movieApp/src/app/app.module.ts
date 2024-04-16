import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {  HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HorrorComponent } from './landing/horror/horror.component';
import { BookMovieComponent } from './book-movie/book-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchPipe,
    HorrorComponent,
    BookMovieComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
