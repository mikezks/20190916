import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Person {
  vorname: string;
  nachname: string;
}

export const passenger: Person = {
  vorname: 'Peter',
  nachname: 'Huber',
};

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flights: Flight[] = [];

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    return this.http
      .get<Flight[]>(url, { params, headers })
      .pipe(
        tap(flights => this.flights = flights)
      );
  }
}
