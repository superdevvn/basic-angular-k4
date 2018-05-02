import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  newEn = '';
  newVn = '';
  arrWords =[] = [];
  // arrWords =[
  //     { id: 1, en: 'action' , vn: 'hành động', memorized:true},
  //     { id: 2, en: 'actor' , vn: 'diễn viên', memorized:false}
  // ];
  constructor() { }

  ngOnInit() {
  }
  addWord() {
    this.arrWords.unshift({
        id: this.arrWords.length + 1,
        en: this.newEn,
        vn: this.newVn,
        memorized: false
    });
    this.newEn ='';
    this.newVn ='';
  }

}
