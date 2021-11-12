import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  getFlightsList() {
    return [
      {
        from: 'BCN',
        to: 'OTP',
        price: '100$',
        duration: '2h30m'
      },
      {
        from: 'TFN',
        to: 'SVL',
        price: '50$',
        duration: '3h30m'
      },
      {
        from: 'CDG',
        to: 'LGA',
        price: '500$',
        duration: '10h30m'
      },
    ]
  }
}
