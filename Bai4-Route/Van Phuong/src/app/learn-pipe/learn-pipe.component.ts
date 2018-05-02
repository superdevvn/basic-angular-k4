import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(2015, 7, 25);
  person = { name: 'Phương', age: 22};
  diachi = Promise.resolve('247 Tân kỳ tân quý') ;
  constructor() { }

  ngOnInit() {
  }

}
