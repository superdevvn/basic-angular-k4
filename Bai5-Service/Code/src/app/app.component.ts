import { Component, EventEmitter, OnInit } from '@angular/core';
import { NotificationService } from './notification-service.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showNoti: boolean;
  status: string;
  title = 'app';
  movies: Array<object>;

  constructor(
    private notiService: NotificationService,
    private http: Http
  ) {
  }

  ngOnInit(): void {
    this.notiService.notiEvent.subscribe((event) => {
      this.showNoti = true;
    });

    this.loadMovies();
  }

  private async loadMovies() {
    this.status = 'đang load';

    const sub = this.http.get('https://yts.am/api/v2/list_movies.json').subscribe((response: Response) => {
      this.movies = response.json().data.movies;
      this.status = 'đã load';

      sub.unsubscribe();
    }, error => {
      console.log(error);
      this.status = 'load loi';

      sub.unsubscribe();
    });

    // this.http.get('https://yts.am/api/v2/list_movies.json').toPromise().then((response: Response) => {
    //   this.movies = response.json().data.movies;

    //   this.status = 'load xong';
    // }).catch(error => {
    //   console.log(error);
    //   this.status = 'load loi';
    // });

    // try {
    //   const response = await this.http.get('https://yts.am/api/v2/list_movies.json').toPromise();
    //   this.movies = response.json().data.movies;
    //   this.status = 'load xong';
    // } catch (error) {
    //   console.log(error);
    //   this.status = 'load loi';
    // }
  }
}
