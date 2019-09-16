import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
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
