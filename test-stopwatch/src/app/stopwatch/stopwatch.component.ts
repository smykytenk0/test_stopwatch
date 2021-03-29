import {Component} from '@angular/core';
import {AppCounterService} from '../services/app-counter.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  providers: [AppCounterService],
})
export class StopwatchComponent {

  reset(){
    this.appCounterService.reset();
  }

  wait() {
    this.appCounterService.click();
  }

  constructor(private appCounterService: AppCounterService) {
  }

  get currentTime() {
    return this.appCounterService.timeCurrent;
  }

  start() {
    this.appCounterService.start();
  }

  stop() {
    this.appCounterService.stop();
  }


  get isPause() {
    return this.appCounterService.isPaused;
  }
}
