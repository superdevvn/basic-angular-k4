import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../Loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
  array: any = [1, 2, 3, 4, 5, 6, 7, 8, '...', 369, 370, 'Next', 'Last'];
  constructor(
    private loadService: LoadingService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loadContent(page) {
    this.router.navigate(['/movies/page', {page}]);
  }
}
