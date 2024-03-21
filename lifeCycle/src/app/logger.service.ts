import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logs: string[] = [];
  prevMsg: string = '';
  prevMsgCount: number = 1;

  log(msg: string) {
    if (msg === this.prevMsg) {
      this.logs[this.logs.length - 1] = msg + `(${(this.prevMsgCount += 1)})`;
    } else {
      this.prevMsg = msg;
      this.prevMsgCount = 1;
      this.logs.push(msg);
    }
  }

  clear() {
    this.logs = [];
  }

  tick_then(fn: () => any) {
    setTimeout(fn, 0);
  }

  tick() {
    this.tick_then(() => {});
  }
}
