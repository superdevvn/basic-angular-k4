import { Http } from '@angular/http';
import { Movie } from '../models/movie.module';
import { Injectable, EventEmitter } from '@angular/core';

const ENDPOINT = 'http://demo0576620.mockable.io/movie';

@Injectable()
export class APIService {
    errorEvent: EventEmitter<string>;

    constructor(private http: Http) {
        this.errorEvent = new EventEmitter<string>();
    }

    handleError(error) {
        this.errorEvent.emit(`${error.status}: ${error.statusText}`);
    }

    async getMovies() {
        try {
            const response = await this.http.get(ENDPOINT).toPromise();
            return response.json().data.movies;
        } catch (error) {
            return this.handleError(error);
        }
    }

    async getMovieById(id) {
        id = 7628; // TODO: this hard code is for mock api

        try {
            const response = await this.http.get(`${ENDPOINT}/${id}`).toPromise();
            return response.json();
        } catch (error) {
            return this.handleError(error);
        }
    }

    async createNewMovie(movie: Movie) {
        try {
            const response = await this.http.post(ENDPOINT, movie).toPromise();
            return response.json();
        } catch (error) {
            this.handleError(error);
            return {};
        }
    }
}
