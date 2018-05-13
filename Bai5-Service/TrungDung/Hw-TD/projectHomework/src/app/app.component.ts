import { Component, AfterViewInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  status: string;
  pages: Array<number>;
  totalPages: number;
  p: number = 1;
  constructor(private http: Http, private router: Router) { }

  ngOnInit(): void {
    // console.log($);


  }

  async ngAfterViewInit() {
    await this.loadMovies();

    $('#pagination-demo').twbsPagination({
      totalPages: this.totalPages,
      visiblePages: 10,
      onPageClick: (event, page) => {
        this.onItemClicked(page);
      }
    });
  }

  private async loadMovies() {
    this.status = 'Loading .........';

    try {
      const response = await this.http.get('https://yts.am/api/v2/list_movies.json').toPromise();
      // let calPage = response.json().data.movie_count % response.json().data.limit;
      // if (calPage == 0) {
      //   calPage = response.json().data.movie_count / response.json().data.limit;
      // } else {
      const calPage = Math.ceil(response.json().data.movie_count / response.json().data.limit);
      // }
      this.pages = Array.apply(null, { length: calPage }).map(Number.call, Number);
      this.totalPages = calPage;
      this.status = 'Load Done !';
    } catch (error) {
      console.log(error);
      this.status = 'Load Error !';
    }
  }

  onItemClicked(page) {
    this.router.navigate(['/browse-page', { page }]);
  }

}
