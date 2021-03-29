import {HostListener, Injectable} from '@angular/core';
import {BehaviorSubject, Subject, timer} from 'rxjs';
import {buffer, debounce, filter, map} from 'rxjs/operators';

@Injectable()
export class AppCounterService {
  private timerId;
  private pauseSubject = new BehaviorSubject<boolean>(true);
  private timeSubject = new BehaviorSubject<number>(0);
  private clickSubject = new Subject<boolean>();

  get timeCurrent() {
    return this.timeSubject.asObservable();
  }

  get isPaused() {
    return this.pauseSubject.asObservable();
  }

  constructor() {
    this.clickSubject
      .pipe(
        buffer(this.clickSubject.pipe(debounce(() => timer(300)))),
        map((clicksWithin300ms) => clicksWithin300ms.length),
        filter((clicksWithin300ms) => clicksWithin300ms === 2)
      )
      .subscribe(() => this.stop());
  }

  click() {
    this.clickSubject.next();
  }

  start() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.pauseSubject.next(false);
    this.timerId = setInterval(
      () => this.timeSubject.next(this.timeSubject.value + +!this.pauseSubject.value),
      1000
    );
  }

  stop() {
    this.pauseSubject.next(true);
  }

  reset() {
    this.timeSubject.next(0);
    clearInterval(this.timerId);
    this.start();
  }
}
