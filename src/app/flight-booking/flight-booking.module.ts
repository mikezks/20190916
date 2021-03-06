import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';
import { FlightReactiveComponent } from './flight-reactive/flight-reactive.component';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    PassengerSearchComponent,
    FlightReactiveComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlightBookingRoutingModule
  ],
  exports: [
    FlightSearchComponent,
    FlightEditComponent
  ]
})
export class FlightBookingModule { }
