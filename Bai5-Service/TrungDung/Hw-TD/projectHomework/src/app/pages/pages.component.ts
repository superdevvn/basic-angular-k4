import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  page: number;
  movies: Array<object>;

  constructor(private http: Http, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const { page } = this.route.snapshot.params;
        this.loadMovies(page);
      }
    });
  }


  private async loadMovies(page) {
    const sub = this.http.get('https://yts.am/api/v2/list_movies.json?page=' + page).subscribe((response: Response) => {
      this.movies = response.json().data.movies;
      sub.unsubscribe();
    }, error => {
      console.log(error);
      sub.unsubscribe();
    });
  }


}
