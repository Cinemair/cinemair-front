import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'page-home',
  templateUrl: 'movies.html',
  providers: [ ApiService ]
})
export class MoviesPage {

  constructor(
    public navCtrl: NavController,
    private apiService: ApiService
  ) {
    this.currentMovies();
  }

  public movies;

  public currentMovies = () => {
    this.apiService.getMovies()
    .subscribe((movies) => {
      this.movies = movies
    });
  }

}
