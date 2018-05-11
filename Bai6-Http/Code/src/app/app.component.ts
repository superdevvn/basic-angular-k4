import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from '../models/movie.module';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies: Movie[];
  movie: Movie;
  message: string;

  constructor(private api: APIService) {
    this.movie = new Movie('Hi', 2018, 'Hello', 5);

    this.api.errorEvent.subscribe(message => this.message = message);
  }

  async ngOnInit() {
    this.movies = await this.api.getMovies();
  }

  async onSave() {
    this.movies.push(await this.api.createNewMovie(this.movie));
  }

  async onMovieClick(id) {
    this.movie = await this.api.getMovieById(id);
  }
}
