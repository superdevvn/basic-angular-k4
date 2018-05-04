import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationService } from '../notification-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private notiService: NotificationService) { }

  ngOnInit() {
  }

  onButtonClick() {
    this.notiService.notiEvent.emit({ p1: 'hello', p2: 2 });
    //AppComponent.showNoti = true;
    //NotificationComponent.message = 'hello';
  }
}
