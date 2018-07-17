import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ ApiService ]
})
export class HomePage {

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
      console.log(movies);
      this.movies = movies
    });
  }

}
