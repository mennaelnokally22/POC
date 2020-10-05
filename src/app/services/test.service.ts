import { Injectable } from '@angular/core';
import { JourneyFactory } from '../_models/journey-factory';
import { Payment } from '../_models/payment';
import { Prepaid } from '../_models/prepaid';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  private getJourneyObj(journeyName:string): Payment | Prepaid{
    console.log('journey',journeyName);
    let factory = new JourneyFactory();
    return factory.getJourney(journeyName);
  }

  getJourneyMessage(journeyName:string,message:string){
    console.log(journeyName,message);
    let journey = this.getJourneyObj(journeyName);
    console.log(journey);
    journey.setErrorMessage(message);
  }
}
