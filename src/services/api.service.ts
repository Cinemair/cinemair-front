import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  public apiURL = 'http://10.8.1.106:8000/api/v1/'

  public endpoints = {
    movies: `${this.apiURL}movies`,
    cinemas: `${this.apiURL}cinemas`,
    shows: `${this.apiURL}shows`,
    favorites: `${this.apiURL}favorites`,
    auth: `${this.apiURL}auth`
  }

  public movies = {}

  public getMovies() {
    return this.http.get(this.endpoints.movies);
  }

  public getCinemas() {
    return this.http.get(this.endpoints.cinemas);
  }

  public getShows() {
    return this.http.get(this.endpoints.shows);
  }

  public getFavorites() {
    return this.http.get(this.endpoints.favorites);
  }
}