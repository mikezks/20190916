import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Observable, Subscription, Subject, BehaviorSubject } from 'rxjs';
import { map, filter, take, tap, share, switchMap } from 'rxjs/operators';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-flight-reactive',
  templateUrl: './flight-reactive.component.html',
  styleUrls: ['./flight-reactive.component.css']
})
export class FlightReactiveComponent implements OnInit, OnDestroy {
  timer$: Observable<number>;
  timerTimesTen$: Observable<number>;
  subscriptionTimer: Subscription;
  stateProvider = new BehaviorSubject<object>({});
  
  constructor(private flightService: FlightService) { }
  
  ngOnInit() {
    this.timer$ =
      timer(0, 30000);

    this.timer$
      .pipe(
        switchMap(() => this.flightService.find('Graz', 'Hamburg'))
      )
      .subscribe(console.log);

    this.timerTimesTen$ =
      this.timer$
        .pipe(
          map(num => num * 10),
          tap(num => console.log('Timer10', num)),
          share()
        );
    
    this.subscriptionTimer =
      this.timer$
        .pipe(
          //filter(num => num < 10)
          take(10)
        )
        .subscribe(
          //num => console.log(num)
          console.log

          // !!! Unbedingt SUBSCRIBE im SUBSCRIBE vermeiden !!!
          /* num => {
            this.timerTimesTen$
              .subscribe(console.log);
          } */
        );

      this.stateProvider
        .subscribe(console.log);
    }
    
    setState(): void {
      this.stateProvider.next({ name: 'Bond', firstname: 'James' });
    }

    ngOnDestroy(): void {
      this.subscriptionTimer.unsubscribe();
    }
  }
