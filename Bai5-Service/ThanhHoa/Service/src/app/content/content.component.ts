import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Http } from '@angular/http';
import { LoadingService } from '../Loading.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  movies: Array<Object>;
  constructor(
    private route: ActivatedRoute,
    private http: Http,
    private loadService: LoadingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadData();
      }
    });

    this.loadData();
  }

  private loadData() {
    const { page } = this.route.snapshot.params;
    this.loadAPI(page);
  }

  private async loadAPI(num) {
    const response = await this.http.get('https://yts.am/api/v2/list_movies.json?page=' + num).toPromise();
    this.movies = response.json().data.movies;
  }
}
