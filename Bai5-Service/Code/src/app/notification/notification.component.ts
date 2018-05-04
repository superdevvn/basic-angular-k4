import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { NotificationService } from '../notification-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  message: string;

  constructor(private notiService: NotificationService) {
    this.message = 'message';
  }

  ngOnInit() {
    this.notiService.notiEvent.subscribe((event) => {
      this.message = event.p1;
    });
  }

}
