import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
  transform(totalSeconds: number): any {
    const hours: number = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes: number = Math.floor(totalSeconds / 60);
    const seconds: number = totalSeconds % 60;
    const getText = val => ('' + val).length > 1 ? val : '0' + val;
    return (getText(hours) + ':' + getText(minutes) + ':' + getText(seconds));
  }
}
