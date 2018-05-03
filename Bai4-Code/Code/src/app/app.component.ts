import { Component } from '@angular/core';
import { Data } from '../constans/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dataList = Data;


  getDate(index: number){
    
    return new Date(this.dataList[index].registered);
  }
}
