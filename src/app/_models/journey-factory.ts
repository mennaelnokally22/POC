import { Payment } from './payment';
import { Prepaid } from './prepaid';

export class JourneyFactory {
    getJourney(journeyName: string): Payment | Prepaid{
        console.log('inside factorty');
        if(journeyName === 'Payment'){
            return new Payment();
        }

        else if(journeyName == 'Prepaid'){
            return new Prepaid();
        }
    }
}