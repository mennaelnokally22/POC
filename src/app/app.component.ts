import { Component } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poc-app';

  constructor(private testService:TestService){}

  paymentButton(){
    this.testService.getJourneyMessage('Payment','Hello error');
  }

  prepaidButton(){
    this.testService.getJourneyMessage('Prepaid','Hello errorsss');
  }
}
