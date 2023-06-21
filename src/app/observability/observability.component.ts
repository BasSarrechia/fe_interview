import {Component, HostListener, OnInit} from '@angular/core';
import {BehaviorSubject, filter, fromEvent, Observable, ReplaySubject, Subject, take, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-observability',
  templateUrl: './observability.component.html',
  styleUrls: ['./observability.component.css']
})
export class ObservabilityComponent implements OnInit {
  readonly observable$: Observable<any> = new Observable<any>();
  readonly replaySubject$: ReplaySubject<any> = new ReplaySubject<any>();
  readonly behavior$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private readonly sink$: Subject<any> = new Subject<any>();
  readonly stream$: Observable<any> = this.sink$.asObservable();

  ngOnInit(): void {
    fromEvent<KeyboardEvent>(document, 'Keydown')
      .pipe(
        filter((event) => event.key === 'Enter'),
        tap(() => {
          console.log('DETECTED')
        }),
      ).subscribe()
  }
  @HostListener('keydown.enter')
  onEnterPress(): void {
    console.log("HOSTLISTENER")
  }
}
