import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HorrorComponent } from './landing/horror/horror.component';
import { BookMovieComponent } from './book-movie/book-movie.component';

const routes: Routes = [
{path:'', component:LandingComponent},
{path:'horror', component:HorrorComponent },
{path:'bookmovie', component:BookMovieComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
