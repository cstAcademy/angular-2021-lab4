import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  flights: any;
  selectedFlight: any

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flights = this.flightsService.getFlightsList();
  }

  flightSelected(event: any) {
    console.log(event);
    this.selectedFlight = event;
  }

}
