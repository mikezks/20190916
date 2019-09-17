import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg';
  to = 'Graz';
  selectedFlight: Flight;
  //flights: Array<Flight> = [];

  get flights() {
    return this.flightService.flights;
  }

  basket: object = {
    "3": true,
    "5": true
  };

  /* basket: {
    items: object,
    order: number[]
  } = {
    items: {
      "3": true,
      "5": true
    },
    order: [
      5,
      3
    ]
  }; */

  /* get basketArr() {
    return this.basket.order.map(i => this.basket.items[i]);
  } */

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe();
  }

  select(f: Flight) {
    this.selectedFlight = f;
  }
}
