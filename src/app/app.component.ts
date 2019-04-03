import { Component } from '@angular/core';
import { MessageServiceService } from './services/message-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'carriage';
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageServiceService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage().subscribe(message => { 
        this.message = message; 
        console.log('#####message ###'+message.text);
      });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}
