import { Component } from '@angular/core';
import { NumberPipe } from '../pipes/number-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//   styles: [`
//   .center {
//     text-align: center;
// }
//   `]
})
export class AppComponent {
  title = 'app';
}
